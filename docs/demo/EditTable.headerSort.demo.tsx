import React, { useState } from 'react';
import { EditTable } from 'wumu-edit-table';
import './demo.css';

export default () => {
  const [editId, onEdit] = useState('');
  const [list, setList] = useState([
    { A: 'A1', B: 'B1', C: 'C1', F: 'F1' },
    { A: 'A2', E: 'B2', C: 'C2', D: 'D2' },
  ]);

  const columns = [
    {
      title: 'A',
      dataIndex: 'A',
      width: 200,
      align: 'center',
    },
    {
      title: 'B',
      dataIndex: 'B',
      width: 200,
      align: 'center',
    },
    {
      title: 'C',
      dataIndex: 'C',
      width: 200,
      align: 'center',
    },
    {
      title: 'D',
      dataIndex: 'D',
      width: 200,
      align: 'center',
    },
    {
      title: 'E',
      dataIndex: 'E',
      width: 200,
      align: 'center',
    },
  ];

  const onChange = (newList: any, options: any) => {
    console.log('options', options);
    setList(newList);
  };

  return (
    <div className="wumu-demo">
      <EditTable
        editId={editId}
        onEdit={onEdit}
        columns={columns}
        dataSource={list}
        onChange={onChange}
        headerDraggable
        headerBackground="#e5f6fc"
      />
    </div>
  );
};
