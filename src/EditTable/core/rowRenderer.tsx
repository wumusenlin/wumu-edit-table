import React from 'react';
import { mustArray } from '../helper/fn';
import {
  genClassName,
  genPrimaryColor,
  genStyle,
  inputTypes,
} from '../helper/utils';
import Input from '../input';
import { rowRendererProps } from '../types';

function rowRenderer(props: rowRendererProps) {
  const {
    rowIndex,
    columns,
    record,
    rowHeight,
    editId,
    onEdit = () => {},
    handleChange = () => {},
    config = null,
  } = props;
  const { _rowKey: rowKey } = record;

  return (
    <tr className="table-tr">
      {columns.map((col, columnIndex) => {
        const {
          dataIndex,
          align = 'left',
          readonly = false,
          fixed,
          inputType,
        } = col;
        const key = `${columnIndex}-${dataIndex}`;
        const id = `${rowKey}-${dataIndex}`;
        const isEdit = id === editId;
        const tdStyle = {
          height: rowHeight,
          boxShadow: isEdit
            ? `inset 0px 0px 0px 1px ${genPrimaryColor(config)}`
            : '',
          padding: isEdit ? ' 0 8px' : '0 12px',
        };

        const inputChange = (val: any) => {
          handleChange(val, {
            rowIndex: rowKey,
            dataIndex,
            record,
          });
        };
        const value = record[dataIndex];
        const content = isEdit ? (
          <Input
            config={config}
            initValue={value}
            inputChange={inputChange}
            onEdit={onEdit}
            column={col}
          />
        ) : inputType === inputTypes.select ? (
          mustArray(col?.inputOptions?.selectData).find(
            (s) => s.value === value,
          )?.label
        ) : (
          value
        );
        return (
          <td
            id={id}
            key={key}
            style={genStyle({ style: tdStyle, align, fixed })}
            className={genClassName({
              className: 'table-td',
              rowIndex,
              columnIndex,
              readonly,
              fixed,
            })}
            title={value}
            onClick={() =>
              typeof onEdit === 'function' && !readonly ? onEdit(id) : void 0
            }
          >
            {content}
          </td>
        );
      })}
    </tr>
  );
}

export default rowRenderer;
