import React from 'react';
import { rowRendererProps } from '../types';
import cellRenderer from './cellRenderer';

function rowRenderer(props: rowRendererProps) {
  const { columns, rowIndex, tableUid } = props;
  const key = `${tableUid}-${rowIndex}`;
  return (
    <tr className="table-tr" key={key}>
      {columns.map((col, columnIndex) =>
        cellRenderer({ ...props, tableUid, rowIndex, col, columnIndex }),
      )}
    </tr>
  );
}

export default rowRenderer;
