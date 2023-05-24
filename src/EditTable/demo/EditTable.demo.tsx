import React, { useState } from 'react';
import { EditTable } from 'wumu-edit-table';
import './demo.css';

export default () => {
  const [editId, onEdit] = useState('');
  const columns = [
    {
      title: '序号',
      dataIndex: 'rowIndex',
      width: 60,
      align: 'center',
      // readonly: true,
    },
    {
      title: 'A',
      dataIndex: 'A',
      width: 300,
    },
    {
      title: 'B',
      dataIndex: 'B',
      align: 'right',
    },
    {
      title: 'C',
      dataIndex: 'C',
      width: 300,
    },
    {
      title: 'D',
      dataIndex: 'D',
    },
    {
      title: 'E',
      dataIndex: 'E',
      width: 380,
    },
    {
      title: 'F',
      dataIndex: 'F',
      width: 300,
    },
  ];
  const dataSource = [
    {
      A: '干嘛',
      B: '哎哟',
      C: 'haha',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    { A: 'fasdfasdf', B: 'asdfasd', C: 'ghjfgh' },
    { A: 'adsfasdf', B: 'fasdf', C: 'rsfgsdf' },
    {
      A: 'khjkghj',
      B: '哎哟',
      C: '8iuk',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    { A: 'wts', B: 'vbn', C: 'fhj' },
    {
      A: 'fhjf',
      B: '哎哟',
      C: 'haha',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    { A: '干嘛', B: 'shshsdfgsdfgsdfgsdfgsdfgsdfg', C: 'khjkghjk' },
    { A: 'adsfads', B: 'ghdfgjgh', C: 'adsfasdfad' },
    {
      A: 'adsfads',
      B: 'ghdfgjgh',
      C: 'adsfasdfad',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    {
      A: 'adsfads',
      B: 'ghdfgjgh',
      C: 'adsfasdfad',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    {
      A: 'fhjf',
      B: '哎哟',
      C: 'haha',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    {
      A: 'adsfads',
      B: 'ghdfgjgh',
      C: 'adsfasdfad',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    {
      A: 'adsfads',
      B: 'ghdfgjgh',
      C: 'adsfasdfad',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    {
      A: 'fhjf',
      B: '哎哟',
      C: 'haha',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    {
      A: 'adsfads',
      B: 'ghdfgjgh',
      C: 'adsfasdfad',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    { A: 'adsfads', B: 'ghdfgjgh', C: 'adsfasdfad' },
    {
      A: 'fhjf',
      B: '哎哟',
      C: 'haha',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
  ];
  const [list, setList] = useState(dataSource);

  const addLine = () => {
    setList((preList) => preList.concat([{}]));
  };
  const deleteLine = () => {
    setList((preList) => preList.slice(0, -1));
  };
  const deleteAll = () => {
    setList([]);
  };

  return (
    <div className="wumu-demo">
      <div style={{ display: 'flex', marginBottom: '16px' }}>
        <button onClick={addLine} type="button" className="wumu-demo-button">
          新增一行到最后
        </button>
        <button onClick={deleteLine} type="button" className="wumu-demo-button">
          删除最后一行
        </button>
        <button onClick={deleteAll} type="button" className="wumu-demo-button">
          删除所有数据
        </button>
      </div>
      <EditTable
        editId={editId}
        onEdit={onEdit}
        columns={columns}
        dataSource={list}
        onChange={(newList) => setList(newList)}
      />
    </div>
  );
};
