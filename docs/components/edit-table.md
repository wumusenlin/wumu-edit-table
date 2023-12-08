---
title: 可编辑表格
order: 1
nav:
  title: 组件
  order: 2
---

## 基础用法

点击单元格进入此单元格`编辑模式`;
通过`onChange`来获取编辑后的数据以及当前操作的列与行信息；
表格支持虚拟滚动，拒绝性能瓶颈；
<code src="../../src/EditTable/demo/EditTable.simple.demo.tsx"></code>

## 固定列

通过在`columns`中的`fixed`属性来实现列的固定；如下示例左侧固定了两列，右侧固定了一列
<code src="../../src/EditTable/demo/EditTable.basic.demo.tsx"></code>

## 多类型输入

支持`select`下拉选择框;
此例子通过`onChange`来处理`dataSource`达到了选择版本号后会将版本的各种信息带出的效果；
<code src="../../src/EditTable/demo/EditTable.input.demo.tsx"></code>

## 行内新增/删除

通过在行内设置的`新增`或`删除`来对行进行操作；
如下:
列`➕`为新增一行到当前行的下一行；
列`➖`为删除当前行；
<code src="../../src/EditTable/demo/EditTable.inline.demo.tsx"></code>
