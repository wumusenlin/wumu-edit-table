import React, { type FC } from 'react';
import { InputProps } from '../types';
import './input.css';

const BasicInput: FC<InputProps> = (props) => {
  const {
    initValue,
    inputChange = () => {},
    onEdit = () => {},
    column,
  } = props;
  const { align = 'left', inputOptions = {} } = column;
  const style = { textAlign: align };
  return (
    <input
      className="wumu-input"
      style={style}
      defaultValue={initValue}
      onChange={(e) => {
        inputChange(e.target.value);
      }}
      autoFocus
      onBlur={() => onEdit('')}
      {...inputOptions}
    />
  );
};

export default BasicInput;
