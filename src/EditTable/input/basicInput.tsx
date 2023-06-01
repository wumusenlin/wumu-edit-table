import React, { type FC } from 'react';
import { inputProps } from '../types';
import './input.css';

const BasicInput: FC<inputProps> = (props) => {
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
