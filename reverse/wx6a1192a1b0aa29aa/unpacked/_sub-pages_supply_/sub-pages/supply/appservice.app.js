/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
if (typeof $gwx === 'function') $gwx('init', global);
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx3 || [];
__WXML_GLOBAL__.ops_set.$gwx3=z;
__WXML_GLOBAL__.ops_init.$gwx3=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=[];if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx3";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx3();;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("sub-pages/supply/common/vendor.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/supply/common/vendor"],{

/***/ 271:
/*!*****************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/api/dict.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dictItemLabel = dictItemLabel;
exports.dictItemValue = dictItemValue;
exports.getDictDataByType = getDictDataByType;
exports.getProductLevelList = getProductLevelList;
exports.normalizeDictList = normalizeDictList;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/**
 * 数据字典（App 端）
 * GET /system/app/dict/data/type/{dictType}
 */

/**
 * @param {Vue} vm
 * @param {string} dictType 字典类型，如 product_level_list
 * @param {object} [params] 额外 query
 */
function getDictDataByType(vm, dictType) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var type = encodeURIComponent(String(dictType || '').trim());
  return vm.request('get', "system/app/dict/data/type/".concat(type), token, params);
}

/** 品级字典 product_level_list */
function getProductLevelList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return getDictDataByType(vm, 'product_level_list', params);
}

/**
 * 统一解析字典列表（兼容 data 为数组 / rows / list）
 */
function normalizeDictList(res) {
  if (!res) return [];
  var d = res.data;
  if (Array.isArray(d)) return d;
  if (d && Array.isArray(d.rows)) return d.rows;
  if (d && Array.isArray(d.list)) return d.list;
  if (Array.isArray(res.rows)) return res.rows;
  return [];
}
function dictItemLabel(item) {
  if (!item || (0, _typeof2.default)(item) !== 'object') return '';
  return item.dictLabel != null && item.dictLabel !== '' ? String(item.dictLabel) : item.label != null ? String(item.label) : item.text != null ? String(item.text) : '';
}
function dictItemValue(item) {
  if (!item || (0, _typeof2.default)(item) !== 'object') return '';
  if (item.dictValue != null && item.dictValue !== '') return String(item.dictValue);
  if (item.value != null && item.value !== '') return String(item.value);
  return '';
}

/***/ }),

/***/ 322:
/*!***********************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/utils/printer/batchPrinter.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getBatchPrinter = getBatchPrinter;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 58));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 60));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _bluetooth = _interopRequireDefault(__webpack_require__(/*! ./bluetooth.js */ 108));
var _buildSupplierCpclLabel = __webpack_require__(/*! ./buildSupplierCpclLabel.js */ 323);
var _gbkMin = _interopRequireDefault(__webpack_require__(/*! ./gbk.min.js */ 153));
var BATCH_SIZE = 10;
var BATCH_DELAY = 200;
var BLE_WRITE_RETRY = 3;
function getChunkSize() {
  // 鸿蒙 HarmonyOS：setBLEMTU 协商成功但实际写入 >20B 会报 BussinessError 2900099
  // 且可能让打印机进入错误状态，直接固定 20 字节
  try {
    var sys = uni.getSystemInfoSync();
    if (typeof _bluetooth.default.isHarmonyBlePlatform === 'function' && _bluetooth.default.isHarmonyBlePlatform(sys)) {
      return 20;
    }
    var platform = typeof _bluetooth.default.resolveBlePrintPlatform === 'function' ? _bluetooth.default.resolveBlePrintPlatform(sys) : '';
    if (platform === 'android') {
      var mtu = typeof _bluetooth.default.getMtu === 'function' ? _bluetooth.default.getMtu() : 20;
      return mtu > 20 ? mtu : 20;
    }
  } catch (_) {/* ignore */}
  return 20; // iOS 固定 20 字节
}

function encodeGBK(str) {
  return new Uint8Array(_gbkMin.default.encode(str));
}
function splitToBleChunks(uint8Arr, chunkSize) {
  var chunks = [];
  for (var start = 0; start < uint8Arr.length; start += chunkSize) {
    var end = Math.min(start + chunkSize, uint8Arr.length);
    chunks.push(uint8Arr.slice(start, end).buffer);
  }
  return chunks;
}
function _mergeLabels(cpclStrings) {
  return cpclStrings.join('');
}
function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
var BatchPrinter = /*#__PURE__*/function () {
  function BatchPrinter() {
    (0, _classCallCheck2.default)(this, BatchPrinter);
    this._queue = [];
    this._printing = false;
    this._onProgress = null;
    this._onComplete = null;
    this._onError = null;
  }
  (0, _createClass2.default)(BatchPrinter, [{
    key: "printing",
    get: function get() {
      return this._printing;
    }
  }, {
    key: "queueLength",
    get: function get() {
      return this._queue.length;
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (item && (0, _typeof2.default)(item) === 'object') {
        this._queue.push({
          item: item,
          options: options
        });
      }
    }
  }, {
    key: "addItems",
    value: function addItems(items) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!Array.isArray(items)) return;
      for (var i = 0; i < items.length; i++) {
        this.addItem(items[i], options);
      }
    }
  }, {
    key: "addCpclLabel",
    value: function addCpclLabel(cpcl) {
      var data = String(cpcl || '');
      if (data) {
        this._queue.push({
          cpcl: data
        });
      }
    }
  }, {
    key: "addCpclLabels",
    value: function addCpclLabels(labels) {
      if (!Array.isArray(labels)) return;
      for (var i = 0; i < labels.length; i++) {
        this.addCpclLabel(labels[i]);
      }
    }
  }, {
    key: "clearQueue",
    value: function clearQueue() {
      if (!this._printing) {
        this._queue = [];
      }
    }
  }, {
    key: "mergeLabels",
    value: function mergeLabels(cpclStrings) {
      return _mergeLabels(cpclStrings);
    }

    /**
     * 将连续相同的 CPCL 去重，合并后的 label 使用 qty=N 参数
     * 例如 3 份相同 label → ! 0 200 200 394 3（只发一份指令）
     */
  }, {
    key: "deduplicateAndMerge",
    value: function deduplicateAndMerge(cpclList) {
      if (!Array.isArray(cpclList) || cpclList.length === 0) return '';
      var groups = [];
      var i = 0;
      while (i < cpclList.length) {
        var current = cpclList[i];
        var count = 1;
        while (i + count < cpclList.length && cpclList[i + count] === current) {
          count++;
        }
        if (count > 1) {
          // 修改 PrintAreaSize 的 qty 参数
          groups.push(this.setCpclQty(current, count));
        } else {
          groups.push(current);
        }
        i += count;
      }
      return groups.join('');
    }
  }, {
    key: "setCpclQty",
    value: function setCpclQty(cpcl, qty) {
      // 匹配 "! 0 200 200 <height> <qty>" 替换 qty
      return cpcl.replace(/^(! \d+ \d+ \d+ \d+) \d+/m, "$1 ".concat(qty));
    }
  }, {
    key: "onProgress",
    value: function onProgress(fn) {
      this._onProgress = typeof fn === 'function' ? fn : null;
    }
  }, {
    key: "onComplete",
    value: function onComplete(fn) {
      this._onComplete = typeof fn === 'function' ? fn : null;
    }
  }, {
    key: "onError",
    value: function onError(fn) {
      this._onError = typeof fn === 'function' ? fn : null;
    }
  }, {
    key: "start",
    value: function () {
      var _start = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var callbacks,
          profile,
          connected,
          result,
          mtu,
          total,
          printed,
          chunkSize,
          _startTs,
          _totalBytes,
          _totalChunks,
          labels,
          i,
          _this$_queue$i,
          cpcl,
          item,
          options,
          batchTotal,
          b,
          batch,
          batchIndex,
          mergedCpcl,
          bytes,
          chunks,
          elapsed,
          _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                callbacks = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                if (callbacks.onProgress) this._onProgress = callbacks.onProgress;
                if (callbacks.onComplete) this._onComplete = callbacks.onComplete;
                if (callbacks.onError) this._onError = callbacks.onError;
                if (!this._printing) {
                  _context.next = 7;
                  break;
                }
                this._fireError(new Error('正在打印中，请稍候'));
                return _context.abrupt("return");
              case 7:
                if (this._queue.length) {
                  _context.next = 10;
                  break;
                }
                this._fireError(new Error('打印队列为空'));
                return _context.abrupt("return");
              case 10:
                if (_bluetooth.default.isMpWeixin()) {
                  _context.next = 13;
                  break;
                }
                this._fireError(new Error('请在微信小程序中使用'));
                return _context.abrupt("return");
              case 13:
                _context.prev = 13;
                _context.next = 16;
                return _bluetooth.default.ensurePrivacyAuthorizedWithPrompt();
              case 16:
                _context.next = 22;
                break;
              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](13);
                this._fireError(_context.t0 instanceof Error ? _context.t0 : new Error('隐私授权失败'));
                return _context.abrupt("return");
              case 22:
                profile = _bluetooth.default.getProfile() || {};
                _context.prev = 23;
                _context.next = 26;
                return _bluetooth.default.checkConnection(profile);
              case 26:
                connected = _context.sent;
                _context.next = 32;
                break;
              case 29:
                _context.prev = 29;
                _context.t1 = _context["catch"](23);
                connected = false;
              case 32:
                if (connected) {
                  _context.next = 44;
                  break;
                }
                _context.prev = 33;
                _context.next = 36;
                return _bluetooth.default.autoReconnect();
              case 36:
                result = _context.sent;
                connected = result.ok;
                if (connected) {
                  profile = result.profile || _bluetooth.default.getProfile() || profile;
                }
                _context.next = 44;
                break;
              case 41:
                _context.prev = 41;
                _context.t2 = _context["catch"](33);
                connected = false;
              case 44:
                if (!(!connected || !profile.deviceId || !profile.serviceId || !profile.writeId)) {
                  _context.next = 47;
                  break;
                }
                this._fireError(new Error('请先在打印设置中连接蓝牙打印机'));
                return _context.abrupt("return");
              case 47:
                if (!(typeof _bluetooth.default.negotiateMtu === 'function')) {
                  _context.next = 57;
                  break;
                }
                _context.prev = 48;
                _context.next = 51;
                return _bluetooth.default.negotiateMtu(profile.deviceId);
              case 51:
                mtu = _context.sent;
                console.log('[Print] MTU negotiated:', mtu);
                _context.next = 57;
                break;
              case 55:
                _context.prev = 55;
                _context.t3 = _context["catch"](48);
              case 57:
                this._printing = true;
                total = this._queue.length;
                printed = 0;
                chunkSize = getChunkSize();
                _startTs = Date.now();
                _totalBytes = 0;
                _totalChunks = 0;
                console.log("[Print] queue=".concat(total, ", chunkSize=").concat(chunkSize));
                _context.prev = 65;
                labels = [];
                for (i = 0; i < this._queue.length; i++) {
                  _this$_queue$i = this._queue[i], cpcl = _this$_queue$i.cpcl, item = _this$_queue$i.item, options = _this$_queue$i.options;
                  labels.push(cpcl || (0, _buildSupplierCpclLabel.buildSupplierCpclLabel)(item, options));
                }
                batchTotal = Math.ceil(labels.length / BATCH_SIZE);
                b = 0;
              case 70:
                if (!(b < labels.length)) {
                  _context.next = 98;
                  break;
                }
                batch = labels.slice(b, b + BATCH_SIZE);
                batchIndex = Math.floor(b / BATCH_SIZE);
                mergedCpcl = batch.length > 1 ? this.deduplicateAndMerge(batch) : this.mergeLabels(batch);
                console.log('=== 合并后的 CPCL 指令 ===');
                console.log(mergedCpcl.substring(0, 500));
                console.log('是否包含多个 FORM:', (mergedCpcl.match(/FORM/g) || []).length);
                console.log('是否包含 PRINT:', mergedCpcl.includes('PRINT'));
                console.log('PRINT 出现次数:', (mergedCpcl.match(/PRINT/g) || []).length);
                bytes = encodeGBK(mergedCpcl);
                chunks = splitToBleChunks(bytes, chunkSize);
                _totalBytes += bytes.length;
                _totalChunks += chunks.length;
                console.log('本批标签数:', batch.length);
                console.log('GBK字节数:', bytes.length);
                console.log('BLE分包数:', chunks.length);
                if (chunks.length) {
                  _context.next = 88;
                  break;
                }
                throw new Error('打印数据为空');
              case 88:
                _context.next = 90;
                return this._sendChunks(profile, chunks, chunkSize > 20 ? bytes : null);
              case 90:
                printed += batch.length;
                this._fireProgress({
                  current: printed,
                  total: total,
                  batch: batchIndex + 1,
                  batchTotal: batchTotal
                });
                if (!(b + BATCH_SIZE < labels.length)) {
                  _context.next = 95;
                  break;
                }
                _context.next = 95;
                return delay(BATCH_DELAY);
              case 95:
                b += BATCH_SIZE;
                _context.next = 70;
                break;
              case 98:
                this._fireComplete({
                  total: total
                });
                elapsed = Date.now() - _startTs;
                console.log("[PrintPerf] ".concat(total, " labels, ").concat(_totalBytes, " bytes, ").concat(_totalChunks, " chunks, ").concat(elapsed, "ms ") + "(".concat(Math.round(total / (elapsed / 1000) || 0), " labels/s, ") + "".concat(Math.round(_totalBytes / (elapsed / 1000) || 0), " bytes/s)"));
                _context.next = 106;
                break;
              case 103:
                _context.prev = 103;
                _context.t4 = _context["catch"](65);
                this._fireError(_context.t4 instanceof Error ? _context.t4 : new Error(String(_context.t4 && _context.t4.message || '打印失败')));
              case 106:
                _context.prev = 106;
                this._printing = false;
                this._queue = [];
                return _context.finish(106);
              case 110:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[13, 18], [23, 29], [33, 41], [48, 55], [65, 103, 106, 110]]);
      }));
      function start() {
        return _start.apply(this, arguments);
      }
      return start;
    }()
  }, {
    key: "_sendChunks",
    value: function _sendChunks(profile, chunks, originalBytes) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        var fallback = false;
        var send = function send(i) {
          if (i >= chunks.length) {
            resolve();
            return;
          }
          _this._writeOnce(profile, chunks[i], i).then(function () {
            return send(i + 1);
          }).catch(function (err) {
            if (!fallback && originalBytes) {
              // 大块写入失败 → 降级到 20 字节
              console.warn("[Print] chunk ".concat(i, " (").concat(chunks[i].byteLength, "B) fail, fallback to 20B"));
              // 通知 bluetooth 模块降级 MTU，后续批次直接使用 20B 避免重复试错
              if (typeof _bluetooth.default.downgradeMtu === 'function') {
                _bluetooth.default.downgradeMtu(20);
              }
              fallback = true;
              var bytePos = i * chunks[0].byteLength;
              var remaining = originalBytes.slice(bytePos);
              chunks = splitToBleChunks(remaining, 20);
              originalBytes = null; // 只降级一次
              send(0);
            } else {
              reject(err);
            }
          });
        };
        send(0);
      });
    }
  }, {
    key: "_writeOnce",
    value: function _writeOnce(profile, value, chunkIndex) {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        var tried = 0;
        var attempt = function attempt() {
          tried++;
          try {
            uni.writeBLECharacteristicValue({
              deviceId: profile.deviceId,
              serviceId: profile.serviceId,
              characteristicId: profile.writeId,
              value: value,
              writeType: profile.writeNoResponse ? 'writeNoResponse' : 'write',
              success: resolve,
              fail: function fail(err) {
                console.warn("BLE write fail (chunk ".concat(chunkIndex, ", attempt ").concat(tried, ")"), err);
                // GATT INVALID ATTR LEN: data too large, retrying same size won't help
                var isSizeError = err.errCode === 10008 || String(err.errMsg || '').includes('INVALID ATTR LEN');
                if (!isSizeError && tried < BLE_WRITE_RETRY) {
                  setTimeout(attempt, 100);
                } else {
                  reject(new Error(_this2._fmtBleError(err, chunkIndex)));
                }
              }
            });
          } catch (e) {
            console.warn("BLE write exception (chunk ".concat(chunkIndex, ")"), e);
            if (tried < BLE_WRITE_RETRY) {
              setTimeout(attempt, 100);
            } else {
              reject(new Error('蓝牙写入异常: ' + (e.message || e)));
            }
          }
        };
        attempt();
      });
    }
  }, {
    key: "_fmtBleError",
    value: function _fmtBleError(err, chunkIndex) {
      if (typeof _bluetooth.default.formatBleError === 'function') {
        var formatted = _bluetooth.default.formatBleError(err, "\u84DD\u7259\u5199\u5165\u5931\u8D25 (chunk ".concat(chunkIndex, ")"));
        return formatted.message;
      }
      if (!err) return "\u84DD\u7259\u5199\u5165\u5931\u8D25 (chunk ".concat(chunkIndex, ")");
      var code = err.errCode || err.errno || '';
      var msg = err.errMsg || err.message || '';
      return "\u84DD\u7259\u5199\u5165\u5931\u8D25 (chunk ".concat(chunkIndex, ", errCode=").concat(code, "): ").concat(msg);
    }
  }, {
    key: "_fireProgress",
    value: function _fireProgress(data) {
      try {
        if (this._onProgress) this._onProgress(data);
      } catch (_) {}
    }
  }, {
    key: "_fireComplete",
    value: function _fireComplete(data) {
      try {
        if (this._onComplete) this._onComplete(data);
      } catch (_) {}
    }
  }, {
    key: "_fireError",
    value: function _fireError(error) {
      try {
        if (this._onError) this._onError(error);
      } catch (_) {}
    }
  }]);
  return BatchPrinter;
}();
var batchPrinter = new BatchPrinter();
function getBatchPrinter() {
  return batchPrinter;
}
var _default = batchPrinter;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 323:
/*!*********************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/utils/printer/buildSupplierCpclLabel.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildSupplierCpclLabel = buildSupplierCpclLabel;
exports.extractCustomerSurname = extractCustomerSurname;
var _PrinterHelperCpcl = _interopRequireDefault(__webpack_require__(/*! ./PrinterHelperCpcl.js */ 151));
var _storage = __webpack_require__(/*! @/api/storage.js */ 78);
/** @deprecated 保留兼容；标签已改为显示完整客户名 */
function extractCustomerSurname(name) {
  var s = String(name || '').trim();
  if (!s || s === '-') return '-';
  return Array.from(s)[0] || '-';
}

/** 按车号位数缩小放大倍数，1～2 位均 mag 7×7，3 位略缩小 */
function getCarNoStyle(carNo) {
  var len = String(carNo || '').length;
  if (len <= 1) return {
    mag: '7',
    x: 178,
    y: 32
  };
  if (len === 2) return {
    mag: '7',
    x: 158,
    y: 32
  };
  return {
    mag: '4',
    x: 158,
    y: 32
  };
}

/** 客户姓名：保留原字号梯度，固定右侧起点；过长才换行避免左移与车号重叠 */
function getConsigneeStyle(name) {
  var text = String(name || '').trim() || '-';
  var chars = Array.from(text);
  var len = chars.length;
  var x = 350;

  // 短姓名：保持原放大倍数单行显示
  // if (len <= 2) return { mag: '5', x, y: 46, font: '4', line1: text, line2: '' }
  if (len <= 3) return {
    mag: '4',
    x: x,
    y: 48,
    font: '4',
    line1: text,
    line2: ''
  };
  if (len <= 7) return {
    mag: '3',
    x: x,
    y: 52,
    font: '4',
    line1: text,
    line2: ''
  };
  // if (len <= 7) return { mag: '2', x, y: 58, font: '4', line1: text, line2: '' }
  // 长姓名（≥7）：保持 mag 2 字号，拆两行避免越界与车号冲突
  var half = Math.ceil(len / 2);
  return {
    mag: '2',
    x: x,
    y: 58,
    font: '4',
    line1: chars.slice(0, half).join(''),
    line2: chars.slice(half).join('')
  };
}

/** 城市仓：竖排「昱禾联仓」右侧竖排，小字号；按字数缩小行距避免与品牌行重叠 */
function getStoreNameStyle(name) {
  var chars = Array.from(String(name || '').trim() || '-').slice(0, 8);
  var x = 74;
  var startY = 26;
  var step = chars.length <= 4 ? 26 : chars.length <= 6 ? 22 : 18;
  return {
    mag: '1',
    x: x,
    startY: startY,
    step: step,
    chars: chars
  };
}

/** 竖排文字底部 Y（font + SetMag），供其下方横排定位 */
function getVerticalTextBottomY(charCount, startY, step, mag) {
  var lastCharY = startY + (charCount - 1) * step;
  return lastCharY + 14 * Number(mag) + 10;
}

/** 品牌+商品名：「昱禾联仓」下方横排，按字数与可用高度适配，不碰竖排与分隔线 */
function getBrandProductLayout(line, leftCharCount, startY, step, xLeft, yDivider) {
  var len = Array.from(String(line || '').trim() || '-').length;
  var y = getVerticalTextBottomY(leftCharCount, startY, step, 2) + 10;
  var maxBottom = yDivider - 8;
  var availableH = maxBottom - y;
  var magH = '1';
  var magV = '1';
  if (len <= 8 && availableH >= 26) {
    magH = '2';
    magV = '2';
  } else if (len <= 14 && availableH >= 16) {
    magH = '2';
    magV = '1';
  }
  var estHeight = 12 * Number(magV);
  if (y + estHeight > maxBottom) {
    magH = '1';
    magV = '1';
  }
  return {
    magH: magH,
    magV: magV,
    x: xLeft,
    y: y
  };
}

/** 按拍子号位数缩小放大倍数（与打印区宽度匹配，避免被裁切） */
function getPzNoStyle(pz) {
  var len = String(pz || '').length;
  if (len <= 1) return {
    mag: '4',
    x: 418,
    y: 278
  };
  if (len === 2) return {
    mag: '3',
    x: 408,
    y: 274
  };
  if (len <= 4) return {
    mag: '2',
    x: 396,
    y: 272
  };
  if (len <= 6) return {
    mag: '1',
    x: 388,
    y: 272
  };
  return {
    mag: '1',
    x: 372,
    y: 274
  };
}

/**
 * 供应商送货标签 CPCL（70×50mm @200dpi）
 * @param {object} item 明细行
 * @param {{ supplierName?: string }} options
 */
function buildSupplierCpclLabel(item) {
  var _ref, _it$carNo;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var it = item || {};
  var LABEL_WIDTH_DOTS = 560;
  var LABEL_HEIGHT_DOTS = 394;
  var X_LEFT = 18;
  var LEFT_CHAR_START_Y = 26;
  var LEFT_CHAR_STEP = 34;
  var X_MAIN = 158;
  var X_CUSTOMER = 360;
  var X_PZ = 400;
  /** 上半区分隔线；品牌+商品名需在其上方 */
  var Y_DIVIDER = 222;
  var LOWER_OFFSET_Y = 24;
  var carNo = String((_ref = (_it$carNo = it.carNo) !== null && _it$carNo !== void 0 ? _it$carNo : it.lineNo) !== null && _ref !== void 0 ? _ref : '').trim() || '-';
  var carStyle = getCarNoStyle(carNo);
  var leftVertical = '昱禾联仓';
  var storeName = String(it.storeName || it.store || it.storeNm || '').trim() || '-';
  var storeStyle = getStoreNameStyle(storeName);
  var supplierName = String(it.supplierName || options.supplierName || '').trim() || '-';
  var consigneeName = String(it.consignee || '').trim() || '-';
  var consigneeStyle = getConsigneeStyle(consigneeName);
  var productBrand = String((0, _storage.pickFirstField)(it, ['productBrand', 'brand']) || '').trim();
  var productName = String((0, _storage.pickFirstField)(it, ['productName', 'goodsName', 'name', 'title']) || '').trim();
  var brandProductLine = [productBrand, productName].filter(function (s) {
    return s && s !== '-';
  }).join('+').slice(0, 22) || '-';
  var leftCharCount = Array.from(leftVertical.slice(0, 4)).length;
  var brandProductLayout = getBrandProductLayout(brandProductLine, leftCharCount, LEFT_CHAR_START_Y, LEFT_CHAR_STEP, X_LEFT, Y_DIVIDER);
  var productNo = String(it.productNo || it.barCode || it.barcode || it.productId || it.serialNo || '').trim() || '-';
  var gross = it.netWeight != null && String(it.netWeight).trim() !== '' ? String(it.netWeight).trim() : '-';
  var net = it.weight != null && String(it.weight).trim() !== '' ? String(it.weight).trim() : '-';
  var now = new Date();
  var dateLine = "".concat(now.getFullYear(), "\u5E74").concat(now.getMonth() + 1, "\u6708").concat(now.getDate(), "\u65E5");
  var pzNoRaw = String((0, _storage.pickFirstField)(it, ['pzNo', 'pzNO', 'pz_no', 'pzno']) || '').trim();
  var pzNoFirstPart = pzNoRaw ? pzNoRaw.split(/[，,、\s/|]+/).filter(Boolean)[0] || '' : '';
  /** 打印完整拍子号首段（最多 8 位），避免旧逻辑只取前 2 位箱号导致与页面显示不一致 */
  var pzDisplay = pzNoFirstPart ? pzNoFirstPart.slice(0, 8) : '-';
  var pzStyle = getPzNoStyle(pzDisplay);
  _PrinterHelperCpcl.default.data = '';
  _PrinterHelperCpcl.default.PrintAreaSize('0', '200', '200', String(LABEL_HEIGHT_DOTS), '1');
  _PrinterHelperCpcl.default.PageWidth(String(LABEL_WIDTH_DOTS));
  _PrinterHelperCpcl.default.Speed('6');
  _PrinterHelperCpcl.default.SetMag('2', '2');
  var leftChars = Array.from(leftVertical.slice(0, 4));
  for (var i = 0; i < leftChars.length; i++) {
    _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '55', '0', String(X_LEFT), String(LEFT_CHAR_START_Y + i * LEFT_CHAR_STEP), leftChars[i]);
  }

  // 品牌+商品名（「昱禾联仓」下方横排）
  _PrinterHelperCpcl.default.SetMag(brandProductLayout.magH, brandProductLayout.magV);
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', String(brandProductLayout.x), String(brandProductLayout.y), brandProductLine || '-');
  _PrinterHelperCpcl.default.SetMag('1', '1');

  // 上半区：车号 / 客户（标题正常字号，不继承左侧竖排放大）
  _PrinterHelperCpcl.default.SetMag('1', '1');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', String(X_MAIN), '14', '车号');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', String(X_CUSTOMER), '14', '客户');
  _PrinterHelperCpcl.default.SetMag(carStyle.mag, carStyle.mag);
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '4', '0', String(carStyle.x), String(carStyle.y), carNo.slice(0, 3));
  _PrinterHelperCpcl.default.SetMag(consigneeStyle.mag, consigneeStyle.mag);
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, consigneeStyle.font, '0', String(consigneeStyle.x), String(consigneeStyle.y), consigneeStyle.line1);
  if (consigneeStyle.line2) {
    _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, consigneeStyle.font, '0', String(consigneeStyle.x), String(consigneeStyle.y + 28), consigneeStyle.line2);
  }
  _PrinterHelperCpcl.default.SetMag('1', '1');

  // 城市仓（竖排「昱禾联仓」右侧竖排）
  _PrinterHelperCpcl.default.SetMag(storeStyle.mag, storeStyle.mag);
  for (var _i = 0; _i < storeStyle.chars.length; _i++) {
    _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', String(storeStyle.x), String(storeStyle.startY + _i * storeStyle.step), storeStyle.chars[_i]);
  }
  _PrinterHelperCpcl.default.SetMag('1', '1');
  _PrinterHelperCpcl.default.Line('0', String(Y_DIVIDER), String(LABEL_WIDTH_DOTS), String(Y_DIVIDER), '1');

  // 下半区
  _PrinterHelperCpcl.default.SetBold('1');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '18', String(206 + LOWER_OFFSET_Y), supplierName.slice(0, 22));
  _PrinterHelperCpcl.default.SetBold('0');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '18', String(242 + LOWER_OFFSET_Y), '毛重');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '72', String(242 + LOWER_OFFSET_Y), "".concat(gross, "\u65A4"));
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '200', String(242 + LOWER_OFFSET_Y), '净重');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '254', String(242 + LOWER_OFFSET_Y), "".concat(net, "\u65A4"));
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '18', String(278 + LOWER_OFFSET_Y), '日期');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '72', String(278 + LOWER_OFFSET_Y), dateLine);
  _PrinterHelperCpcl.default.SetBold('1');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', String(X_PZ), String(228 + LOWER_OFFSET_Y), '拍子号');
  _PrinterHelperCpcl.default.SetBold('0');
  _PrinterHelperCpcl.default.SetMag(pzStyle.mag, pzStyle.mag);
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '4', '0', String(pzStyle.x), String(pzStyle.y + LOWER_OFFSET_Y), pzDisplay);
  _PrinterHelperCpcl.default.SetMag('1', '1');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '18', String(312 + LOWER_OFFSET_Y), '商品编号');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '126', String(312 + LOWER_OFFSET_Y), productNo.slice(0, 20));
  _PrinterHelperCpcl.default.Form();
  _PrinterHelperCpcl.default.Print();
  return _PrinterHelperCpcl.default.data;
}

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/sub-pages/supply/common/vendor.js.map
},{isPage:false,isComponent:false,currentFile:'sub-pages/supply/common/vendor.js'});