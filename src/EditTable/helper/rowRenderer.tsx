import React from 'react';
import BasicInput from '../input/basicInput';
import { rowRendererProps } from '../types';

function rowRenderer(props: rowRendererProps) {
  const {
    columns,
    record,
    rowHeight,
    editId,
    onEdit = () => {},
    handleChange = () => {},
  } = props;
  const { rowKey } = record;

  return (
    <tr className="table-tr">
      {columns.map((col, index) => {
        const { dataIndex } = col;
        const key = `${index}-${dataIndex}`;
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
            cellId: id,
          });
        };
        const value = record[dataIndex];
        const content = isEdit ? (
          <BasicInput
            initValue={value}
            inputChange={inputChange}
            onEdit={onEdit}
          />
        ) : (
          value
        );
        return (
          <td
            id={id}
            key={key}
            style={tdStyle}
            className="table-td"
            onClick={() => (typeof onEdit === 'function' ? onEdit(id) : void 0)}
          >
            {content}
          </td>
        );
      })}
    </tr>
  );
}

export default rowRenderer;
