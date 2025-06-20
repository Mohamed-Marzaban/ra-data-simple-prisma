'use strict';

var deverything = require('deverything');
var reactAdmin = require('react-admin');
var axios = require('axios');
var deepmerge = require('deepmerge');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var axios__default = /*#__PURE__*/_interopDefault(axios);
var deepmerge__default = /*#__PURE__*/_interopDefault(deepmerge);

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "../../node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// ../../node_modules/lodash/eq.js
var require_eq = __commonJS({
  "../../node_modules/lodash/eq.js"(exports, module) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// ../../node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "../../node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// ../../node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "../../node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// ../../node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "../../node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module.exports = listCacheGet;
  }
});

// ../../node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "../../node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// ../../node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "../../node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// ../../node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "../../node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// ../../node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "../../node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// ../../node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "../../node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// ../../node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "../../node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// ../../node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "../../node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// ../../node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "../../node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// ../../node_modules/lodash/_root.js
var require_root = __commonJS({
  "../../node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// ../../node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "../../node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// ../../node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "../../node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// ../../node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "../../node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// ../../node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "../../node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// ../../node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "../../node_modules/lodash/isObject.js"(exports, module) {
    function isObject4(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject4;
  }
});

// ../../node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "../../node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject4 = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject4(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  }
});

// ../../node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "../../node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// ../../node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "../../node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// ../../node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "../../node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// ../../node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "../../node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject4 = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject4(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// ../../node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "../../node_modules/lodash/_getValue.js"(exports, module) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  }
});

// ../../node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "../../node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// ../../node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "../../node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map = getNative(root, "Map");
    module.exports = Map;
  }
});

// ../../node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "../../node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// ../../node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "../../node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// ../../node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "../../node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// ../../node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "../../node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// ../../node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "../../node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  }
});

// ../../node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "../../node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// ../../node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "../../node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// ../../node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "../../node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// ../../node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "../../node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// ../../node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "../../node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// ../../node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "../../node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// ../../node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "../../node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// ../../node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "../../node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// ../../node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "../../node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// ../../node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "../../node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// ../../node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "../../node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// ../../node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "../../node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// ../../node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "../../node_modules/lodash/_setCacheAdd.js"(exports, module) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// ../../node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "../../node_modules/lodash/_setCacheHas.js"(exports, module) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});

// ../../node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "../../node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// ../../node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "../../node_modules/lodash/_arraySome.js"(exports, module) {
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// ../../node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "../../node_modules/lodash/_cacheHas.js"(exports, module) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// ../../node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "../../node_modules/lodash/_equalArrays.js"(exports, module) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});

// ../../node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "../../node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module.exports = Uint8Array2;
  }
});

// ../../node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "../../node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// ../../node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "../../node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// ../../node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "../../node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var Uint8Array2 = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// ../../node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "../../node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// ../../node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "../../node_modules/lodash/isArray.js"(exports, module) {
    var isArray2 = Array.isArray;
    module.exports = isArray2;
  }
});

// ../../node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "../../node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray2 = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray2(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// ../../node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "../../node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// ../../node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "../../node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// ../../node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "../../node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// ../../node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "../../node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// ../../node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "../../node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// ../../node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "../../node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// ../../node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "../../node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// ../../node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "../../node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// ../../node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "../../node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// ../../node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "../../node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// ../../node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "../../node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// ../../node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "../../node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// ../../node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "../../node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// ../../node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "../../node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// ../../node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "../../node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// ../../node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "../../node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray2 = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// ../../node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "../../node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// ../../node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "../../node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// ../../node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "../../node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// ../../node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "../../node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// ../../node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "../../node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module.exports = isArrayLike;
  }
});

// ../../node_modules/lodash/keys.js
var require_keys = __commonJS({
  "../../node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// ../../node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "../../node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// ../../node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "../../node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// ../../node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "../../node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module.exports = DataView;
  }
});

// ../../node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "../../node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// ../../node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "../../node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Set = getNative(root, "Set");
    module.exports = Set;
  }
});

// ../../node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "../../node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap = getNative(root, "WeakMap");
    module.exports = WeakMap;
  }
});

// ../../node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "../../node_modules/lodash/_getTag.js"(exports, module) {
    var DataView = require_DataView();
    var Map = require_Map();
    var Promise2 = require_Promise();
    var Set = require_Set();
    var WeakMap = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// ../../node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "../../node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray2 = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// ../../node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "../../node_modules/lodash/_baseIsEqual.js"(exports, module) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// ../../node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "../../node_modules/lodash/_baseIsMatch.js"(exports, module) {
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  }
});

// ../../node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "../../node_modules/lodash/_isStrictComparable.js"(exports, module) {
    var isObject4 = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject4(value);
    }
    module.exports = isStrictComparable;
  }
});

// ../../node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "../../node_modules/lodash/_getMatchData.js"(exports, module) {
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    module.exports = getMatchData;
  }
});

// ../../node_modules/lodash/isMatch.js
var require_isMatch = __commonJS({
  "../../node_modules/lodash/isMatch.js"(exports, module) {
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    function isMatch2(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }
    module.exports = isMatch2;
  }
});

// src/audit/types.ts
var defaultAuditOptions = {
  columns: {
    id: "id",
    date: "date",
    resource: "resource",
    action: "action",
    payload: "payload",
    author: "author"
  },
  enabledForAction: {
    create: true,
    update: true,
    delete: true
  }
};
var auditHandler = async (request, options, created) => {
  const action = request.method.split(/(?=[A-Z])/)[0];
  const mergedOptions = {
    ...defaultAuditOptions,
    ...options
  };
  if (action === "get" || mergedOptions.enabledForAction[action] === false) {
    return;
  }
  if (mergedOptions.enabledResources && !(request.model in mergedOptions)) {
    return;
  }
  if (request.method === "updateMany" || request.method === "deleteMany") {
    for (const id of request.params.ids) {
      await createAuditEntry(mergedOptions, request, id);
    }
  } else if ("id" in request.params) {
    await createAuditEntry(mergedOptions, request, request.params.id);
  } else if (created) {
    await createAuditEntry(mergedOptions, request, created.id);
  }
};
var createAuditEntry = async (options, request, id) => {
  let payload = {
    id: id.toString()
  };
  if ("previousData" in request.params) {
    payload.previousData = request.params.previousData;
  }
  if ("data" in request.params) {
    payload.data = request.params.data;
  }
  if (payload.data && payload.previousData) {
    payload.diff = deverything.objectDiff(payload.previousData, payload.data);
  }
  const user = await options.authProvider.getIdentity();
  let data = {
    [options.columns.action]: request.method.split(/(?=[A-Z])/)[0],
    //createMany => create
    [options.columns.resource]: request.resource,
    [options.columns.payload]: payload,
    [options.columns.author]: {
      connect: { id: user.id }
    }
  };
  const created = await options.model.create({
    data
  });
  return created;
};

// src/lib/isNotField.ts
var isNotField = (fieldName) => {
  if (fieldName.startsWith("_")) return true;
  return false;
};

// src/getModel.ts
var getModel = (req, prismaClient) => {
  const modelName = req.model || req.resource;
  if (!modelName) throw new Error(`model name is empty`);
  const model = prismaClient[modelName];
  if (!model) throw new Error(`No model found for "${modelName}"`);
  return model;
};

// src/createHandler.ts
var createHandler = async (req, prismaClient, options) => {
  const model = getModel(req, prismaClient);
  const { data } = req.params;
  if (options == null ? void 0 : options.debug) console.log("createHandler:data", data);
  Object.entries(data).forEach(([key, value]) => {
    if (value === "") {
      delete data[key];
    }
    if (isNotField(key)) {
      delete data[key];
    }
  });
  Object.entries(data).forEach(([prop, value]) => {
    var _a;
    const foreignConnect = (_a = options == null ? void 0 : options.connect) == null ? void 0 : _a[prop];
    if (deverything.isString(foreignConnect)) {
      data[prop] = {
        connect: Array.isArray(value) ? value.map((key) => ({ [foreignConnect]: key })) : { [foreignConnect]: value }
      };
    }
    if (deverything.isObject(foreignConnect)) {
      if (deverything.isObject(deverything.firstValue(foreignConnect))) {
        const foreignCreateKey = deverything.firstKey(foreignConnect);
        const foreignConnectObject = deverything.firstValue(foreignConnect);
        const foreignConnectModel = deverything.firstKey(foreignConnectObject);
        const foreignConnectField = deverything.firstValue(foreignConnectObject);
        data[foreignCreateKey] = {
          create: value.map((val) => ({
            [foreignConnectModel]: { connect: { [foreignConnectField]: val } }
          }))
        };
      } else {
        const foreignConnectKey = deverything.firstKey(foreignConnect);
        const foreignConnectField = foreignConnect[foreignConnectKey];
        data[foreignConnectKey] = {
          connect: value.map((val) => ({
            [foreignConnectField]: val
          }))
        };
      }
      delete data[prop];
    }
  });
  const created = await model.create({
    data,
    include: (options == null ? void 0 : options.include) ?? void 0,
    select: (options == null ? void 0 : options.select) ?? void 0
  });
  if (options == null ? void 0 : options.debug) console.log("createHandler:created", created);
  if (options == null ? void 0 : options.audit) {
    await auditHandler(req, options == null ? void 0 : options.audit, created);
  }
  const response = { data: created };
  return response;
};
var dataProvider = (endpoint, options) => {
  const apiService = axios__default.default.create({
    baseURL: endpoint,
    headers: options == null ? void 0 : options.headers,
    withCredentials: options == null ? void 0 : options.withCredentials
  });
  apiService.interceptors.response.use((res) => res.data);
  if (options == null ? void 0 : options.axiosInterceptors) {
    if (options.axiosInterceptors.request)
      options.axiosInterceptors.request.forEach(
        (value) => apiService.interceptors.request.use(
          value.onFulfilled,
          value.onRejected,
          value.options
        )
      );
    if (options.axiosInterceptors.response)
      options.axiosInterceptors.response.forEach(
        (value) => apiService.interceptors.response.use(
          value.onFulfilled,
          value.onRejected
        )
      );
  }
  return {
    getList: (resource, params) => {
      var _a;
      return apiService.post(resource, {
        method: "getList",
        resource,
        params,
        model: ((_a = options == null ? void 0 : options.resourceToModelMap) == null ? void 0 : _a[resource]) ?? void 0
      }).catch(reactAdminAxiosErrorHandler);
    },
    getOne: (resource, params) => {
      var _a;
      castIdToOriginalType(params);
      return apiService.post(resource, {
        method: "getOne",
        resource,
        params,
        model: ((_a = options == null ? void 0 : options.resourceToModelMap) == null ? void 0 : _a[resource]) ?? void 0
      }).catch(reactAdminAxiosErrorHandler);
    },
    getMany: (resource, params) => {
      var _a;
      return apiService.post(resource, {
        method: "getMany",
        resource,
        params,
        model: ((_a = options == null ? void 0 : options.resourceToModelMap) == null ? void 0 : _a[resource]) ?? void 0
      }).catch(reactAdminAxiosErrorHandler);
    },
    getManyReference: (resource, params) => {
      var _a;
      return apiService.post(resource, {
        method: "getManyReference",
        resource,
        params,
        model: ((_a = options == null ? void 0 : options.resourceToModelMap) == null ? void 0 : _a[resource]) ?? void 0
      }).catch(reactAdminAxiosErrorHandler);
    },
    create: (resource, params) => {
      var _a;
      return apiService.post(resource, {
        method: "create",
        resource,
        params,
        model: ((_a = options == null ? void 0 : options.resourceToModelMap) == null ? void 0 : _a[resource]) ?? void 0
      }).catch(reactAdminAxiosErrorHandler);
    },
    update: (resource, params) => {
      var _a;
      castIdToOriginalType(params);
      return apiService.post(resource, {
        method: "update",
        resource,
        params,
        model: ((_a = options == null ? void 0 : options.resourceToModelMap) == null ? void 0 : _a[resource]) ?? void 0
      }).catch(reactAdminAxiosErrorHandler);
    },
    updateMany: (resource, params) => {
      var _a;
      return apiService.post(resource, {
        method: "updateMany",
        resource,
        params,
        model: ((_a = options == null ? void 0 : options.resourceToModelMap) == null ? void 0 : _a[resource]) ?? void 0
      }).catch(reactAdminAxiosErrorHandler);
    },
    delete: (resource, params) => {
      var _a;
      castIdToOriginalType(params);
      return apiService.post(resource, {
        method: "delete",
        resource,
        params,
        model: ((_a = options == null ? void 0 : options.resourceToModelMap) == null ? void 0 : _a[resource]) ?? void 0
      }).catch(reactAdminAxiosErrorHandler);
    },
    deleteMany: (resource, params) => {
      var _a;
      return apiService.post(resource, {
        method: "deleteMany",
        resource,
        params,
        model: ((_a = options == null ? void 0 : options.resourceToModelMap) == null ? void 0 : _a[resource]) ?? void 0
      }).catch(reactAdminAxiosErrorHandler);
    }
  };
};
var castIdToOriginalType = (params) => {
  if (deverything.isNumericId(params.id)) params.id = +params.id;
};
var reactAdminAxiosErrorHandler = (error) => {
  var _a, _b, _c, _d, _e;
  throw new reactAdmin.HttpError(
    ((_b = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || ((_c = error == null ? void 0 : error.response) == null ? void 0 : _c.statusText),
    (_d = error == null ? void 0 : error.response) == null ? void 0 : _d.status,
    (_e = error == null ? void 0 : error.response) == null ? void 0 : _e.data
  );
};

// src/deleteHandler.ts
var deleteHandler = async (req, prismaClient, options) => {
  const model = getModel(req, prismaClient);
  const { id } = req.params;
  const deleted = (options == null ? void 0 : options.softDeleteField) ? await model.update({
    where: { id },
    data: {
      [options.softDeleteField]: /* @__PURE__ */ new Date()
    }
  }) : await model.delete({
    where: { id }
  });
  if (options == null ? void 0 : options.audit) {
    await auditHandler(req, options == null ? void 0 : options.audit);
  }
  const response = { data: deleted };
  return response;
};
var extractOrderBy = (req) => {
  const { sort } = req.params;
  let orderBy = {};
  if (sort) {
    const { field, order } = sort;
    if (field && order) {
      deverything.setObjectPath(orderBy, field, order.toLowerCase());
    }
  }
  return orderBy;
};

// src/extractSkipTake.ts
var extractSkipTake = (req) => {
  const { pagination } = req.params;
  let skip;
  let take;
  if (pagination) {
    const { page, perPage } = pagination;
    const first = (page - 1) * perPage;
    const last = page * perPage - 1;
    if (first === 0 && last === 999) ; else {
      skip = first;
      take = last - first + 1;
    }
  }
  return { skip, take };
};
var prismaOperators = [
  "contains",
  "endsWith",
  "equals",
  "gt",
  "gte",
  "has",
  "lt",
  "lte",
  "not",
  "search",
  "startsWith"
];
var extractWhere = (req, options) => {
  const { filter } = req.params;
  const where = {};
  const setWhere = (filter2, currentFilterPath) => {
    Object.entries(filter2).forEach(([field, value]) => {
      if (isNotField(field)) return;
      if (value === "")
        return;
      const filterPath = currentFilterPath ? `${currentFilterPath}.${field}` : field;
      const hasOperator = prismaOperators.some((operator) => {
        if (field.endsWith(`_${operator}`)) {
          const [wherePath] = filterPath.split(`_${operator}`);
          deverything.setObjectPath(where, wherePath + `.${operator}`, value);
          return true;
        }
      });
      if (hasOperator) return;
      if (
        // Custom operators
        field.endsWith(`_enum`) || field.endsWith(`_exact`) || field.endsWith(`_eq`)
      ) {
        const [wherePath] = filterPath.split(/(_enum|_exact|_eq)$/);
        deverything.setObjectPath(where, wherePath, value);
      } else if (field.endsWith(`_pgjson`)) {
        const [wherePath] = filterPath.split("_pgjson");
        const { path, equals } = formatPrismaPostgresNestedJsonFilter(value);
        if (path.length && equals) {
          deverything.setObjectPath(where, wherePath, { path, equals });
        }
      } else if (field === "q") {
        console.info("Filter not handled:", field, value);
      } else if (field === "id" || // careful not to use filterPath here
      field === "uuid" || field === "uid" || field === "cuid" || field.endsWith("_id") || field.endsWith("_uuid") || field.endsWith("_uid") || field.endsWith("_cuid") || field.endsWith("Id") || typeof value === "number" || typeof value === "boolean" || value === null) {
        deverything.setObjectPath(where, filterPath, value);
      } else if (deverything.isArray(value)) {
        deverything.setObjectPath(where, filterPath, { in: value });
      } else if (deverything.isString(value)) {
        deverything.setObjectPath(where, filterPath, {
          contains: value,
          mode: options == null ? void 0 : options.filterMode
        });
      } else if (deverything.isObject(value)) {
        setWhere(value, filterPath);
      } else {
        console.info("ra-data-simple-prisma: Filter not handled", field, value);
      }
    });
  };
  if (filter) {
    setWhere(filter);
  }
  if (options == null ? void 0 : options.debug) console.debug("extractWhere:where", where);
  return where;
};
var formatPrismaPostgresNestedJsonFilter = (obj) => {
  const path = Object.keys(obj);
  const val = obj[path[0]];
  let equals;
  if (deverything.isObject(val)) {
    const { path: returnedPath, equals: returnedEquals } = formatPrismaPostgresNestedJsonFilter(val);
    equals = returnedEquals;
    path.push(...returnedPath);
  } else {
    equals = val;
  }
  return { path, equals };
};
var getListHandler = async (req, prismaClient, options) => {
  var _a;
  const model = getModel(req, prismaClient);
  let queryArgs = {
    findManyArg: {
      select: (options == null ? void 0 : options.select) ?? void 0,
      include: (options == null ? void 0 : options.include) ?? void 0,
      where: (options == null ? void 0 : options.where) ?? {}
    },
    countArg: {
      where: (options == null ? void 0 : options.where) ?? {}
    }
  };
  const where = extractWhere(req, {
    filterMode: options == null ? void 0 : options.filterMode
  });
  if (options == null ? void 0 : options.debug) {
    console.debug("getListHandler:where", deverything.stringify(where));
  }
  queryArgs.findManyArg.where = deepmerge__default.default(queryArgs.findManyArg.where, where);
  queryArgs.countArg.where = deepmerge__default.default(queryArgs.countArg.where, where);
  const { skip, take } = extractSkipTake(req);
  queryArgs.findManyArg.skip = skip;
  queryArgs.findManyArg.take = take;
  const { sort } = req.params;
  if (sort) {
    queryArgs.findManyArg.orderBy = extractOrderBy(req);
    const { field } = sort;
    if (field && ((_a = options == null ? void 0 : options.noNullsOnSort) == null ? void 0 : _a.includes(field))) {
      queryArgs.findManyArg.where = deepmerge__default.default(queryArgs.findManyArg.where, {
        [field]: { not: null }
      });
      queryArgs.countArg.where = deepmerge__default.default(queryArgs.countArg.where, {
        [field]: { not: null }
      });
    }
  }
  if (options == null ? void 0 : options.debug) {
    console.log("getListHandler:queryArgs", deverything.stringify(queryArgs));
  }
  let rows, total;
  if (options == null ? void 0 : options.asTransaction) {
    [rows, total] = await prismaClient.$transaction([
      model.findMany(queryArgs.findManyArg),
      model.count(queryArgs.countArg)
    ]);
  } else {
    [rows, total] = await Promise.all([
      model.findMany(queryArgs.findManyArg),
      model.count(queryArgs.countArg)
    ]);
  }
  if (options == null ? void 0 : options.debug) {
    console.log("getListHandler:total", total);
  }
  const data = (options == null ? void 0 : options.transformRow) ? await Promise.all(rows.map(options.transformRow)) : rows;
  const response = {
    data,
    total
  };
  return response;
};
var reduceData = (data, options) => {
  return Object.entries(data).reduce((fields, [key, value]) => {
    var _a, _b, _c, _d, _e;
    if (isNotField(key)) return fields;
    if ((_a = options == null ? void 0 : options.skipFields) == null ? void 0 : _a[key]) return fields;
    if ((options == null ? void 0 : options.allowOnlyFields) && !options.allowOnlyFields[key]) {
      throw new Error(`updateHandler: Field ${key} is not allowed in update`);
    }
    const foreignSet = (_b = options == null ? void 0 : options.set) == null ? void 0 : _b[key];
    if (foreignSet) {
      if (deverything.isString(foreignSet)) {
        fields[key] = {
          set: value.map((value2) => ({
            [foreignSet]: value2
          }))
        };
      }
      if (deverything.isObject(foreignSet)) {
        if (deverything.isObject(deverything.firstValue(foreignSet))) {
          const foreignCreateKey = deverything.firstKey(foreignSet);
          const foreignConnectObject = deverything.firstValue(foreignSet);
          const foreignConnectModel = deverything.firstKey(foreignConnectObject);
          const foreignConnectField = deverything.firstValue(foreignConnectObject);
          fields[foreignCreateKey] = {
            deleteMany: {},
            // OK not perfect because now the "created at" will update for all rels
            create: value.map((val) => ({
              [foreignConnectModel]: {
                connect: { [foreignConnectField]: val }
              }
            }))
          };
        } else {
          const foreignConnectKey = deverything.firstKey(foreignSet);
          const foreignConnectField = foreignSet[foreignConnectKey];
          fields[foreignConnectKey] = {
            set: value.map((val) => ({
              [foreignConnectField]: val
            }))
          };
        }
        delete fields[key];
      }
    } else if (deverything.isObject(value)) {
      if ((_c = options == null ? void 0 : options.allowNestedUpdate) == null ? void 0 : _c[key]) {
        fields[key] = {
          update: {
            data: value
          }
        };
      }
      if ((_d = options == null ? void 0 : options.allowNestedUpsert) == null ? void 0 : _d[key]) {
        fields[key] = {
          upsert: {
            create: value,
            update: value
          }
        };
      }
      if ((_e = options == null ? void 0 : options.allowJsonUpdate) == null ? void 0 : _e[key]) {
        fields[key] = value;
      }
    } else {
      fields[key] = value;
    }
    return fields;
  }, {});
};
var updateHandler = async (req, prismaClient, options) => {
  const { id } = req.params;
  const model = getModel(req, prismaClient);
  const data = reduceData(req.params.data, options);
  if (options == null ? void 0 : options.debug) {
    console.log("updateHandler:data", data);
  }
  const updated = await model.update({
    data,
    include: (options == null ? void 0 : options.include) ?? void 0,
    select: (options == null ? void 0 : options.select) ?? void 0,
    where: { id }
  });
  if (options == null ? void 0 : options.audit) {
    await auditHandler(req, options.audit);
  }
  const response = { data: updated };
  return response;
};

// src/deleteManyHandler.ts
var deleteManyHandler = async (req, prismaClient, options) => {
  const { ids } = req.params;
  const model = getModel(req, prismaClient);
  (options == null ? void 0 : options.softDeleteField) ? await model.updateMany({
    where: { id: { in: ids } },
    data: {
      [options == null ? void 0 : options.softDeleteField]: /* @__PURE__ */ new Date()
    }
  }) : await model.deleteMany({
    where: { id: { in: ids } }
  });
  if (options == null ? void 0 : options.audit) {
    await auditHandler(req, options == null ? void 0 : options.audit);
  }
  const response = { data: ids };
  return response;
};

// src/getManyHandler.ts
var getManyHandler = async (req, prismaClient, options) => {
  const { ids } = req.params;
  const model = getModel(req, prismaClient);
  const rows = await model.findMany({
    include: options == null ? void 0 : options.include,
    select: options == null ? void 0 : options.select,
    where: { id: { in: ids } }
  });
  const data = (options == null ? void 0 : options.transformRow) ? await Promise.all(rows.map(options.transformRow)) : rows;
  const response = { data };
  return response;
};

// src/getManyReferenceHandler.ts
var getManyReferenceHandler = async (req, prismaClient, options) => {
  const { id, target } = req.params;
  const model = getModel(req, prismaClient);
  const orderBy = extractOrderBy(req);
  const where = extractWhere(req, {
    filterMode: options == null ? void 0 : options.filterMode
  });
  const { skip, take } = extractSkipTake(req);
  let rows, total;
  if (options == null ? void 0 : options.asTransaction) {
    [rows, total] = await prismaClient.$transaction([
      model.findMany({
        include: options == null ? void 0 : options.include,
        select: options == null ? void 0 : options.select,
        where: { [target]: id, ...where },
        orderBy,
        skip,
        take
      }),
      model.count({ where: { [target]: id, ...where } })
    ]);
  } else {
    [rows, total] = await Promise.all([
      model.findMany({
        include: options == null ? void 0 : options.include,
        select: options == null ? void 0 : options.select,
        where: { [target]: id, ...where },
        orderBy,
        skip,
        take
      }),
      model.count({ where: { [target]: id, ...where } })
    ]);
  }
  const data = (options == null ? void 0 : options.transformRow) ? await Promise.all(rows.map(options.transformRow)) : rows;
  const response = { data, total };
  return response;
};

// src/getOneHandler.ts
var getOneHandler = async (req, prismaClient, options) => {
  const { id } = req.params;
  const model = getModel(req, prismaClient);
  const where = { id };
  if (options == null ? void 0 : options.debug) console.log("getOneHandler:where", where);
  const row = await model.findUnique({
    where,
    select: (options == null ? void 0 : options.select) ?? void 0,
    include: (options == null ? void 0 : options.include) ?? void 0
  });
  if (options == null ? void 0 : options.debug) console.log("getOneHandler:beforeTransform", row);
  const transformedRow = (options == null ? void 0 : options.transform) ? await options.transform(row) : row;
  if (options == null ? void 0 : options.debug)
    console.log("getOneHandler:afterTransform", transformedRow);
  const response = { data: transformedRow };
  return response;
};

// src/updateManyHandler.ts
var updateManyHandler = async (req, prismaClient, options) => {
  const { ids } = req.params;
  const model = getModel(req, prismaClient);
  const data = reduceData(req.params.data, options);
  if (options == null ? void 0 : options.debug) {
    console.log("updateManyHandler:data", data);
  }
  await model.updateMany({
    data,
    where: { id: { in: ids } }
  });
  if (options == null ? void 0 : options.audit) {
    await auditHandler(req, options == null ? void 0 : options.audit);
  }
  const response = { data: ids };
  return response;
};

// src/defaultHandler.ts
var defaultHandler = async (req, prismaClient, options) => {
  switch (req.method) {
    case "create": {
      return await createHandler(req, prismaClient, {
        ...options == null ? void 0 : options.create,
        audit: options == null ? void 0 : options.audit
      });
    }
    case "delete": {
      return await deleteHandler(req, prismaClient, {
        ...options == null ? void 0 : options.delete,
        audit: options == null ? void 0 : options.audit
      });
    }
    case "deleteMany": {
      return deleteManyHandler(req, prismaClient, {
        ...options == null ? void 0 : options.delete,
        audit: options == null ? void 0 : options.audit
      });
    }
    case "getList": {
      return getListHandler(
        req,
        prismaClient,
        options == null ? void 0 : options.getList
      );
    }
    case "getMany": {
      return getManyHandler(
        req,
        prismaClient,
        options == null ? void 0 : options.getMany
      );
    }
    case "getManyReference": {
      return getManyReferenceHandler(
        req,
        prismaClient,
        options == null ? void 0 : options.getManyReference
      );
    }
    case "getOne": {
      return getOneHandler(req, prismaClient, options == null ? void 0 : options.getOne);
    }
    case "update": {
      return await updateHandler(req, prismaClient, {
        ...options == null ? void 0 : options.update,
        audit: options == null ? void 0 : options.audit
      });
    }
    case "updateMany": {
      return await updateManyHandler(req, prismaClient, {
        ...options == null ? void 0 : options.update,
        audit: options == null ? void 0 : options.audit
      });
    }
    default:
      throw new Error("Invalid method");
  }
};
var getInfiniteListHandler = async (req, prismaClient, options) => {
  var _a;
  const model = getModel(req, prismaClient);
  let queryArgs = {
    findManyArg: {
      select: (options == null ? void 0 : options.select) ?? void 0,
      include: (options == null ? void 0 : options.include) ?? void 0,
      where: (options == null ? void 0 : options.where) ?? {}
    }
  };
  const where = extractWhere(req, {
    filterMode: options == null ? void 0 : options.filterMode
  });
  if (options == null ? void 0 : options.debug) {
    console.log("getInfiniteListHandler:where", deverything.stringify(where));
  }
  queryArgs.findManyArg.where = deepmerge__default.default(queryArgs.findManyArg.where, where);
  const { skip, take } = extractSkipTake(req);
  queryArgs.findManyArg.skip = skip;
  queryArgs.findManyArg.take = take + 1;
  const { sort } = req.params;
  if (sort) {
    queryArgs.findManyArg.orderBy = extractOrderBy(req);
    const { field } = sort;
    if (field && ((_a = options == null ? void 0 : options.noNullsOnSort) == null ? void 0 : _a.includes(field))) {
      queryArgs.findManyArg.where = deepmerge__default.default(queryArgs.findManyArg.where, {
        [field]: { not: null }
      });
    }
  }
  if (options == null ? void 0 : options.debug) {
    console.log("getInfiniteListHandler:queryArgs", deverything.stringify(queryArgs));
  }
  let rows = await model.findMany(queryArgs.findManyArg);
  const hasNextPage = rows.length > take;
  if (hasNextPage) {
    rows = rows.slice(0, take);
  }
  const data = (options == null ? void 0 : options.transformRow) ? await Promise.all(rows.map(options.transformRow)) : rows;
  const response = {
    data,
    pageInfo: {
      hasPreviousPage: skip > 0,
      hasNextPage
    }
  };
  return response;
};

// src/RDSPError.ts
var RDSPError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "RDSPError";
  }
};

// src/hasFieldChanged.ts
var hasFieldChanged = (req, field, value) => {
  const { previousData, data } = req.params;
  if (previousData[field] === void 0) {
    throw new RDSPError(`Field "${field}" cannot be undefined in previousData`);
  }
  if (data[field] === void 0) {
    throw new RDSPError(`Field "${field}" cannot be undefined in data`);
  }
  if (previousData[field] !== data[field]) {
    if (value !== void 0) {
      if (data[field] !== value) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
  return false;
};

// src/isExport.ts
var isExport = (req) => {
  const { pagination } = req.params;
  if (pagination) {
    const { page, perPage } = pagination;
    if (page === 1 && perPage === 1e3) return true;
  }
  return false;
};

// src/permissions/types.ts
var actions = [
  "list",
  "show",
  "create",
  "edit",
  "delete",
  "export"
];

// src/permissions/canAccess.ts
var import_isMatch = __toESM(require_isMatch());
var fetchActionToAction = {
  getOne: "show",
  create: "create",
  getList: "list",
  getMany: "list",
  getManyReference: "list",
  update: "edit",
  updateMany: "edit",
  delete: "delete",
  deleteMany: "delete"
};
var canAccess = ({
  action,
  permissions,
  resource,
  record,
  field
}) => {
  if (!permissions || permissions.length === 0 || !resource) return false;
  if (!field && resource.includes(".")) [resource, field] = resource.split(".");
  for (const permission of permissions.filter(
    (p) => p !== null && p.type === "deny"
  )) {
    if (matchTarget(permission, resource, action, record, field)) {
      return false;
    }
  }
  for (const permission of permissions.filter(
    (p) => p !== null && p.type !== "deny"
  )) {
    if (matchTarget(permission, resource, action, record, field)) {
      return true;
    }
  }
  return false;
};
var matchTarget = (permission, resource, action, record, field) => {
  if (permission === null || !matchWildcard(permission.resource, resource)) {
    return false;
  }
  if (Array.isArray(permission.action) && !permission.action.includes(action)) {
    return false;
  }
  if (typeof permission.action === "string" && permission.action !== "*" && permission.action !== action) {
    return false;
  }
  if (permission.record && record) {
    if (!(0, import_isMatch.default)(record, permission.record)) {
      return false;
    }
  }
  if (permission.field && field) {
    if (Array.isArray(permission.field) && !permission.field.includes(field)) {
      return false;
    }
    if (typeof permission.field === "string" && permission.field !== field) {
      return false;
    }
  }
  return true;
};
var matchWildcard = (resourcePattern, resource) => {
  if (resourcePattern === "*") {
    return true;
  }
  if (resourcePattern === resource) {
    return true;
  }
  if (resourcePattern.endsWith("*")) {
    return resource.startsWith(resourcePattern.slice(0, -1));
  }
  return false;
};

exports.actions = actions;
exports.auditHandler = auditHandler;
exports.canAccess = canAccess;
exports.createAuditEntry = createAuditEntry;
exports.createHandler = createHandler;
exports.dataProvider = dataProvider;
exports.defaultAuditOptions = defaultAuditOptions;
exports.defaultHandler = defaultHandler;
exports.deleteHandler = deleteHandler;
exports.deleteManyHandler = deleteManyHandler;
exports.extractOrderBy = extractOrderBy;
exports.extractSkipTake = extractSkipTake;
exports.extractWhere = extractWhere;
exports.fetchActionToAction = fetchActionToAction;
exports.getInfiniteListHandler = getInfiniteListHandler;
exports.getListHandler = getListHandler;
exports.getManyHandler = getManyHandler;
exports.getManyReferenceHandler = getManyReferenceHandler;
exports.getOneHandler = getOneHandler;
exports.hasFieldChanged = hasFieldChanged;
exports.isExport = isExport;
exports.reduceData = reduceData;
exports.updateHandler = updateHandler;
exports.updateManyHandler = updateManyHandler;
