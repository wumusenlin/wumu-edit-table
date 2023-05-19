import React from 'react';
import { tbodyRendererProps } from '../types';
import { mustArray } from './fn';
import rowRenderer from './rowRenderer';

function tbodyRenderer(props: tbodyRendererProps) {
  const { dataSource, columns, rowHeight = 40 } = props;

  const addRow = () => {};

  if (mustArray(dataSource).length === 0) {
    return (
      <div>
        暂无数据
        <button type="button" onClick={() => addRow()}>
          新增行
        </button>
      </div>
    );
  }
  return (
    <tbody>
      {mustArray(dataSource).map((record) => {
        return rowRenderer({ record, columns, rowHeight });
      })}
    </tbody>
  );
}

export default tbodyRenderer;
