function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import "../index.css";
import "./css/main.css";
import headerRenderer from "./helper/headerRenderer";
import tbodyRenderer from "./helper/tbodyRenderer";
import useVirtualList from "./helper/useVirtualList";
import { genColGroup, getAutoWidthCol, setRowKey } from "./helper/utils";
export function scrollBar() {
  return 16;
}
var EditTable = function EditTable(props) {
  var columns = props.columns,
    dataSource = props.dataSource,
    editId = props.editId,
    _props$onEdit = props.onEdit,
    onEdit = _props$onEdit === void 0 ? function () {} : _props$onEdit,
    _props$rowHeight = props.rowHeight,
    rowHeight = _props$rowHeight === void 0 ? 40 : _props$rowHeight,
    maxHeight = props.maxHeight,
    _props$headerHeight = props.headerHeight,
    headerHeight = _props$headerHeight === void 0 ? 55 : _props$headerHeight,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  var _headerWrapRef = useRef();
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    _dataSource = _useState2[0],
    _setDataSource = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    _columns = _useState4[0],
    _setColumns = _useState4[1];
  var _useState5 = useState({
      autoWidthColIndex: null,
      autoColWidth: 120
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    autoCol = _useState6[0],
    setAutoCol = _useState6[1];
  var _useVirtualList = useVirtualList(_dataSource, {
      itemHeight: rowHeight,
      maxHeight: maxHeight,
      overscan: 2,
      onScrolled: function onScrolled(_ref) {
        var scrollLeft = _ref.scrollLeft;
        if (_headerWrapRef.current) {
          _headerWrapRef.current.scrollLeft = scrollLeft;
        }
        onEdit('');
      },
      wrapperPropsStyle: {
        borderSpacing: 0,
        boxShadow: 'inset 0px 0px 10px 0px #dadada'
      }
    }),
    list = _useVirtualList.list,
    wrapperProps = _useVirtualList.wrapperProps,
    containerProps = _useVirtualList.containerProps,
    bottomHeight = _useVirtualList.bottomHeight,
    containerInfo = _useVirtualList.containerInfo;
  var handleChange = function handleChange(val, options) {
    var rowIndex = options.rowIndex,
      dataIndex = options.dataIndex;
    var targetDataSource = _dataSource;
    targetDataSource[rowIndex][dataIndex] = val;
    onChange(targetDataSource);
    // _setDataSource(targetDataSource)
  };
  // console.log('containerInfo', containerInfo);
  useEffect(function () {
    if ((dataSource === null || dataSource === void 0 ? void 0 : dataSource.length) > 0) {
      _setDataSource(setRowKey(dataSource));
    }
  }, [dataSource.length]);
  useEffect(function () {
    _setColumns(columns);
  }, [columns]);
  useLayoutEffect(function () {
    if (containerInfo.clientWidth) {
      setAutoCol(getAutoWidthCol({
        columns: _columns,
        clientWidth: containerInfo.clientWidth
      }));
    }
  }, [containerInfo]);
  return /*#__PURE__*/React.createElement("div", {
    className: "wumu-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wumu-table-header",
    ref: _headerWrapRef
  }, /*#__PURE__*/React.createElement("table", null, genColGroup({
    columns: _columns,
    autoCol: autoCol,
    scrollBar: scrollBar()
  }), headerRenderer({
    columns: _columns,
    headerHeight: headerHeight
  }))), /*#__PURE__*/React.createElement("div", _extends({
    className: "wumu-table-body"
  }, containerProps), /*#__PURE__*/React.createElement("table", wrapperProps, genColGroup({
    columns: _columns,
    autoCol: autoCol
  }), tbodyRenderer({
    dataSource: list,
    columns: _columns,
    rowHeight: rowHeight,
    onEdit: onEdit,
    editId: editId,
    handleChange: handleChange
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: bottomHeight
    }
  }))));
};
export default EditTable;