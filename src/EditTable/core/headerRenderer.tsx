import React from 'react';
import '../css/herader.css';
import { headerRendererProps } from '../types';

function headerRenderer(props: headerRendererProps) {
  const { columns, headerHeight } = props;

  const ths = columns.map((col, index) => {
    const { title, dataIndex, align = 'left' } = col;
    const thStyle = { textAlign: align };
    const key = `${dataIndex}-${index}`;

    return (
      <th key={key} title={title} className="table-th" style={thStyle}>
        {title}
      </th>
    );
  });
  const trStyle = { height: headerHeight };

  return (
    <thead>
      <tr style={trStyle} className="table-header">
        {ths}
      </tr>
    </thead>
  );
}

export default headerRenderer;
