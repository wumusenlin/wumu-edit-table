import React from 'react';
import { colProps } from '../types';

function headerRenderer(columns: Array<colProps>) {
  const ths = columns.map((col, index) => {
    const { title, width = 200, dataIndex } = col;
    const thStyle = { width };
    const key = `${dataIndex}-${index}`;

    return (
      <th key={key} style={thStyle}>
        {index}
        {title}
      </th>
    );
  });

  return <tr>{ths}</tr>;
}

export default headerRenderer;
