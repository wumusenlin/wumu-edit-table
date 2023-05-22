import React from 'react';
import "./basicInput.css";
var BasicInput = function BasicInput(props) {
  var initValue = props.initValue,
    _props$inputChange = props.inputChange,
    inputChange = _props$inputChange === void 0 ? function () {} : _props$inputChange;
  return /*#__PURE__*/React.createElement("input", {
    className: "wumu-input",
    defaultValue: initValue,
    onChange: function onChange(e) {
      inputChange(e.target.value);
    },
    autoFocus: true
  });
};
export default BasicInput;