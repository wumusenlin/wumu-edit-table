import React, { type FC } from 'react';
import { inputTypes } from '../helper/utils';
import { InputProps } from '../types';
import BasicInput from './basicInput';
import './input.css';
import SelectInput from './select';

const Input: FC<InputProps> = (props) => {
  const { column } = props;
  const { inputType } = column;

  if (inputType === inputTypes.select) {
    return <SelectInput {...props} />;
  }

  return <BasicInput {...props} />;
};

export default Input;
