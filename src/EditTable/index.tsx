import React, { type FC } from 'react';
import headerRenderer from './helper/headerRenderer';
import { tableProps } from './types';

const EditTable: FC<tableProps> = (props) => {
  const { columns } = props;

  return <table>{headerRenderer(columns)}</table>;
};

export default EditTable;
