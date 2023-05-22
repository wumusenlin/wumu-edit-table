import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type FC,
} from 'react';
import '../index.css';
import './css/main.css';
import headerRenderer from './helper/headerRenderer';
import tbodyRenderer from './helper/tbodyRenderer';
import useVirtualList from './helper/useVirtualList';
import { genColGroup, getAutoWidthCol, setRowKey } from './helper/utils';
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
    maxHeight,
    headerHeight = 55,
    onChange = () => {},
  } = props;

  const _headerWrapRef = useRef();
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
      overscan: 2,
      onScrolled: ({ scrollLeft }) => {
        if (_headerWrapRef.current) {
          _headerWrapRef.current.scrollLeft = scrollLeft;
        }
        onEdit('');
      },
      wrapperPropsStyle: {
        borderSpacing: 0,
        boxShadow: 'inset 0px 0px 10px 0px #dadada',
      },
    });

  const handleChange: handleChange = (val: any, options) => {
    const { rowIndex, dataIndex } = options;

    let targetDataSource = _dataSource;
    targetDataSource[rowIndex][dataIndex] = val;
    onChange(targetDataSource);
    // _setDataSource(targetDataSource)
  };
  // console.log('containerInfo', containerInfo);
  useEffect(() => {
    if (dataSource?.length > 0) {
      _setDataSource(setRowKey(dataSource));
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
      <div className="wumu-table-header" ref={_headerWrapRef}>
        <table>
          {genColGroup({ columns: _columns, autoCol, scrollBar: scrollBar() })}
          {headerRenderer({ columns: _columns, headerHeight })}
        </table>
      </div>
      {/* @ts-ignore */}
      <div className="wumu-table-body" {...containerProps}>
        <table {...wrapperProps}>
          {genColGroup({ columns: _columns, autoCol })}
          {tbodyRenderer({
            dataSource: list,
            columns: _columns,
            rowHeight,
            onEdit,
            editId,
            handleChange,
          })}
          <div style={{ height: bottomHeight }}></div>
        </table>
      </div>
    </div>
  );
};

export default EditTable;
