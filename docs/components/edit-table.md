---
title: 可编辑表格
order: 1
nav:
  title: 组件
  order: 2
---

## 基础用法

点击单元格进入此单元格编辑模式;
通过`onChange`来获取编辑后的数据以及当前操作的列与行；
表格支持虚拟滚动，拒绝性能瓶颈；
<code src="../../src/EditTable/demo/EditTable.basic.demo.tsx"></code>

## 多类型输入

支持`select`下拉选择框;
此例子通过`onChange`来处理`dataSource`达到了选择版本号后会将版本的各种信息带出的效果；
<code src="../../src/EditTable/demo/EditTable.input.demo.tsx"></code>
