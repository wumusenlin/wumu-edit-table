import React from 'react';
import "../css/herader.css";
function headerRenderer(props) {
  var columns = props.columns,
    headerHeight = props.headerHeight;
  var ths = columns.map(function (col, index) {
    var title = col.title,
      dataIndex = col.dataIndex,
      _col$align = col.align,
      align = _col$align === void 0 ? 'left' : _col$align;
    var thStyle = {
      textAlign: align,
      borderRight: '1px solid #ccc'
    };
    var key = "".concat(dataIndex, "-").concat(index);
    return /*#__PURE__*/React.createElement("th", {
      key: key,
      className: "table-th",
      style: thStyle
    }, index, title);
  });
  var trStyle = {
    height: headerHeight
  };
  return /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: trStyle,
    className: "table-header"
  }, ths));
}
export default headerRenderer;