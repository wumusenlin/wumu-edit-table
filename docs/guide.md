---
title: 快速使用
order: 1
nav:
  title: 快速使用
  order: 1
---

通过 npm 引入后直接在项目中引用

```bash
npm i wumu-edit-table
```

## Usage

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
