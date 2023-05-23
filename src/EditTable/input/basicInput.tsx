import React, { type FC } from 'react';
import { inputProps } from '../types';
import './basicInput.css';

const BasicInput: FC<inputProps> = (props) => {
  const { initValue, inputChange = () => {}, onEdit = () => {} } = props;
  return (
    <input
      className="wumu-input"
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
