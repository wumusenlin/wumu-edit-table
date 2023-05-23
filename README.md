# wumu-edit-table

[![NPM version](https://img.shields.io/npm/v/wumu-edit-table.svg?style=flat)](https://npmjs.org/package/wumu-edit-table)
[![NPM downloads](http://img.shields.io/npm/dm/wumu-edit-table.svg?style=flat)](https://npmjs.org/package/wumu-edit-table)

## A simple react edit-table

based on dumi v2

## 在线示例

[online demo](https://wumusenlin.github.io/wumu-edit-table/components/edit-table)

## features

1. [x] 好用的交互，点击单元格即可编辑，点击其他地方即可退出
2. [x] 虚拟滚动，再多数据都不怕卡顿啦

## todo list

1. [ ] 行内新增和删除
2. [ ] 自定义 cellRender
3. [ ] 其他类型 input：select、checkbox
4. [ ] 固定列
5. [ ] 表头可伸缩

## Usage

### 引入包

```bash
$ npm i wumu-edit-table
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
    { title: 'A', dataIndex: 'A',width: 300,},
    { title: 'B', dataIndex: 'B'},
    { title: 'C', dataIndex: 'C',width: 300,},
    { title: 'D', dataIndex: 'D'},
    { title: 'E', dataIndex: 'E', width: 380},
    { title: 'F', dataIndex: 'F', width: 200},
  ];
  const dataSource = [
    { A: '四川成都', B: '前端开发', C: '益州大道', D: '1998-08-01', E: '攒够10万块钱' },
    { A: '四川广元', B: '出纳',C: '金融城',D: '1996-07-17', E: '能够开心的玩耍' },
    { A: '四川绵阳', B: '文字工作者', C: '居家',D: '1996-XX-XX', E: '佛系' },
  ];
  const [list, setList] = useState(dataSource)

  const onChange = (newList)=>{
    console.log('newList', newList)
    setList(newList)
  }

  return (
    <EditTable
      editId={editId}
      onEdit={onEdit}
      columns={columns}
      dataSource={list}
      maxHeight={320}
      onChange={onChange}
    />
  );
};

```

## Options

即将推出

## LICENSE

MIT
