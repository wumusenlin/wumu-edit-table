import React, {
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FC,
} from 'react';
import '../index.css';
import headerRenderer from './core/headerRenderer';
import tbodyRenderer from './core/tbodyRenderer';
import './css/main.css';
import useVirtualList from './helper/useVirtualList';
import {
  defaultNotFoundContent,
  genColGroup,
  genFixedInfo,
  genNotFoundContentWrap,
  genToolBar,
  getAutoWidthCol,
  setRowKey,
} from './helper/utils';
import {
  autoCol,
  colProps,
  fixedInfoProps,
  handleChange,
  tableContextProps,
  tableProps,
} from './types';

export const tableContext = createContext<tableContextProps>({ topHeight: 0 });

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
    config = null,
    onAdd,
    onDelete,
  } = props;
  const _headerWrapRef = useRef<HTMLDivElement | null>(null);
  const [_dataSource, _setDataSource] = useState<Array<object>>([]);
  const [_columns, _setColumns] = useState<Array<colProps>>([]);
  const [autoCol, setAutoCol] = useState<autoCol>({
    autoWidthColIndex: null,
    autoColWidth: 120,
  });
  const [scrollInfo, setScrollInfo] = useState<object>({});
  const [_fixedInfo, _setFixedInfo] = useState<fixedInfoProps>({
    left: {},
    right: {},
  });
  const virtualListOptions = {
    itemHeight: rowHeight,
    maxHeight,
    overscan: 0,
    onScrolled: ({ scrollLeft, scrollTop }: any) => {
      setScrollInfo({ scrollLeft, scrollTop });
      if (_headerWrapRef.current) {
        _headerWrapRef.current.scrollLeft = scrollLeft;
      }
    },
    wrapperPropsStyle: {
      borderSpacing: 0,
    },
  };
  const {
    list,
    wrapperProps,
    containerProps,
    bottomHeight,
    containerInfo,
    topHeight,
    hasScrollY,
  } = useVirtualList(_dataSource, virtualListOptions);

  const handleChange: handleChange = (val: any, options) => {
    const { rowIndex, dataIndex } = options;
    let targetDataSource = _dataSource;
    if (Array.isArray(dataIndex)) {
      dataIndex.reduceRight((result, d, index) => {
        if (index === 0) {
          // @ts-ignore
          targetDataSource[rowIndex][d] = result;
        }
        return { [d]: result };
      }, val);
    } else {
      // @ts-ignore
      targetDataSource[rowIndex][dataIndex] = val;
    }

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
    _setFixedInfo(genFixedInfo(columns));
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
        {genColGroup({
          columns: _columns,
          autoCol,
          scrollBar: hasScrollY ? scrollBar() : undefined,
        })}
        {headerRenderer({
          columns: _columns,
          headerHeight,
          containerInfo: { ...scrollInfo, ...containerInfo },
          fixedInfo: _fixedInfo,
          scrollBar: hasScrollY ? scrollBar() : undefined,
        })}
      </table>
    </div>
  );

  const contextValue = { topHeight };

  const wrapClassName = useMemo(() => {
    let classStr = `wumu-table`;
    // @ts-ignore
    if (scrollInfo?.scrollLeft > 0) {
      classStr = classStr + ` has-left-shadow`;
    }

    classStr = classStr + ` has-right-shadow`;

    return classStr;
  }, [scrollInfo, containerInfo, autoCol]);

  return (
    <div className={wrapClassName}>
      {genToolBar({ onAdd, onDelete })}
      {/* @ts-ignore */}
      <div className="wumu-table-body" {...containerProps}>
        {headerContent}
        <tableContext.Provider value={contextValue}>
          <table {...wrapperProps}>
            {genColGroup({ columns, autoCol })}
            {tbodyRenderer({
              config,
              dataSource: list,
              columns: _columns,
              rowHeight,
              onEdit,
              editId,
              handleChange,
              containerInfo: { ...scrollInfo, ...containerInfo },
              fixedInfo: _fixedInfo,
              notFoundContent: notFoundContent
                ? genNotFoundContentWrap({
                    containerInfo: { ...scrollInfo, ...containerInfo },
                    children: notFoundContent,
                  })
                : genNotFoundContentWrap({
                    containerInfo: { ...scrollInfo, ...containerInfo },
                    children: defaultNotFoundContent(),
                  }),
            })}
            <div style={{ height: bottomHeight }}></div>
          </table>
        </tableContext.Provider>
      </div>
    </div>
  );
};

export default EditTable;
