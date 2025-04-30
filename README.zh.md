<p align="center">
  <a href="https://wumusenlin.github.io/wumu-edit-table">
    <img width="150" src="https://s1.ax1x.com/2023/03/07/ppZOvxP.png">
  </a>
</p>
<h1 align="center">wumu-edit-table</h1>

[![NPM version][npm-image]][npm-url]
[![NPM downloads](http://img.shields.io/npm/dm/wumu-edit-table.svg?style=flat)](https://npmjs.org/package/wumu-edit-table)
[![ docs by dumi][dumi-url]](https://d.umijs.org/)

<!-- [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/wumusenlin/wumu-edit-table/blob/main/LICENSE)
[![contributors][contributors-shield]][contributors-url]
[![forks][forks-shield]][forks-url]
[![stargazers][stargazers-shield]][stargazers-url]
[![issues][issues-shield]][issues-url] -->

## 一个轻量的无依赖的 React 可编辑表格

## DEMO

[在线示例](https://wumusenlin.github.io/wumu-edit-table/components/edit-table)

## 🎊features

- 📑 行内新增和删除 [git pages](https://wumusenlin.github.io/wumu-edit-table/components/edit-table#%E8%A1%8C%E5%86%85%E6%96%B0%E5%A2%9E%E5%88%A0%E9%99%A4)
- 📑 自定义 cellRender
- 📑 新增 select 类型输入[git pages](https://wumusenlin.github.io/wumu-edit-table/components/edit-table#%E5%A4%9A%E7%B1%BB%E5%9E%8B%E8%BE%93%E5%85%A5)
- 📑 固定列（横向滚动左侧固定和右侧固定）[git pages](https://wumusenlin.github.io/wumu-edit-table/components/edit-table#%E5%9B%BA%E5%AE%9A%E5%88%97)

## ✨lightspot

- 🏳‍🌈 简单易用，点哪编辑哪
- 🚀 虚拟滚动，再多数据都不怕卡顿啦

## 📌 todo list

1. ~~📑 行内新增和删除~~
2. ~~📑 自定义 cellRender~~
3. 📑 其他类型 input：~~select~~、checkbox
4. ~~📑 固定列~~
5. 📑 表头可伸缩
6. ~~📑 表头拖拽排序~~

## 🔨Usage

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
          add last line
        </button>
        <button onClick={deleteLine} type="button" >
          delete last line
        </button>
        <button onClick={deleteAll} type="button">
          delete all
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

## 📖 Docs

[github pages](https://wumusenlin.github.io/wumu-edit-table)

[国内地址(腾讯云部署)](http://wumusenlin.xyz:8002/)
作者自己维护的地址可能存在更新不及时的问题，请以 npm 版本为准

## ⚙ Options

[git pages options](https://wumusenlin.github.io/wumu-edit-table/api)

## 👊 power by

based on dumi v2

## 📊 LICENSE

MIT

[npm-image]: https://img.shields.io/npm/v/wumu-edit-table.svg?style=flat
[npm-url]: http://npmjs.org/package/wumu-edit-table
[contributors-shield]: https://img.shields.io/github/contributors/wumusenlin/wumu-edit-table.svg?style=flat
[contributors-url]: https://github.com/wumusenlin/wumu-edit-table/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/wumusenlin/wumu-edit-table.svg?style=flat
[forks-url]: https://github.com/wumusenlin/wumu-edit-table/network/members
[issues-shield]: https://img.shields.io/github/issues/wumusenlin/wumu-edit-table.svg?style=flat
[issues-url]: https://github.com/wumusenlin/wumu-edit-table/issues/new/choose
[stargazers-shield]: https://img.shields.io/github/stars/wumusenlin/wumu-edit-table.svg?style=flat
[stargazers-url]: https://github.com/wumusenlin/wumu-edit-table/stargazers
[dumi-url]: https://img.shields.io/badge/docs%20by-dumi-blue
