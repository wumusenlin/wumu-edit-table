import React from 'react';
import '../css/tbody.css';
import { rowRendererProps } from '../types';

function rowRenderer(props: rowRendererProps) {
  const { columns, record, rowHeight } = props;
  return (
    <tr className="table-tr">
      {columns.map((col, index) => {
        const { dataIndex } = col;
        const key = `${index}-${dataIndex}`;
        const tdStyle = { height: rowHeight };
        return (
          <td key={key} style={tdStyle} className="table-td">
            {record[dataIndex]}
          </td>
        );
      })}
    </tr>
  );
}

export default rowRenderer;
