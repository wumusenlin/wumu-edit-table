import { mustArray } from '../helper/fn';
import { OptionsColumnsProps } from '../types';

function genOptionsColumns(options: OptionsColumnsProps) {
  const { columns } = options;
  const len = columns.length;
  const addCol = {
    title: '新增',
    dataIndex: 'add',
    width: 60,
    align: 'center',
    fixed: 'left',
    // permanentNode: <div>+</div>
  };
  const optionCol = {
    title: '操作',
    dataIndex: 'options',
    width: 60,
    align: 'center',
    fixed: 'right',
    // permanentNode: <div>删除</div>
  };

  return mustArray(columns)
    .map((col, index) => {
      if (index === 0) {
        return [addCol, col];
      } else if (index === len - 1) {
        return [col, optionCol];
      }
      return col;
    })
    .flat(1);
}

export default genOptionsColumns;
