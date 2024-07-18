---
title: 可编辑表格
order: 1
nav:
  title: 组件示例
  order: 2
---

## 基础用法

点击单元格进入此单元格`编辑模式`;
通过`onChange`来获取编辑后的数据以及当前操作的列与行信息；

### 编辑已有数据

<code src="../demo/EditTable.simple.demo.tsx"></code>

### 新增/删除行

为了给予用户最大程度的自己控制数据的能力，该`EditTable`被设计为`受控组件`。需要自行维护数据源，所以你可以在任何时候任何位置新增或删除`行数据`。一下为作者示例
<code src="../demo/EditTable.editRow.demo.tsx"></code>

## 固定列

通过在`columns`中的`fixed`属性来实现列的固定；如下示例左侧固定了两列，右侧固定了一列
<code src="../demo/EditTable.basic.demo.tsx"></code>

## 多类型输入

支持`select`下拉选择框;
此例子通过`onChange`来处理`dataSource`达到了选择版本号后会将版本的各种信息带出的效果；
<code src="../demo/EditTable.input.demo.tsx"></code>

## 行内新增/删除

通过在行内设置的`新增`或`删除`来对行进行操作；
如下:
列`➕`为新增一行到当前行的下一行；
列`➖`为删除当前行；
<code src="../demo/EditTable.inline.demo.tsx"></code>
