import React from 'react';
import { rowRendererProps } from '../types';
import cellRenderer from './cellRenderer';

function rowRenderer(props: rowRendererProps) {
  const { columns } = props;

  return (
    <tr className="table-tr">
      {columns.map((col, columnIndex) =>
        cellRenderer({ ...props, col, columnIndex }),
      )}
    </tr>
  );
}

export default rowRenderer;
