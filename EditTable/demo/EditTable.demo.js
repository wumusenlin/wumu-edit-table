function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { EditTable } from "../..";
export default (function () {
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    editId = _useState2[0],
    onEdit = _useState2[1];
  var columns = [{
    title: 'A',
    dataIndex: 'A',
    width: 300
  }, {
    title: 'B',
    dataIndex: 'B'
  }, {
    title: 'C',
    dataIndex: 'C',
    width: 300
  }, {
    title: 'D',
    dataIndex: 'D'
  }, {
    title: 'E',
    dataIndex: 'E',
    width: 380
  }, {
    title: 'F',
    dataIndex: 'F',
    width: 300
  }];
  var dataSource = [{
    A: '干嘛',
    B: '哎哟',
    C: 'haha',
    D: '噶速度进来看哈流口水的份',
    E: 'guaiosdjlkgjasdgasdg'
  }, {
    A: 'fasdfasdf',
    B: 'asdfasd',
    C: 'ghjfgh'
  }, {
    A: 'adsfasdf',
    B: 'fasdf',
    C: 'rsfgsdf'
  }, {
    A: 'khjkghj',
    B: '哎哟',
    C: '8iuk',
    D: '噶速度进来看哈流口水的份',
    E: 'guaiosdjlkgjasdgasdg'
  }, {
    A: 'wts',
    B: 'vbn',
    C: 'fhj'
  }, {
    A: 'fhjf',
    B: '哎哟',
    C: 'haha',
    D: '噶速度进来看哈流口水的份',
    E: 'guaiosdjlkgjasdgasdg'
  }, {
    A: '干嘛',
    B: 'shshsdfgsdfgsdfgsdfgsdfgsdfg',
    C: 'khjkghjk'
  }, {
    A: 'adsfads',
    B: 'ghdfgjgh',
    C: 'adsfasdfad'
  }, {
    A: 'adsfads',
    B: 'ghdfgjgh',
    C: 'adsfasdfad',
    D: '噶速度进来看哈流口水的份',
    E: 'guaiosdjlkgjasdgasdg'
  }, {
    A: 'adsfads',
    B: 'ghdfgjgh',
    C: 'adsfasdfad',
    D: '噶速度进来看哈流口水的份',
    E: 'guaiosdjlkgjasdgasdg'
  }, {
    A: 'fhjf',
    B: '哎哟',
    C: 'haha',
    D: '噶速度进来看哈流口水的份',
    E: 'guaiosdjlkgjasdgasdg'
  }, {
    A: 'adsfads',
    B: 'ghdfgjgh',
    C: 'adsfasdfad',
    D: '噶速度进来看哈流口水的份',
    E: 'guaiosdjlkgjasdgasdg'
  }, {
    A: 'adsfads',
    B: 'ghdfgjgh',
    C: 'adsfasdfad',
    D: '噶速度进来看哈流口水的份',
    E: 'guaiosdjlkgjasdgasdg'
  }, {
    A: 'fhjf',
    B: '哎哟',
    C: 'haha',
    D: '噶速度进来看哈流口水的份',
    E: 'guaiosdjlkgjasdgasdg'
  }, {
    A: 'adsfads',
    B: 'ghdfgjgh',
    C: 'adsfasdfad',
    D: '噶速度进来看哈流口水的份',
    E: 'guaiosdjlkgjasdgasdg'
  }, {
    A: 'adsfads',
    B: 'ghdfgjgh',
    C: 'adsfasdfad'
  }, {
    A: 'fhjf',
    B: '哎哟',
    C: 'haha',
    D: '噶速度进来看哈流口水的份',
    E: 'guaiosdjlkgjasdgasdg'
  }];
  var _useState3 = useState(dataSource),
    _useState4 = _slicedToArray(_useState3, 2),
    list = _useState4[0],
    setList = _useState4[1];
  return /*#__PURE__*/React.createElement(EditTable, {
    editId: editId,
    onEdit: onEdit,
    columns: columns,
    dataSource: list,
    maxHeight: 320,
    onChange: function onChange(newList) {
      return setList(newList);
    }
  });
});