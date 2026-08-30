import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const appid = 'wx6a1192a1b0aa29aa';
const root = path.resolve(import.meta.dirname, '..');
const packageDir = path.join(root, 'packages');
const decryptedDir = path.join(root, 'decrypted');
const unpackedDir = path.join(root, 'unpacked');

function decryptV1MMWX(input) {
  if (input.subarray(0, 6).toString('utf8') !== 'V1MMWX') {
    return input;
  }

  const key = crypto.pbkdf2Sync(Buffer.from(appid), Buffer.from('saltiest'), 1000, 32, 'sha1');
  const iv = Buffer.from('the iv: 16 bytes');
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

  const first = Buffer.concat([
    decipher.update(input.subarray(6, 1030)),
    decipher.final(),
  ]);

  const xorKey = appid.charCodeAt(appid.length - 2);
  const rest = Buffer.from(input.subarray(1030));
  for (let i = 0; i < rest.length; i += 1) {
    rest[i] ^= xorKey;
  }

  return Buffer.concat([first, rest]);
}

function readUInt32BE(buffer, offset, field) {
  if (offset + 4 > buffer.length) {
    throw new Error(`读取 ${field} 越界：offset=${offset}`);
  }
  return buffer.readUInt32BE(offset);
}

function unpackWxapkg(buffer, outDir) {
  if (buffer[0] !== 0xbe || buffer[13] !== 0xed) {
    throw new Error(`非标准 wxapkg 包头：${buffer.subarray(0, 16).toString('hex')}`);
  }

  const indexLength = readUInt32BE(buffer, 5, 'indexLength');
  const bodyLength = readUInt32BE(buffer, 9, 'bodyLength');
  const bodyStart = 14 + indexLength;
  const fileCount = readUInt32BE(buffer, 14, 'fileCount');

  if (bodyStart + bodyLength > buffer.length) {
    throw new Error(`包体长度异常：bodyStart=${bodyStart}, bodyLength=${bodyLength}, total=${buffer.length}`);
  }

  let offset = 18;
  const files = [];
  for (let i = 0; i < fileCount; i += 1) {
    const nameLength = readUInt32BE(buffer, offset, `file[${i}].nameLength`);
    offset += 4;
    const name = buffer.subarray(offset, offset + nameLength).toString('utf8');
    offset += nameLength;
    const fileOffset = readUInt32BE(buffer, offset, `file[${i}].offset`);
    const fileSize = readUInt32BE(buffer, offset + 4, `file[${i}].size`);
    offset += 8;

    const target = path.join(outDir, name.replace(/^[/\\]+/u, ''));
    const resolvedTarget = path.resolve(target);
    const resolvedOutDir = path.resolve(outDir);
    if (!resolvedTarget.startsWith(resolvedOutDir + path.sep) && resolvedTarget !== resolvedOutDir) {
      throw new Error(`拒绝写出越界文件：${name}`);
    }

    fs.mkdirSync(path.dirname(resolvedTarget), { recursive: true });
    fs.writeFileSync(resolvedTarget, buffer.subarray(fileOffset, fileOffset + fileSize));
    files.push({ name, size: fileSize });
  }

  return files;
}

fs.mkdirSync(decryptedDir, { recursive: true });
fs.mkdirSync(unpackedDir, { recursive: true });

const manifest = [];
for (const entry of fs.readdirSync(packageDir, { withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith('.wxapkg')) {
    continue;
  }

  const src = path.join(packageDir, entry.name);
  const raw = fs.readFileSync(src);
  const decrypted = decryptV1MMWX(raw);
  const decryptedPath = path.join(decryptedDir, entry.name);
  fs.writeFileSync(decryptedPath, decrypted);

  const outDir = path.join(unpackedDir, entry.name.replace(/\.wxapkg$/u, ''));
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });
  const files = unpackWxapkg(decrypted, outDir);
  manifest.push({ package: entry.name, files: files.length, outDir });
  console.log(`${entry.name}: 解密并拆出 ${files.length} 个文件 -> ${outDir}`);
}

fs.writeFileSync(
  path.join(root, 'manifest.json'),
  `${JSON.stringify({ appid, generatedAt: new Date().toISOString(), packages: manifest }, null, 2)}\n`,
  'utf8',
);
