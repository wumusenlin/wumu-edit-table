import React from 'react';
import '../css/herader.css';
import { headerRendererProps } from '../types';

function headerRenderer(props: headerRendererProps) {
  const { columns, rowHeight } = props;

  const ths = columns.map((col, index) => {
    const { title, width = 200, dataIndex, align = 'left' } = col;
    const thStyle = { width, textAlign: align };
    const key = `${dataIndex}-${index}`;

    return (
      <th key={key} className="table-th" style={thStyle}>
        {index}
        {title}
      </th>
    );
  });
  const trStyle = { height: rowHeight };

  return (
    <tr style={trStyle} className="table-header">
      {ths}
    </tr>
  );
}

export default headerRenderer;
