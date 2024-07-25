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
    headerDraggable = false,
  } = props;
  const _headerWrapRef = useRef<HTMLDivElement | null>(null);
  const [_timeKey] = useState(Date.now());
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
  const trId = useMemo(() => `#table-header${_timeKey}`, [_timeKey]);
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

  useEffect(() => {
    let elementTr = document.getElementById(trId) as HTMLElement;
    let currentTh: HTMLElement;

    elementTr.addEventListener('dragstart', (e: DragEvent) => {
      e.dataTransfer.effectAllowed = 'move'; // 表示这个被拖拽的盒子可以被移动，这只是一种样式的表现
      currentTh = e.target as HTMLElement;
      currentTh.style.border = '1px solid var(--primary-color)';
      // 将原生的半透明的img样式修改为纯透明的
      // let img = new Image();
      // img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' %3E%3Cpath /%3E%3C/svg%3E";
      // e.dataTransfer.setDragImage(img, 0, 0);

      // 复制一个节点出来模拟正在拖动的元素
      // const rect = currentTh.getBoundingClientRect();
      // const { left, top } = rect
      // cloneElement = document.createElement('DIV');
      // const fakeObj = currentTh.cloneNode(true);
      // fakeObj.style.width = currentTh.offsetWidth + 'px';
      // fakeObj.style.height = currentTh.offsetHeight + 'px';
      // fakeObj.style.transform = 'translate3d(0,0,0)';
      // fakeObj.setAttribute('dragging', '');
      // cloneElement.appendChild(fakeObj);
      // cloneElement.className = 'wumu-drag-clone-element';
      // cloneElement.style = 'transform:translate3d( ' + left + 'px ,' + top + 'px,0);';
      // console.log('cloneElement', cloneElement)
      // document.body.appendChild(cloneElement);

      setTimeout(() => {
        currentTh.classList.add('wumu-drag-moving');
      });
    });

    elementTr.addEventListener('dragenter', (e) => {
      e.preventDefault();
      if (e.target === currentTh || e.target === elementTr) {
        return;
      }
      let liArray = Array.from(elementTr.childNodes);
      let currentIndex = liArray.indexOf(currentTh);
      let targetindex = liArray.indexOf(e.target);
      if (currentIndex < targetindex) {
        elementTr.insertBefore(currentTh, e.target.nextElementSibling);
      } else {
        elementTr.insertBefore(currentTh, e.target);
      }
    });
    elementTr.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    elementTr.addEventListener('dragend', () => {
      const dataIndexs = [];
      elementTr.childNodes.forEach((td) => {
        dataIndexs.push(td.getAttribute('data-index'));
      });

      _setColumns((old) =>
        dataIndexs.map((d) => old.find((o) => o.dataIndex === d)),
      );
      currentTh.classList.remove('wumu-drag-moving');
    });
    return () => {
      const actions = ['dragstart', 'dragenter', 'dragover', 'dragend'];
      actions.forEach((action) =>
        elementTr?.removeEventListener(action, () => {}),
      );
    };
  }, []);

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
          headerDraggable,
          trId,
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
              notFoundContent: genNotFoundContentWrap({
                containerInfo: { ...scrollInfo, ...containerInfo },
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
