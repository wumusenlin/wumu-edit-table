import React, { useState } from 'react';
import { EditTable } from 'wumu-edit-table';
import './demo.css';

export default () => {
  const [editId, onEdit] = useState('');
  const selectData = [
    { value: 1, label: 'v0.0.1' },
    { value: 2, label: 'v0.1.0' },
    { value: 3, label: 'v0.1.2' },
    { value: 4, label: 'v0.1.3' },
  ];
  const verisonList = [
    {
      id: 1,
      verison: '0.0.1',
      log: 'init project',
      remark: '👊based on dumi v2',
    },
    { id: 2, verison: '0.0.2', log: 'add header Render' },
    { id: 3, verison: '0.0.3', log: 'feat style' },
    {
      id: 4,
      verison: '💥0.1.0',
      log: 'add changeHandle',
      remark: '基础功能已经可用',
    },
    { id: 5, verison: '0.1.2', log: 'add api docs', remark: '✨新增api文档' },
    {
      id: 6,
      verison: '🎊0.1.3',
      log: 'add github pages',
      remark:
        '地址: https://wumusenlin.github.io/wumu-edit-table/components/edit-table',
    },
  ];
  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      width: 60,
      align: 'center',
      fixed: 'left',
    },
    {
      title: '选择版本号',
      dataIndex: 'select',
      width: 200,
      inputType: 'select',
      inputOptions: { selectData },
    },
    { title: '版本号', dataIndex: 'verison', width: 300 },
    { title: '更新日志', dataIndex: 'log', align: 'right', width: 300 },
    { title: '备注', dataIndex: 'remark' },
  ];
  const defaultDataSource = [{}];
  const [list, setList] = useState(
    defaultDataSource.map((x, index) => ({ ...x, index })),
  );

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
    const { value, rowIndex } = options;
    //找到对于的版本数据并set到数据源
    const versionData = verisonList.find((v) => v.id === value) ?? {};
    newList[rowIndex] = { ...newList[rowIndex], ...versionData };
    setList(newList);
  };

  return (
    <div className="wumu-demo">
      <div
        className="wumu-demo-wrap"
        style={{ display: 'flex', marginBottom: '16px' }}
      >
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
        onChange={onChange}
      />
    </div>
  );
};
