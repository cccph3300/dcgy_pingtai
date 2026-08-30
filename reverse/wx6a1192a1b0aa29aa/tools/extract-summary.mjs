import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const unpackedRoot = path.join(root, 'unpacked');
const appConfigPath = path.join(unpackedRoot, '__APP__', 'app-config.json');

function walkFiles(dir, result = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(full, result);
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      result.push(full);
    }
  }
  return result;
}

function lineNumberOf(text, index) {
  return text.slice(0, index).split(/\r?\n/u).length;
}

function collectEndpoints() {
  const files = walkFiles(unpackedRoot);
  const endpoints = new Map();
  const patterns = [
    /\b(?:vm|this|that|_this\d*)\.request\(\s*['"]([a-z]+)['"]\s*,\s*['"]([^'"]+)['"]/gu,
    /\b(?:vm|this|that|_this\d*)\.request\(\s*['"]([a-z]+)['"]\s*,\s*`([^`$]+)`/gu,
  ];

  for (const file of files) {
    const text = fs.readFileSync(file, 'utf8');
    for (const pattern of patterns) {
      for (const match of text.matchAll(pattern)) {
        const method = match[1].toUpperCase();
        const endpoint = match[2].replace(/^\/+/u, '');
        if (!endpoint || endpoint.includes('${')) {
          continue;
        }
        const key = `${method} ${endpoint}`;
        const rel = path.relative(root, file).replace(/\\/gu, '/');
        const item = endpoints.get(key) || { method, endpoint, locations: [] };
        item.locations.push({ file: rel, line: lineNumberOf(text, match.index ?? 0) });
        endpoints.set(key, item);
      }
    }
  }

  return [...endpoints.values()].sort((a, b) => `${a.method} ${a.endpoint}`.localeCompare(`${b.method} ${b.endpoint}`));
}

function collectRoutes() {
  const cfg = JSON.parse(fs.readFileSync(appConfigPath, 'utf8'));
  return {
    entryPagePath: cfg.entryPagePath,
    subPackages: cfg.subPackages || [],
    pages: (cfg.pages || []).map((page) => ({
      path: page,
      title: cfg.page?.[`${page}.html`]?.window?.navigationBarTitleText || '',
    })),
    preloadRule: cfg.preloadRule || {},
    permission: cfg.permission || {},
    requiredPrivateInfos: cfg.requiredPrivateInfos || [],
  };
}

const routes = collectRoutes();
const endpoints = collectEndpoints();

fs.writeFileSync(path.join(root, 'routes.json'), `${JSON.stringify(routes, null, 2)}\n`, 'utf8');
fs.writeFileSync(path.join(root, 'api-endpoints.json'), `${JSON.stringify(endpoints, null, 2)}\n`, 'utf8');

const groups = new Map();
for (const endpoint of endpoints) {
  const group = endpoint.endpoint.split('/')[0] || 'other';
  groups.set(group, (groups.get(group) || 0) + 1);
}

const lines = [
  '# 昱禾联仓集采物联通小程序逆向摘要',
  '',
  `- AppID：wx6a1192a1b0aa29aa`,
  `- 入口页：${routes.entryPagePath}`,
  `- 页面数量：${routes.pages.length}`,
  `- 已识别静态接口数量：${endpoints.length}`,
  `- 生产接口根地址：https://admin.dgyhlc.com/prod-api`,
  `- 测试接口根地址：https://dev.dgyhlc.com/prod-api`,
  `- 本地开发根地址：http://localhost:8585`,
  '',
  '## 分包',
  '',
  ...routes.subPackages.map((item) => `- ${item.root}`),
  '',
  '## 接口分组数量',
  '',
  ...[...groups.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([group, count]) => `- ${group}: ${count}`),
  '',
  '## 高频业务入口',
  '',
  '- 登录/账号：login、getInfo、captchaImage、rider/wxLogin/*',
  '- 商户/订单：order/storeOrder/*、order/dailySummary/*',
  '- 供应商：supplier/app/add、storage/supplierInfo/*、storage/stock/*',
  '- 商品：product/storeCategory/*、product/storeProduct/*、product/audit/*',
  '- 账单：app/supplierBill/*',
  '- 仓库/拣货：system/allocation*、system/orderPick/*、system/pickItem/*',
  '',
  '## 生成文件',
  '',
  '- routes.json：页面路由与标题',
  '- api-endpoints.json：静态识别接口、方法、出现位置',
  '- decrypted/：解密后的标准 wxapkg',
  '- unpacked/：拆包后的文件',
  '',
];

fs.writeFileSync(path.join(root, 'SUMMARY.md'), `${lines.join('\n')}\n`, 'utf8');
console.log(`已生成 routes.json、api-endpoints.json、SUMMARY.md；接口数量 ${endpoints.length}`);
