import React from 'react';
import { colProps } from '../types';

function genColGroup(props: { columns: Array<colProps> }) {
  const { columns } = props;

  let lastNormalIndex = 0;
  columns.forEach((col, i) => {
    const { fixed } = col;
    if (fixed !== 'right') {
      lastNormalIndex = i;
    }
  });

  return (
    <colgroup>
      {columns.map((col, i) => {
        const { width } = col;
        const key = `col-${i}`;
        if (lastNormalIndex === i) {
          return <col key={key} />;
        }
        return <col key={key} style={{ width: width ?? 120 }} />;
      })}
    </colgroup>
  );
}

export default genColGroup;
