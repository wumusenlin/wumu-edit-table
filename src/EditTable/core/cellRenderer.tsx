import React from 'react';
import { isFunction, mustArray } from '../helper/fn';
import {
  genClassName,
  genPrimaryColor,
  getRecordValue,
  genStyle,
  inputTypes,
} from '../helper/utils';
import Input from '../input';
import { CellRenderProps } from '../types';

function cellRenderer(props: CellRenderProps) {
  const {
    rowIndex,
    record,
    rowHeight,
    editId,
    onEdit = () => {},
    handleChange = () => {},
    config = null,
    col,
    columnIndex,
    fixedInfo,
    tableUid,
  } = props;
  const { _rowIndex: rowKey } = record;
  const {
    dataIndex,
    align = 'left',
    readonly = false,
    fixed,
    inputType,
    permanentNode,
  } = col;
  const key = `${tableUid}-${columnIndex}-${dataIndex}`;
  const id = `${rowKey}-${dataIndex}`;
  const isEdit = id === editId;
  const tdStyle = {
    height: rowHeight,
    boxShadow: isEdit ? `inset 0px 0px 0px 1px ${genPrimaryColor(config)}` : '',
    padding: isEdit ? ' 0 8px' : '0 12px',
  };

  const value = getRecordValue(record, dataIndex);

  if (permanentNode) {
    const node = isFunction(permanentNode)
      ? permanentNode(value, record)
      : permanentNode;
    return (
      <td
        id={id}
        key={key}
        style={genStyle({
          style: tdStyle,
          align,
          fixed,
          fixedInfo,
          columnIndex,
        })}
        className={genClassName({
          className: 'table-td-node',
          rowIndex,
          columnIndex,
          readonly,
          fixedInfo,
          fixed,
        })}
      >
        {node}
      </td>
    );
  }

  const inputChange = (val: any) => {
    handleChange(val, {
      rowIndex: rowKey,
      dataIndex,
      record,
    });
  };

  const content = isEdit ? (
    <Input
      config={config}
      initValue={value}
      inputChange={inputChange}
      onEdit={onEdit}
      column={col}
    />
  ) : inputType === inputTypes.select ? (
    mustArray(col?.inputOptions?.selectData).find((s) => s.value === value)
      ?.label
  ) : fixed ? (
    <div className="table-cell-overflow-hidden">{value}</div>
  ) : (
    value
  );

  return (
    <td
      id={id}
      key={key}
      style={genStyle({ style: tdStyle, align, fixed, fixedInfo, columnIndex })}
      className={genClassName({
        className: 'table-td',
        rowIndex,
        columnIndex,
        readonly,
        fixed,
        fixedInfo,
      })}
      title={value}
      onClick={() =>
        typeof onEdit === 'function' && !readonly ? onEdit(id) : void 0
      }
    >
      {content}
    </td>
  );
}

export default cellRenderer;
