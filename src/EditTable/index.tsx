import React, { useEffect, useRef, useState, type FC } from 'react';
import '../index.css';
import headerRenderer from './core/headerRenderer';
import tbodyRenderer from './core/tbodyRenderer';
import './css/main.css';
import useVirtualList from './helper/useVirtualList';
import {
  deafultNotFoundCount,
  genColGroup,
  genNotFoundContentWrap,
  getAutoWidthCol,
  setRowKey,
} from './helper/utils';
import { autoCol, colProps, handleChange, tableProps } from './types';

export function scrollBar() {
  return 16;
}

const EditTable: FC<tableProps> = (props) => {
  const {
    columns,
    dataSource,
    editId,
    onEdit = () => {},
    rowHeight = 40,
    maxHeight = 400,
    headerHeight = 55,
    onChange = () => {},
    hiddenHerder = false,
    notFoundContent = null,
  } = props;

  const _headerWrapRef = useRef<HTMLDivElement | null>(null);
  const [_dataSource, _setDataSource] = useState<Array<object>>([]);
  const [_columns, _setColumns] = useState<Array<colProps>>([]);
  const [autoCol, setAutoCol] = useState<autoCol>({
    autoWidthColIndex: null,
    autoColWidth: 120,
  });

  const { list, wrapperProps, containerProps, bottomHeight, containerInfo } =
    useVirtualList(_dataSource, {
      itemHeight: rowHeight,
      maxHeight,
      overscan: 0,
      onScrolled: ({ scrollLeft }) => {
        if (_headerWrapRef.current) {
          _headerWrapRef.current.scrollLeft = scrollLeft;
        }
        // onEdit('');
      },
      wrapperPropsStyle: {
        borderSpacing: 0,
      },
    });

  const handleChange: handleChange = (val: any, options) => {
    const { rowIndex, dataIndex } = options;
    let targetDataSource = _dataSource;
    // @ts-ignore
    targetDataSource[rowIndex][dataIndex] = val;
    onChange(targetDataSource, {
      rowIndex,
      dataIndex,
      value: val,
      record: targetDataSource[rowIndex],
    });
  };

  useEffect(() => {
    _setDataSource(setRowKey(dataSource));
  }, [dataSource.length]);
  useEffect(() => {
    _setColumns(columns);
  }, [columns]);
  useEffect(() => {
    if (containerInfo.clientWidth) {
      setAutoCol(
        getAutoWidthCol({
          columns: _columns,
          clientWidth: containerInfo.clientWidth,
        }),
      );
    }
  }, [containerInfo]);

  const headerContent = hiddenHerder ? null : (
    <div className="wumu-table-header" ref={_headerWrapRef}>
      <table>
        {genColGroup({ columns: _columns, autoCol, scrollBar: scrollBar() })}
        {headerRenderer({ columns: _columns, headerHeight })}
      </table>
    </div>
  );

  return (
    <div className="wumu-table">
      {headerContent}
      {/* @ts-ignore */}
      <div className="wumu-table-body" {...containerProps}>
        <table {...wrapperProps}>
          {genColGroup({ columns, autoCol })}
          {tbodyRenderer({
            dataSource: list,
            columns: _columns,
            rowHeight,
            onEdit,
            editId,
            handleChange,
            notFoundContent: notFoundContent
              ? genNotFoundContentWrap({
                  containerInfo,
                  children: notFoundContent,
                })
              : genNotFoundContentWrap({
                  containerInfo,
                  children: deafultNotFoundCount(),
                }),
          })}
          <div style={{ height: bottomHeight }}></div>
        </table>
      </div>
    </div>
  );
};

export default EditTable;
