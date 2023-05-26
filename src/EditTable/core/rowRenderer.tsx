import React from 'react';
import { genClassName, genStyle } from '../helper/utils';
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
  } = props;
  const { _rowKey: rowKey } = record;

  return (
    <tr className="table-tr">
      {columns.map((col, columnIndex) => {
        const { dataIndex, align = 'left', readonly = false, fixed } = col;
        const key = `${columnIndex}-${dataIndex}`;
        const id = `${rowKey}-${dataIndex}`;
        const isEdit = id === editId;
        const tdStyle = {
          height: rowHeight,
          boxShadow: isEdit ? 'inset 0px 0px 0px 1px var(--primary-color)' : '',
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
            initValue={value}
            inputChange={inputChange}
            onEdit={onEdit}
            column={col}
          />
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
