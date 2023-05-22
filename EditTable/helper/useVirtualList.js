function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useEffect, useRef, useState } from 'react';
var useVirtualList = function useVirtualList(defaultList, options) {
  var _list$length;
  var _options$overscan = options.overscan,
    overscan = _options$overscan === void 0 ? 0 : _options$overscan,
    _options$itemHeight = options.itemHeight,
    itemHeight = _options$itemHeight === void 0 ? 40 : _options$itemHeight,
    maxHeight = options.maxHeight,
    _options$height = options.height,
    height = _options$height === void 0 ? 510 : _options$height,
    _options$onScrolled = options.onScrolled,
    onScrolled = _options$onScrolled === void 0 ? function () {} : _options$onScrolled,
    _options$wrapperProps = options.wrapperPropsStyle,
    wrapperPropsStyle = _options$wrapperProps === void 0 ? {} : _options$wrapperProps;
  var containerRef = useRef();
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    startIdx = _useState2[0],
    setStartIdx = _useState2[1];
  var _useState3 = useState((defaultList === null || defaultList === void 0 ? void 0 : defaultList.length) * itemHeight),
    _useState4 = _slicedToArray(_useState3, 2),
    wrapHeight = _useState4[0],
    setWrapHeight = _useState4[1];
  var _useState5 = useState(Math.ceil(height / itemHeight)),
    _useState6 = _slicedToArray(_useState5, 1),
    showRowCount = _useState6[0];
  var _useState7 = useState({}),
    _useState8 = _slicedToArray(_useState7, 2),
    containerInfo = _useState8[0],
    setContainerInfo = _useState8[1];
  var topHeight = startIdx * itemHeight;

  // 滚动设置当前虚拟表单位置
  var onScroll = function onScroll(evt) {
    var _evt$target = evt.target,
      _evt$target$scrollTop = _evt$target.scrollTop,
      scrollTop = _evt$target$scrollTop === void 0 ? 0 : _evt$target$scrollTop,
      _evt$target$scrollLef = _evt$target.scrollLeft,
      scrollLeft = _evt$target$scrollLef === void 0 ? 0 : _evt$target$scrollLef;
    onScrolled({
      scrollLeft: scrollLeft
    });
    setContainerInfo(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, {
        scrollTop: scrollTop,
        scrollLeft: scrollLeft
      });
    });
    // setStartIdx(Math.floor(scrollTop / itemHeight))
    // 把overscan数量分摊到上方和下方
    var currentIndex = overscan > 0 ? Math.floor(scrollTop / itemHeight) - Math.ceil(overscan / 2) : Math.floor(scrollTop / itemHeight);
    setStartIdx(currentIndex > 0 ? currentIndex : 0);
  };
  //设置内部长表单滚动的位置
  var wrapperProps = {
    style: _objectSpread(_objectSpread({}, wrapperPropsStyle), {}, {
      // borderCollapse: 'collapse',
      width: '100%',
      height: wrapHeight,
      transform: "translateZ(0)",
      paddingTop: topHeight
    })
    // ref: el => actualContentRef.current = el,
  };
  // 设置绑定父级DOM
  var containerProps = {
    onScroll: onScroll,
    ref: function ref(el) {
      return containerRef.current = el;
    },
    style: {
      overflowY: 'overlay',
      overflowX: 'auto',
      //解决滚动条挤压宽度问题
      maxHeight: maxHeight,
      backgroundColor: '#fff',
      overflow: 'auto'
    }
  };
  useEffect(function () {
    setWrapHeight((defaultList === null || defaultList === void 0 ? void 0 : defaultList.length) * itemHeight);
  }, [defaultList === null || defaultList === void 0 ? void 0 : defaultList.length]);
  useEffect(function () {
    if (containerRef !== null && containerRef !== void 0 && containerRef.current) {
      setContainerInfo({
        offsetWidth: containerRef.current.offsetWidth,
        clientWidth: containerRef.current.clientWidth
      });
    }
  }, [containerRef === null || containerRef === void 0 ? void 0 : containerRef.current]);
  var list = defaultList.slice(startIdx, startIdx + showRowCount + overscan);
  return {
    list: list,
    wrapperProps: wrapperProps,
    containerProps: containerProps,
    topHeight: topHeight,
    bottomHeight: wrapHeight - topHeight - ((_list$length = list.length) !== null && _list$length !== void 0 ? _list$length : 0) * itemHeight,
    containerInfo: containerInfo
  };
};
export default useVirtualList;