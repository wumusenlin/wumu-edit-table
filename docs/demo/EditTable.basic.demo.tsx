import React, { useState } from 'react';
import { EditTable } from 'wumu-edit-table';
import './demo.css';

export default () => {
  const [editId, onEdit] = useState('');
  const defaultDataSource = [
    {
      verison: '0.0.1',
      log: 'init project',
      remark: '👊based on dumi v2',
      user: { name: 'xiaohua', age: 18 },
    },
    {},
    { verison: '0.0.2', log: 'add header Render' },
    { verison: '0.0.3', log: 'feat style' },
    {},
    { verison: '💥0.1.0', log: 'add changeHandle', remark: '基础功能已经可用' },
    {},
    { verison: '0.1.2', log: 'add api docs', remark: '✨新增api文档' },
    {},
    {},
    {
      verison: '🎊0.1.3',
      log: 'add github pages',
      remark:
        '地址: https://wumusenlin.github.io/wumu-edit-table/components/edit-table',
    },
    {},
    {},
    {},
    { verison: '💥0.1.0', log: 'add changeHandle', remark: '基础功能已经可用' },
    {},
    { verison: '0.0.3', log: 'feat style' },
    {},
    { verison: '💥0.1.0', log: 'add changeHandle', remark: '基础功能已经可用' },
    {},
    { verison: '0.1.2', log: 'add api docs', remark: '✨新增api文档' },
    {},
  ];
  const [list, setList] = useState(
    defaultDataSource.map((x, index) => ({ ...x, index })),
  );

  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      width: 60,
      align: 'center',
      fixed: 'left',
    },
    { title: '版本号', dataIndex: 'verison', width: 120, fixed: 'left' },
    {
      title: '更新日志',
      dataIndex: 'log',
      align: 'right',
      width: 300,
      inputOptions: { placeholder: '请输入更新日志' },
    },
    { title: '版本备注', dataIndex: 'remark', width: 400 },
    {
      title: '更新人-姓名',
      dataIndex: ['user', 'name'],
      width: 120,
    },
    {
      title: '更新人-年纪',
      width: 120,
      dataIndex: ['user', 'age'],
    },
    {
      title: '操作',
      width: 120,
      dataIndex: 'options',
      fixed: 'right',
      align: 'center',
      permanentNode: (v, r) => (
        <a
          onClick={() => {
            console.log(r);
            setList((preList) =>
              preList
                .slice(0, r._rowIndex)
                .concat(preList.slice(r._rowIndex + 1)),
            );
          }}
        >
          删除
        </a>
      ),
    },
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
