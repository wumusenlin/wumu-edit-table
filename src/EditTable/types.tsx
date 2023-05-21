export interface colProps {
  dataIndex: string;
  title: any;
  width?: number;
  fixed?: 'right' | 'left';
  align?: 'left' | 'center' | 'right';
}

interface onEdit {
  (id: string, y?: number): void;
}
interface changeOptions {
  rowIndex: number;
  record: any;
  cellId: string;
}
interface onChange {
  (data: Array<any>, options: changeOptions): void;
}
interface handleChange {
  (val: any): void;
}
interface onScrolledParmar {
  scrollTop: number;
  scrollLeft: number;
}
interface onScrolled {
  (onScrolledParmar: onScrolledParmar): void;
}
export interface tableProps {
  columns: Array<colProps>;
  dataSource: Array<object>;
  onEdit?: onEdit;
  editId?: string;
  rowHeight?: number;
  maxHeight?: number;
  headerHeight?: number;
  rowKey?: string;
  onChange?: onChange;
}

export interface tbodyRendererProps {
  columns: Array<colProps>;
  dataSource: Array<object>;
  rowHeight: number;
  onEdit?: onEdit;
  editId?: string;
  handleChange?: handleChange;
}
export interface headerRendererProps {
  columns: Array<colProps>;
  headerHeight: number;
}

export interface rowRendererProps {
  columns: Array<colProps>;
  record: any;
  rowHeight: number;
  onEdit?: onEdit;
  handleChange?: handleChange;
  editId?: string;
}

export interface virtualListOptions {
  overscan?: number;
  itemHeight?: number;
  maxHeight?: number;
  height?: number;
  onScrolled?: onScrolled;
  wrapperPropsStyle?: object;
}

export interface virtualListResponse {
  list: Array<any>;
  wrapperProps: object;
  containerProps: object;
  topHeight: number;
  bottomHeight: number;
  containerInfo: number;
}

export interface autoCol {
  autoWidthColIndex: null | number;
  autoColWidth: number;
}

interface handleChange {
  (value: any): void;
}
export interface inputProps {
  columns: Array<colProps>;
  record: any;
  rowHeight: number;
  onEdit?: onEdit;
  editId?: string;
  handleChange?: handleChange;
  initValue: any;
  rowIndex: number;
  dataIndex: string | Array<string>;
}
