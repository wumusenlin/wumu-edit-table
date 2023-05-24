import React from 'react';
import '../css/tbody.css';
import { autoCol, colProps, notFoundContentWrap } from '../types';

export function genColGroup(props: {
  columns: Array<colProps>;
  autoCol: autoCol;
  scrollBar?: number;
}) {
  const { columns, autoCol, scrollBar } = props;
  const { autoWidthColIndex, autoColWidth } = autoCol;
  const targetColumns = scrollBar
    ? columns.concat([{ width: scrollBar }])
    : columns;
  return (
    <colgroup>
      {targetColumns.map((col, i) => {
        const { width } = col;
        const key = `col-${i}`;
        if (autoWidthColIndex === i) {
          return <col key={key} style={{ width: autoColWidth ?? 120 }} />;
        }
        return <col key={key} style={{ width: width ?? 120 }} />;
      })}
    </colgroup>
  );
}

export function getAutoWidthCol(props: {
  columns: Array<colProps>;
  clientWidth: number;
}) {
  const { columns, clientWidth = 0 } = props;
  let autoWidthColIndex: null | number = null;

  columns.forEach((col, i) => {
    const { fixed } = col;
    if (fixed !== 'right') {
      autoWidthColIndex = i;
    }
  });

  const autoColWidth =
    clientWidth -
    1 -
    columns.reduce(
      (res, col, index) =>
        res + (index === autoWidthColIndex ? 0 : col.width ?? 120),
      0,
    );

  return { autoWidthColIndex, autoColWidth };
}

export function setRowKey(list: Array<object>) {
  return list.map((x: any, i: number) => ({ ...x, rowKey: i }));
}

export function deafultNotFoundCount() {
  return <div className="wumu-deafult-not-found-content">暂无数据~</div>;
}

export function genNotFoundContentWrap(props: notFoundContentWrap) {
  const { containerInfo, children = deafultNotFoundCount() } = props;
  const style = {
    width: containerInfo.offsetWidth,
    marginLeft: containerInfo.scrollLeft,
  };

  return (
    <div>
      <div style={style}>{children}</div>
    </div>
  );
}
