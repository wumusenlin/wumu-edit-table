import React from 'react';
import '../css/tbody.css';
import type { ColumnProps, TableConfig } from '../type/types.basic';
import {
  ColGroupProps,
  GenClassNameProps,
  GenStyleProps,
  NotFoundContentWrapProps,
} from '../types';

export const inputTypes = {
  text: 'text',
  select: 'select',
};

export function genColGroup(props: ColGroupProps) {
  const { columns, autoCol } = props;
  const { autoWidthColIndex, autoColWidth } = autoCol;

  return (
    <colgroup>
      {columns.map((col, i) => {
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
  columns: Array<ColumnProps>;
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

export function genFixedInfo(columns: ReadonlyArray<ColumnProps>) {
  let leftWidth = 0;
  let rightWidth = 0;
  const left: Record<number, number> = {};
  const right: Record<number, number> = {};

  columns.forEach(({ fixed, width = 120 }, index) => {
    if (fixed === 'left') {
      left[index] = leftWidth;
      leftWidth += width;
    }
  });
  for (let index = columns.length - 1; index >= 0; index -= 1) {
    const { fixed, width = 120 } = columns[index];
    if (fixed === 'right') {
      right[index] = rightWidth;
      rightWidth += width;
    }
  }

  return { left, right };
}

export function setRowKey(list: Array<object>) {
  return list.map((x: any, i: number) => ({ ...x, _rowIndex: i, rowIndex: i }));
}

export function defaultNotFoundContent() {
  return <div className="wumu-default-not-found-content">暂无数据~</div>;
}

export function genNotFoundContentWrap(props: NotFoundContentWrapProps) {
  const { containerInfo, children = defaultNotFoundContent() } = props;
  const style: React.CSSProperties = {
    width: containerInfo.offsetWidth,
    position: 'sticky',
    left: 0,
  };

  return <div style={style}>{children}</div>;
}

export function genClassName(props: GenClassNameProps) {
  const {
    className,
    rowIndex,
    columnIndex,
    readonly,
    fixed,
    fixedClassName = 'table-fixed-td',
    fixedInfo,
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
    if (fixed === 'left' && fixedInfo) {
      if (columnIndex === Math.max(...Object.keys(fixedInfo?.left))) {
        str += ` fixed-left-shadow`;
      }
    } else if (fixed === 'right' && fixedInfo) {
      if (columnIndex === Math.min(...Object.keys(fixedInfo?.right))) {
        str += ` fixed-right-shadow`;
      }
    }
    str += ` ${fixedClassName}`;
  }

  return str;
}

export function genStyle(props: GenStyleProps) {
  const {
    style,
    fixed,
    align,
    fixedInfo,
    columnIndex,
    defaultRightWidth = 0,
  } = props;
  if (align) {
    style.textAlign = align;
  }
  if (fixed) {
    style.position = 'sticky';

    style.zIndex = 1;
    if (fixed === 'left') {
      style.left = fixedInfo.left[columnIndex];
    } else if (fixed === 'right') {
      style.right = fixedInfo.right[columnIndex] + defaultRightWidth;
    }
  }

  return style;
}

export function getRecordValue(record: any, dataIndex: string | string[]) {
  return (Array.isArray(dataIndex) ? dataIndex : [dataIndex]).reduce(
    (value, key) => (value instanceof Object ? value[key] : null),
    record,
  );
}

export function colorLuminance(hexParm: string, lumParm = 0) {
  // validate hex string
  let hex = String(hexParm).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  let lum = lumParm || 0;
  // convert to decimal and change luminosity
  let rgb = '#',
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substring(c.length);
  }

  // colorLuminance("#69c", 0);		// returns "#6699cc"
  // colorLuminance("6699CC", 0.2);	// "#7ab8f5" - 20% lighter
  // colorLuminance("69C", -0.5);	// "#334d66" - 50% darker
  // colorLuminance("000", 1);		// "#000000" - true black cannot be made lighter!

  return rgb;
}

export function genPrimaryColor(config: TableConfig | null, lum?: number) {
  let tempColor = config?.color?.primaryColor;
  if (lum) {
    if (tempColor) {
      return colorLuminance(tempColor, lum);
    }
    return colorLuminance('#1da57a', lum);
  }

  return `${tempColor ?? 'var(--primary-color)'}`;
}
