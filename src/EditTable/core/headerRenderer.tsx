import React from 'react';
import '../css/herader.css';
import { genClassName, genStyle } from '../helper/utils';
import { headerRendererProps } from '../types';

function headerRenderer(props: headerRendererProps) {
  const {
    columns,
    headerHeight,
    headerBackground = 'var(--table-header-bg)',
    fixedInfo,
    scrollBar,
    trId,
    headerDraggable,
  } = props;
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
          fixedInfo,
          fixedClassName: 'table-fixed-th',
          columnIndex,
        })}
        data-index={dataIndex.toString()}
        style={genStyle({
          style: thStyle,
          align,
          fixed,
          fixedInfo,
          columnIndex,
          defaultRightWidth: scrollBar,
        })}
        draggable={headerDraggable}
      >
        {thContont}
      </th>
    );
  });
  const trStyle = { height: headerHeight, background: headerBackground };

  return (
    <thead>
      <tr style={trStyle} className="table-header" id={trId}>
        {ths}
      </tr>
    </thead>
  );
}

export default headerRenderer;
