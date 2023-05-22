import React from 'react';
import BasicInput from "../input/basicInput";
function rowRenderer(props) {
  var columns = props.columns,
    record = props.record,
    rowHeight = props.rowHeight,
    editId = props.editId,
    _props$onEdit = props.onEdit,
    onEdit = _props$onEdit === void 0 ? function () {} : _props$onEdit,
    _props$handleChange = props.handleChange,
    handleChange = _props$handleChange === void 0 ? function () {} : _props$handleChange;
  var rowKey = record.rowKey;
  return /*#__PURE__*/React.createElement("tr", {
    className: "table-tr"
  }, columns.map(function (col, index) {
    var dataIndex = col.dataIndex;
    var key = "".concat(index, "-").concat(dataIndex);
    var id = "".concat(rowKey, "-").concat(dataIndex);
    var isEdit = id === editId;
    var tdStyle = {
      height: rowHeight,
      boxShadow: isEdit ? 'inset 0px 0px 0px 1px var(--highlight-color)' : ''
    };
    var inputChange = function inputChange(val) {
      handleChange(val, {
        rowIndex: rowKey,
        dataIndex: dataIndex,
        record: record,
        cellId: id
      });
    };
    var value = record[dataIndex];
    var content = isEdit ? /*#__PURE__*/React.createElement(BasicInput, {
      initValue: value,
      inputChange: inputChange,
      onEdit: onEdit
    }) : value;
    return /*#__PURE__*/React.createElement("td", {
      id: id,
      key: key,
      style: tdStyle,
      className: "table-td",
      onClick: function onClick() {
        return typeof onEdit === 'function' ? onEdit(id) : void 0;
      },
      onBlur: function onBlur() {
        return onEdit('');
      }
    }, content);
  }));
}
export default rowRenderer;