---
title: 接口参数
order: 1
nav:
  title: 接口参数
  order: 3
---

### wumu-edit-table

| 属性         | 说明                                                    | 类型                          | 默认值 | 版本 |
| ------------ | ------------------------------------------------------- | ----------------------------- | ------ | ---- |
| columns      | 表头                                                    | [columsType](#columns)        |
| dataSource   | 数据                                                    | `obj[]`                       |
| editId       | 当前编辑的单元格的 id(rowIndex_dataIndex)               | `string`                      |
| onEdit       | 点击单元格时设置 editId                                 | `function:(editId)=>viod`     |
| rowHeight    | 行高                                                    | number                        | `40`   |
| maxHeight    | 最大高度，根据这个属性和`rowHeight`来决定渲染多少条数据 | number                        | `400`  |
| onChange     | 输入时值变化的回调                                      | <code>function(newList)<code> |
| headerHeight | 表头高度                                                | number                        | `55`   |

### columns

| 属性      | 说明                                                 | 类型                               | 默认值 | 版本 |
| --------- | ---------------------------------------------------- | ---------------------------------- | ------ | ---- |
| dataIndex | 列数据在数据项中对应的路径，支持通过数组查询嵌套路径 | <code>string &#124; string[]<code> |
| width     | 列宽                                                 | `number`                           | `120`  |
| title     | 列头显示文字                                         | `string`                           |
