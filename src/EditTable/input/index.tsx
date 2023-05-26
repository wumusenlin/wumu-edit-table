import React, { type FC } from 'react';
import { inputTypes } from '../helper/utils';
import { inputProps } from '../types';
import BasicInput from './basicInput';
import './input.css';
import SelectInput from './select';

const Input: FC<inputProps> = (props) => {
  const { column } = props;
  const { inputType } = column;

  if (inputType === inputTypes.select) {
    return <SelectInput {...props} />;
  }

  return <BasicInput {...props} />;
};

export default Input;
