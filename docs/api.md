---
title: 接口参数
order: 1
nav:
  title: 接口参数
  order: 3
---

## 核心参数

### editId

组件有的每个单元格有两种状态，一种是初始的状态（显示状态），另一种是编辑状态（传入`editId`后组件内部自行判断，可通过回调函数`onEdit`获取当前点击的`editId`的值）。
关于`editId`的定义，通过列的`dataIndex`属性和`index`属性组成，相当于横纵坐标。如基础用法示例中的第一行的`姓名`列的 id 即为`0-name`；`0`代表的第一行的下标，`name`代表的是`姓名`列的`dataIndex`属性，通过短横线`-`连接；

### dataSource

`dataSource`的数据源，是一个数组，每个元素代表一行数据，每个元素是一个对象，对象的属性和`columns`中的`dataIndex`属性一一对应；

### onChange

`onChange`回调函数，在编辑后触发，参数为`newList`和`options`；(具体请查看`接口参数`)

<!-- 定义表格宽度 -->
<style>
table th:first-of-type {
    width: 150px;
}

</style>

## wumu-edit-table

| 属性         | 说明                                                                                       | 类型                                  | 默认值 | 版本 |
| ------------ | ------------------------------------------------------------------------------------------ | ------------------------------------- | ------ | ---- |
| columns      | 表头                                                                                       | [columsType](#columns)                |
| dataSource   | 数据                                                                                       | `obj[]`                               |
| editId       | 当前编辑的单元格的 id(rowIndex_dataIndex)                                                  | `string`                              |
| onEdit       | 点击单元格时设置 editId                                                                    | `function:(editId)=>viod`             |
| rowHeight    | 行高                                                                                       | `number`                              | `40`   |
| maxHeight    | 最大高度，根据这个属性和`rowHeight`来决定渲染多少条数据                                    | `number`                              | `400`  |
| onChange     | 输入时值变化的回调 `newList`是新构造的数据，`options`里有当前操作的列项、行和 value 等信息 | <code>function(newList,options)<code> |
| headerHeight | 表头高度                                                                                   | `number`                              | `55`   |
| inputType    | 输入类型，支持`text`,`select`                                                              | `string`                              | `text` |
| inputOptions | 输入框的配置，如输入类型为下拉选择`select`时需要配置 `inputOptions:{selectData:[]}`        | [inputOptions](#inputoptions)         |

### columns

| 属性          | 说明                                                 | 类型                                  | 默认值 | 版本 |
| ------------- | ---------------------------------------------------- | ------------------------------------- | ------ | ---- |
| dataIndex     | 列数据在数据项中对应的路径，支持通过数组查询嵌套路径 | <code>string &#124; string[]<code>    |
| width         | 列宽                                                 | `number`                              | `120`  |
| title         | 列头显示文字                                         | `string`                              |
| align         | 对齐方式,支持`left`，`center`，`right`               | `string`                              | `left` |
| fixed         | 吸附列,支持`left`，`right`                           | `string`                              |
| permanentNode | 自定义渲染的元素                                     | `Node`/`function(value,record)=>Node` |

### inputOptions

| 属性        | 说明               | 类型                 | 默认值 | 版本 |
| ----------- | ------------------ | -------------------- | ------ | ---- |
| selectData  | 可选择的下拉选项   | `{ label, value }[]` |
| placeholder | 编辑状态的提示文字 | `string`             |
