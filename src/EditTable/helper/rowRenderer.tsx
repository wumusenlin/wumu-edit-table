import React from 'react';
import { rowRendererProps } from '../types';

function rowRenderer(props: rowRendererProps) {
  const { columns, record, rowHeight } = props;
  return (
    <tr className="table-tr">
      {columns.map((col, index) => {
        const { dataIndex } = col;
        const key = `${index}-${dataIndex}`;
        const id = `${record.rowKey}-${dataIndex}`;
        const tdStyle = { height: rowHeight };
        return (
          <td id={id} key={key} style={tdStyle} className="table-td">
            {record[dataIndex]}
          </td>
        );
      })}
    </tr>
  );
}

export default rowRenderer;
