import { ReactNode } from 'react';

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
export interface autoCol {
  autoWidthColIndex: null | number;
  autoColWidth: number;
}
interface changeOptions {
  rowIndex: number;
  record: any;
  cellId: string;
  dataIndex: string | Array<string>;
}
interface onChange {
  (data: Array<any>, options: changeOptions): void;
}
export interface handleChange {
  (val: any, changeOptions: changeOptions): void;
}
interface onScrolledParmar {
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
  hiddenHerder?: boolean;
  notFoundContent?: null | ReactNode;
}

export interface tbodyRendererProps {
  columns: Array<colProps>;
  dataSource: Array<object>;
  rowHeight: number;
  onEdit?: onEdit;
  editId?: string;
  handleChange?: handleChange;
  notFoundContent?: null | ReactNode;
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

export interface containerInfoProps {
  offsetWidth: number;
  clientWidth: number;
  scrollLeft?: number;
  scrollTop?: number;
}
export interface virtualListResponse {
  list: Array<any>;
  wrapperProps: object;
  containerProps: object;
  topHeight: number;
  bottomHeight: number;
  containerInfo: containerInfoProps;
}

interface inputChange {
  (value: any): void;
}
export interface inputProps {
  inputChange?: inputChange;
  initValue: any;
  onEdit?: onEdit;
}

export interface notFoundContentWrap {
  children: ReactNode;
  containerInfo: containerInfoProps;
}
