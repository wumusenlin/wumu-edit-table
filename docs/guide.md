---
title: 快速指南
order: 1
nav:
  title: 快速指南
  order: 1
---

## 版本

[![NPM version](https://img.shields.io/npm/v/wumu-edit-table.svg?style=flat)](https://npmjs.org/package/wumu-edit-table)

## 设计理念

该组基于`react.js`构造,是一个简单轻量无依赖的可编辑的`Table`组件；采用了虚拟滚动的实现，可以轻松应付大量数据。
组件采用的是可控模式，需要传入一个`dataSource`数据源；在修改后会触发一个`onChange`回调，配套用于修改数据源。

## 开始使用

### 引入包

通过 npm 引入后直接在项目中引用

```bash
npm i wumu-edit-table
```

### 简单使用

设计 api 时参考了[antd design table](https://4x-ant-design.antgroup.com/components/table-cn/#API)
定义表头和数据;定义当前编辑的单元格`editId`；定义当前数据`dataSource`

```javaScript
import React, { useState } from 'react';
import { EditTable } from 'wumu-edit-table';


export default () => {
  const [editId, onEdit] = useState('');
  const columns = [
    { title: '序号', dataIndex: 'index', width: 60, align: 'center' },
    { title: '版本号', dataIndex: 'verison', width: 300 },
    { title: '更新日志', dataIndex: 'log', align: 'right', width: 300 },
    { title: '备注', dataIndex: 'remark' },
  ];
  const dataSource = [
    { verison: '0.0.1', log: 'init project', remark: '👊based on dumi v2' },
    { verison: '0.0.2', log: 'add header Render', },
    { verison: '0.0.3', log: 'feat style' },
    { verison: '💥0.1.0', log: 'add changeHandle', remark: '基础功能已经可用' },
    { verison: '0.1.2', log: 'add api docs', remark: '✨新增api文档' },
    { verison: '🎊0.1.3', log: 'add github pages', remark: '地址: https://wumusenlin.github.io/wumu-edit-table/components/edit-table' },
  ];
  const [list, setList] = useState(dataSource.map((x, index) => ({ ...x, index })));

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
    <div>
      <div style={{ display: 'flex', marginBottom: '16px' }}>
        <button onClick={addLine} type="button">
          新增一行到最后
        </button>
        <button onClick={deleteLine} type="button" >
          删除最后一行
        </button>
        <button onClick={deleteAll} type="button">
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

```
