import React from 'react';
import '../css/herader.css';
import { genClassName, genStyle } from '../helper/utils';
import { headerRendererProps } from '../types';

function headerRenderer(props: headerRendererProps) {
  const { columns, headerHeight, fixedInfo, scrollBar } = props;

  const ths = columns.map((col, columnIndex) => {
    const { title, dataIndex, align = 'left', fixed, readonly } = col;
    const thStyle = { textAlign: align };
    const key = `${dataIndex}-${columnIndex}`;

    const thContont = fixed ? (
      <div className="table-cell-overflow-hidden">{title}</div>
    ) : (
      title
    );
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
        style={genStyle({
          style: thStyle,
          align,
          fixed,
          fixedInfo,
          columnIndex,
          defaultRightWidth: scrollBar,
        })}
      >
        {thContont}
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
