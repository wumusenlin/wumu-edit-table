export interface colProps {
  dataIndex: string;
  title: any;
  width?: number | string;
  fixed?: 'right' | 'left';
  align: 'left' | 'center' | 'right';
}

interface onEdit {
  (id: string, y?: number): void;
}
export interface tableProps {
  columns: Array<colProps>;
  dataSource: Array<object>;
  onEdit: onEdit;
  rowHeight?: number;
  maxHeight?: number;
}

export interface tbodyRendererProps {
  columns: Array<colProps>;
  dataSource: Array<object>;
  rowHeight: number;
}
export interface headerRendererProps {
  columns: Array<colProps>;
  rowHeight: number;
}

export interface rowRendererProps {
  columns: Array<colProps>;
  record: any;
  rowHeight: number;
}

export interface virtualListOptions {
  overscan?: number;
  itemHeight?: number;
  maxHeight?: number;
  height?: number;
  onScrolled?: () => void;
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
