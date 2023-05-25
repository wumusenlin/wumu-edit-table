import React from 'react';
import '../css/herader.css';
import { genClassName, genStyle } from '../helper/utils';
import { headerRendererProps } from '../types';

function headerRenderer(props: headerRendererProps) {
  const { columns, headerHeight } = props;

  const ths = columns.map((col, columnIndex) => {
    const { title, dataIndex, align = 'left', fixed, readonly } = col;
    const thStyle = { textAlign: align };
    const key = `${dataIndex}-${columnIndex}`;

    return (
      <th
        key={key}
        title={title}
        className={genClassName({
          className: 'table-th',
          readonly,
          fixed,
          fixedClassName: 'table-fixed-th',
        })}
        style={genStyle({ style: thStyle, align, fixed })}
      >
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
