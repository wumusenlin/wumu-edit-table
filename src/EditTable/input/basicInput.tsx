import React, { type FC } from 'react';
import { inputProps } from '../types';
import './basicInput.css';

const BasicInput: FC<inputProps> = (props) => {
  const {
    initValue,
    inputChange = () => {},
    onEdit = () => {},
    column,
  } = props;
  const { align = 'left' } = column;
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
    />
  );
};

export default BasicInput;
