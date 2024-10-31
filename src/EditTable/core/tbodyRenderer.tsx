import React from 'react';
import '../css/tbody.css';
import { mustArray } from '../helper/fn';
import { tbodyRendererProps } from '../types';
import rowRenderer from './rowRenderer';

function tbodyRenderer(props: tbodyRendererProps) {
  const { dataSource, notFoundContent, ...otherProps } = props;

  const isEmpty = mustArray(dataSource).length === 0;

  return isEmpty ? (
    notFoundContent
  ) : (
    <tbody className="table-tbody">
      {mustArray(dataSource).map((record, rowIndex) =>
        rowRenderer({
          rowIndex,
          record,
          ...otherProps,
        }),
      )}
    </tbody>
  );
}

export default tbodyRenderer;
