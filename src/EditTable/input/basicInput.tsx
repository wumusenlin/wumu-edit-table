import React, { type FC } from 'react';
import { inputProps } from '../types';

const BasicInput: FC<inputProps> = (props) => {
  const { initValue, handleChange = () => {} } = props;
  return (
    <input value={initValue} onChange={(e) => handleChange(e.target.value)} />
  );
};

export default BasicInput;
