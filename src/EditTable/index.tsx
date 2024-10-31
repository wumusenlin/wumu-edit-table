import React, {
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FC,
} from 'react';
import headerRenderer from './core/headerRenderer';
import tbodyRenderer from './core/tbodyRenderer';
import './css/main.css';
import { DragManager } from './helper/DragManager';
import useVirtualList from './helper/useVirtualList';
import {
  defaultNotFoundContent,
  genColGroup,
  genFixedInfo,
  genNotFoundContentWrap,
  getAutoWidthCol,
  setRowKey,
} from './helper/utils';
import {
  IAutoCol,
  IColProps,
  ITable,
  fixedInfoProps,
  handleChange,
  tableContextProps,
} from './types';

export const tableContext = createContext<tableContextProps>({ topHeight: 0 });

const EditTable: FC<ITable> = (props) => {
  const {
    columns,
    dataSource,
    editId,
    onEdit = () => {},
    rowHeight = 40,
    maxHeight = 400,
    headerHeight = 55,
    headerBackground = 'var(--table-header-bg)',
    onChange = () => {},
    hiddenHerder = false,
    notFoundContent = null,
    config = null,
    headerDraggable = false,
    calcDelay = 50, // 重新计算渲染初始行的节流时间（毫秒，参考throttle方法实现；仅作用于y轴滚动时）
  } = props;

  const _headerWrapRef = useRef<HTMLDivElement | null>(null);
  const tableUid = useMemo(() => `#table-header${Date.now()}`, []);

  const [_dataSource, _setDataSource] = useState<Array<object>>([]);
  const [_columns, _setColumns] = useState<Array<IColProps>>([]);
  const [hasScrollLeft, setHasScrollLeft] = useState(false);

  const [autoCol, setAutoCol] = useState<IAutoCol>({
    autoWidthColIndex: null,
    autoColWidth: 120,
  });
  const [_fixedInfo, _setFixedInfo] = useState<fixedInfoProps>({
    left: {},
    right: {},
  });

  const virtualListOptions = {
    itemHeight: rowHeight,
    maxHeight,
    overscan: 0,
    calcDelay,
    onScrolled: ({ scrollLeft }: any) => {
      // 同步表头的横向滚动
      if (_headerWrapRef.current) {
        _headerWrapRef.current.scrollLeft = scrollLeft;
      }
      if (scrollLeft > 0) {
        setHasScrollLeft(true);
      } else {
        setHasScrollLeft(false);
      }
    },
    wrapperPropsStyle: { borderSpacing: 0 },
  };
  const {
    list,
    wrapperProps,
    containerProps,
    bottomHeight,
    containerInfo,
    topHeight,
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
  useEffect(() => {
    if (!headerDraggable) return;

    const elementTr = document.getElementById(tableUid) as HTMLElement;
    if (!elementTr) return;

    const dragManager = new DragManager(elementTr, _columns, _setColumns);

    return () => {
      dragManager.destroy();
    };
  }, [headerDraggable, tableUid, _setColumns, _columns]);

  const wrapClassName = useMemo(() => {
    let classStr = `wumu-table`;
    if (hasScrollLeft) {
      classStr = classStr + ` has-left-shadow`;
    }

    classStr = classStr + ` has-right-shadow`;

    return classStr;
  }, [hasScrollLeft]);

  const colGroup = genColGroup({ columns: _columns, autoCol });
  const headerContent = hiddenHerder ? null : (
    <div className="wumu-table-header" ref={_headerWrapRef}>
      <table>
        {colGroup}
        {headerRenderer({
          columns: _columns,
          headerHeight,
          headerBackground,
          fixedInfo: _fixedInfo,
          headerDraggable,
          tableUid,
        })}
      </table>
    </div>
  );
  const contextValue = { topHeight };

  console.log('render开始');
  return (
    <div className={wrapClassName}>
      <div className="wumu-table-body" {...containerProps}>
        {headerContent}
        <tableContext.Provider value={contextValue}>
          <table {...wrapperProps}>
            {colGroup}
            {tbodyRenderer({
              tableUid,
              config,
              dataSource: list,
              columns: _columns,
              rowHeight,
              onEdit,
              editId,
              handleChange,
              fixedInfo: _fixedInfo,
              notFoundContent: genNotFoundContentWrap({
                containerInfo,
                children: notFoundContent ?? defaultNotFoundContent(),
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
