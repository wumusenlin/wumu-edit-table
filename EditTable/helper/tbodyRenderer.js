import React from 'react';
import "../css/tbody.css";
import { mustArray } from "./fn";
import rowRenderer from "./rowRenderer";
function tbodyRenderer(props) {
  var dataSource = props.dataSource,
    columns = props.columns,
    _props$rowHeight = props.rowHeight,
    rowHeight = _props$rowHeight === void 0 ? 40 : _props$rowHeight,
    onEdit = props.onEdit,
    editId = props.editId,
    _props$handleChange = props.handleChange,
    handleChange = _props$handleChange === void 0 ? function () {} : _props$handleChange;
  var addRow = function addRow() {};
  if (mustArray(dataSource).length === 0) {
    return /*#__PURE__*/React.createElement("div", null, "\u6682\u65E0\u6570\u636E", /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return addRow();
      }
    }, "\u65B0\u589E\u884C"));
  }
  return /*#__PURE__*/React.createElement("tbody", {
    className: "table-tbody"
  }, mustArray(dataSource).map(function (record) {
    return rowRenderer({
      record: record,
      columns: columns,
      rowHeight: rowHeight,
      onEdit: onEdit,
      editId: editId,
      handleChange: handleChange
    });
  }));
}
export default tbodyRenderer;