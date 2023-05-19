import React, { type FC } from 'react';
import headerRenderer from './helper/headerRenderer';
import tbodyRenderer from './helper/tbodyRenderer';
import useVirtualList from './helper/useVirtualList';
import genColGroup from './helper/utils';
import { tableProps } from './types';

const EditTable: FC<tableProps> = (props) => {
  const { columns, dataSource, onEdit, rowHeight = 40, maxHeight } = props;
  const {
    list,
    wrapperProps,
    containerProps,
    // topHeight,
    bottomHeight,
    // containerInfo,
  } = useVirtualList(dataSource, {
    itemHeight: rowHeight,
    maxHeight,
    overscan: 2,
    onScrolled: () => onEdit(''),
    wrapperPropsStyle: { borderSpacing: 0 },
  });

  return (
    <div className="table-wrap" {...containerProps}>
      <table className="" {...wrapperProps}>
        {genColGroup({ columns })}
        {/* <div style={{ height: topHeight }}></div> */}
        {headerRenderer({ columns, rowHeight })}
        {tbodyRenderer({ dataSource: list, columns, rowHeight })}
        <div style={{ height: bottomHeight }}></div>
      </table>
    </div>
  );
};

export default EditTable;
