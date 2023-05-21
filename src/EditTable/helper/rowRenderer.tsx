import React from 'react';
import BasicInput from '../input/basicInput';
import { rowRendererProps } from '../types';

function rowRenderer(props: rowRendererProps) {
  const { columns, record, rowHeight, editId, onEdit, handleChange } = props;
  return (
    <tr className="table-tr">
      {columns.map((col, index) => {
        const { dataIndex } = col;
        const key = `${index}-${dataIndex}`;
        const id = `${record.rowKey}-${dataIndex}`;
        const isEdit = id === editId;
        const tdStyle = {
          height: rowHeight,
          border: isEdit ? '1px solid red' : '',
        };
        const value = record[dataIndex];
        const content = isEdit ? (
          <BasicInput
            initValue={value}
            handleChange={handleChange}
            rowIndex={record.rowKey}
            dataIndex={dataIndex}
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
