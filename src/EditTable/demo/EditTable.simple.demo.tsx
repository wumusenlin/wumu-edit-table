import React, { useState } from 'react';
import { EditTable } from 'wumu-edit-table';
import './demo.css';

export default () => {
  const [editId, onEdit] = useState('');
  const defaultDataSource = [
    {
      name: '森林',
      job: '切图崽',
      age: '25',
      address: '四川德阳',
      remark: '想写一个简单的直接上手的可编辑表格',
    },
    {
      name: '贾小花',
      job: '会计',
      age: '保密',
      address: '',
      remark: '平时就是做做账，报报税，付付款而已，一个月有半个月在玩',
    },
    { name: '王大磊', job: '电竞工作者', age: '', address: '家里', remark: '' },
    { remark: undefined },
  ];
  const [list, setList] = useState(defaultDataSource);

  const columns = [
    { title: '姓名', dataIndex: 'name' },
    { title: '职业', dataIndex: 'job' },
    { title: '年龄', dataIndex: 'age' },
    { title: '家庭地址', dataIndex: 'address' },
    { title: '备注', dataIndex: 'remark' },
  ];

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
