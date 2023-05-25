import React from 'react';
import '../css/tbody.css';
import { mustArray } from '../helper/fn';
import { tbodyRendererProps } from '../types';
import rowRenderer from './rowRenderer';

function tbodyRenderer(props: tbodyRendererProps) {
  const {
    dataSource,
    columns,
    rowHeight = 40,
    onEdit,
    editId,
    handleChange = () => {},
    notFoundContent,
  } = props;

  // const addRow = () => { };

  const isEmpty = mustArray(dataSource).length === 0;

  return isEmpty ? (
    notFoundContent
  ) : (
    <tbody className="table-tbody">
      {mustArray(dataSource).map((record) =>
        rowRenderer({
          record,
          columns,
          rowHeight,
          onEdit,
          editId,
          handleChange,
        }),
      )}
    </tbody>
  );
}

export default tbodyRenderer;
