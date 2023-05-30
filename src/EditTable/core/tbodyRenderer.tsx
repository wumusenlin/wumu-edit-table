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
    containerInfo,
    config,
  } = props;

  // const addRow = () => { };

  const isEmpty = mustArray(dataSource).length === 0;

  return isEmpty ? (
    notFoundContent
  ) : (
    <tbody className="table-tbody">
      {mustArray(dataSource).map((record, rowIndex) =>
        rowRenderer({
          config,
          rowIndex,
          record,
          columns,
          rowHeight,
          onEdit,
          editId,
          handleChange,
          containerInfo,
        }),
      )}
    </tbody>
  );
}

export default tbodyRenderer;
