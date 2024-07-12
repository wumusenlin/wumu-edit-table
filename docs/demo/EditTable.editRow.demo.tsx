import React, { useState } from 'react';
import { EditTable } from 'wumu-edit-table';
import './demo.css';
import { defaultColumns, defaultDataSource } from './exampleData';

export default () => {
  const [editId, onEdit] = useState('');

  const [list, setList] = useState(defaultDataSource);

  const [columns] = useState(defaultColumns);

  const addLine = () => {
    setList((preList) => preList.concat([{}]));
  };
  const deleteLine = () => {
    setList((preList) => preList.slice(0, -1));
  };
  const deleteAll = () => {
    setList([]);
  };
  const onChange = (newList: any, options: any) => {
    console.log('options', options);
    setList(newList);
  };

  return (
    <div className="wumu-demo">
      <div
        className="wumu-demo-wrap"
        style={{ display: 'flex', marginBottom: '16px' }}
      >
        <button onClick={addLine} type="button" className="wumu-demo-button">
          新增行到最后
        </button>
        <button onClick={deleteLine} type="button" className="wumu-demo-button">
          删除最后行
        </button>
        <button onClick={deleteAll} type="button" className="wumu-demo-button">
          全部删除
        </button>
      </div>
      <EditTable
        editId={editId}
        onEdit={onEdit}
        columns={columns}
        dataSource={list}
        onChange={onChange}
      />
    </div>
  );
};
