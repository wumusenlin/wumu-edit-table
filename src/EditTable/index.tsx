import React, { useEffect, useLayoutEffect, useState, type FC } from 'react';
import '../index.css';
import './css/main.css';
import headerRenderer from './helper/headerRenderer';
import tbodyRenderer from './helper/tbodyRenderer';
import useVirtualList from './helper/useVirtualList';
import { genColGroup, getAutoWidthCol, setRowKey } from './helper/utils';
import { autoCol, colProps, tableProps } from './types';

const EditTable: FC<tableProps> = (props) => {
  const {
    columns,
    dataSource,
    onEdit = () => {},
    rowHeight = 40,
    maxHeight,
    headerHeight = 55,
  } = props;
  const [_dataSource, setDataSource] = useState<Array<object>>([]);
  const [_columns, _setColumns] = useState<Array<colProps>>([]);
  const [autoCol, setAutoCol] = useState<autoCol>({
    autoWidthColIndex: null,
    autoColWidth: 120,
  });
  console.log('autoCol', autoCol);
  const { list, wrapperProps, containerProps, bottomHeight, containerInfo } =
    useVirtualList(_dataSource, {
      itemHeight: rowHeight,
      maxHeight,
      overscan: 2,
      onScrolled: () => onEdit(''),
      wrapperPropsStyle: {
        borderSpacing: 0,
        boxShadow: 'inset 0px 0px 10px 0px #dadada',
      },
    });

  console.log('containerInfo', containerInfo);
  useEffect(() => {
    if (dataSource?.length > 0) {
      setDataSource(setRowKey(dataSource));
    }
  }, [dataSource.length]);
  useEffect(() => {
    _setColumns(columns);
  }, [columns]);
  useLayoutEffect(() => {
    if (containerInfo.clientWidth) {
      setAutoCol(
        getAutoWidthCol({
          columns: _columns,
          clientWidth: containerInfo.clientWidth,
        }),
      );
    }
  }, [containerInfo]);

  return (
    <div className="wumu-table">
      <div className="wumu-table-header">
        <table>
          {genColGroup({ columns: _columns, autoCol })}
          {headerRenderer({ columns: _columns, headerHeight })}
        </table>
      </div>
      {/* @ts-ignore */}
      <div className="wumu-table-body" {...containerProps}>
        <table {...wrapperProps}>
          {genColGroup({ columns: _columns, autoCol })}
          {tbodyRenderer({ dataSource: list, columns: _columns, rowHeight })}
          <div style={{ height: bottomHeight }}></div>
        </table>
      </div>
    </div>
  );
};

export default EditTable;
