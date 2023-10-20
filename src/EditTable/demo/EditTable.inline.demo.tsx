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

  const defaultDataSource = [
    {
      versionId: 1,
      verison: '0.0.1',
      log: 'init project',
      remark: '👊based on dumi v2',
    },
    {
      versionId: 4,
      verison: '💥0.1.0',
      log: 'add changeHandle',
      remark: '基础功能已经可用',
    },
    {},
  ];
  const [list, setList] = useState(
    defaultDataSource.map((x, index) => ({ ...x, index })),
  );
  const onAdd = (r) => {
    const index = r._rowIndex + 1;
    setList((state) => {
      return state.slice(0, index).concat({}).concat(state.slice(index));
    });
  };
  const onDelete = (r) => {
    const index = r._rowIndex;
    setList((preList) => {
      if (index < 0) {
        return preList;
      }
      return preList.slice(0, index).concat(preList.slice(index + 1));
    });
  };

  const columns = [
    {
      title: '➕',
      dataIndex: 'add',
      width: 60,
      align: 'center',
      fixed: 'left',
      permanentNode: (value, record) => (
        <a
          title="新增行"
          style={{ cursor: 'pointer', color: 'green' }}
          onClick={() => onAdd(record)}
        >
          ➕
        </a>
      ),
    },
    {
      title: '选择版本号',
      dataIndex: 'versionId',
      width: 200,
      inputType: 'select',
      inputOptions: { selectData },
    },
    { title: '版本号', dataIndex: 'verison', width: 300 },
    { title: '更新日志', dataIndex: 'log', align: 'right', width: 300 },
    { title: '备注', dataIndex: 'remark' },
    {
      title: '➖',
      dataIndex: 'add',
      width: 80,
      align: 'center',
      fixed: 'right',
      permanentNode: (value, record) => (
        <a
          title="删除行"
          style={{ cursor: 'pointer', color: 'green' }}
          onClick={() => onDelete(record)}
        >
          ➖
        </a>
      ),
    },
  ];

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
