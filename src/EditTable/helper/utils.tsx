import React from 'react';
import '../css/tbody.css';
import {
  autoCol,
  colProps,
  genClassNameProps,
  genStyleProps,
  notFoundContentWrap,
} from '../types';

export const inputTypes = {
  text: 'text',
  select: 'select',
};

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
    columns.reduce(
      (res, col, index) =>
        res + (index === autoWidthColIndex ? 0 : col.width ?? 120),
      0,
    );

  return {
    autoWidthColIndex,
    autoColWidth: autoColWidth < 120 ? 120 : autoColWidth,
  };
}

export function setRowKey(list: Array<object>) {
  return list.map((x: any, i: number) => ({ ...x, _rowKey: i, rowIndex: i }));
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

export function genClassName(props: genClassNameProps) {
  const {
    className,
    rowIndex,
    columnIndex,
    readonly,
    fixed,
    fixedClassName = 'table-fixed-td',
  } = props;
  let str = className;
  if (rowIndex === 0) {
    str += ` table-first-tr`;
  }
  if (columnIndex === 0) {
    str += ` table-first-td`;
  }
  if (readonly) {
    str += ` table-td-readonly`;
  }
  if (fixed) {
    str += ` ${fixedClassName}`;
  }
  return str;
}

export function genStyle(props: genStyleProps) {
  const { style, fixed, align } = props;
  if (align) {
    style.textAlign = align;
  }
  if (fixed) {
    style.position = 'sticky';
    style.left = 0;
    style.zIndex = 1;
  }

  return style;
}