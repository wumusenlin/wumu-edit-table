import React, { useState } from 'react';
import { EditTable } from 'wumu-edit-table';
import { defaultColumns, defaultDataSource } from './exampleData';

export default () => {
  const [editId, onEdit] = useState('');

  const [list, setList] = useState(defaultDataSource);

  const [columns] = useState(defaultColumns);

  const onChange = (newList: any, options: any) => {
    console.log('options', options);
    setList(newList);
  };

  return (
    <EditTable
      editId={editId}
      onEdit={onEdit}
      columns={columns}
      dataSource={list}
      onChange={onChange}
    />
  );
};
