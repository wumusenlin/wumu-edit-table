# wumu-edit-table

[![NPM version](https://img.shields.io/npm/v/wumu-edit-table.svg?style=flat)](https://npmjs.org/package/wumu-edit-table)
[![NPM downloads](http://img.shields.io/npm/dm/wumu-edit-table.svg?style=flat)](https://npmjs.org/package/wumu-edit-table)

## A react library developed with dumi

based on dumi v2

[online demo](https://wumusenlin.github.io/wumu-edit-table/components/edit-table)

## Usage

```bash
# install dependencies
$ npm i wumu-edit-table
```

简单使用：定义表头和数据;定义当前编辑的单元格`editId`；定义当前数据`dataSource`

```javaScript
import React, { useState } from 'react';
import { EditTable } from 'wumu-edit-table';

export default () => {
  const [editId, onEdit] = useState('');
  const columns = [
    {
      title: 'A',
      dataIndex: 'A',
      width: 300,
    },
    {
      title: 'B',
      dataIndex: 'B',
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
    {
      A: 'adsfads',
      B: 'ghdfgjgh',
      C: 'adsfasdfad',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },

    { A: 'adsfads', B: 'ghdfgjgh', C: 'adsfasdfad' },

  ];
  const [list, setList] = useState(dataSource)

  return (
    <EditTable
      editId={editId}
      onEdit={onEdit}
      columns={columns}
      dataSource={list}
      maxHeight={320}
      onChange={(newList) => setList(newList)}
    />
  );
};

```

TODO
行内新增和删除
自定义 render
更多的输入框类型：select、checkbox

## Options

即将推出

## Development

## LICENSE

MIT
