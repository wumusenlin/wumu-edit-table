import { ReactNode } from 'react';

export interface color {
  primaryColor?: any;
}
export interface config {
  color?: color;
}
export interface selectDataItem {
  value: any;
  label: any;
}
export interface inputOptionsProps {
  selectData: Array<selectDataItem>;
}

export interface colProps {
  dataIndex: string;
  title: string | any;
  width?: number;
  fixed?: 'right' | 'left' | null | string;
  align?: 'left' | 'center' | 'right' | null | string;
  readonly?: undefined | boolean;
  inputType?: 'text' | 'select';
  inputOptions?: inputOptionsProps;
}

interface onEdit {
  (id: string, y?: number): void;
}
export interface autoCol {
  autoWidthColIndex: null | number;
  autoColWidth: number;
}
interface handleChangeOptions {
  rowIndex: number;
  record: any;
  dataIndex: string | Array<string>;
}
interface onChangeOptions {
  rowIndex: number;
  record: any;
  dataIndex: string | Array<string>;
  value: any;
}
interface onChange {
  (data: Array<any>, options: onChangeOptions): void;
}
export interface handleChange {
  (val: any, handleChangeOptions: handleChangeOptions): void;
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
  config?: config | null;
}

export interface tbodyRendererProps {
  columns: Array<colProps>;
  dataSource: Array<object>;
  rowHeight: number;
  onEdit?: onEdit;
  editId?: string;
  handleChange?: handleChange;
  notFoundContent?: null | ReactNode;
  config?: config | null;
  containerInfo: containerInfoProps;
}
export interface headerRendererProps {
  columns: Array<colProps>;
  headerHeight: number;
  containerInfo: containerInfoProps;
}

export interface rowRendererProps {
  rowIndex: number;
  columns: Array<colProps>;
  record: any;
  rowHeight: number;
  onEdit?: onEdit;
  handleChange?: handleChange;
  editId?: string;
  config?: config | null;
  containerInfo?: containerInfoProps;
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
  column: colProps;
  config?: config | null;
}

export interface notFoundContentWrap {
  children: ReactNode;
  containerInfo: containerInfoProps;
}

export interface genClassNameProps {
  className: string;
  rowIndex?: number;
  columnIndex?: number;
  readonly?: boolean | null;
  fixed?: 'right' | 'left' | null | string;
  fixedClassName?: string;
  extraClassName?: string | null;
}

export interface genStyleProps {
  style: string;
  rowIndex: number;
  columnIndex: number;
  readonly?: boolean | null;
  fixed?: 'right' | 'left' | null | string;
  align?: 'left' | 'center' | 'right' | null | string;
}

export interface tableContextProps {
  topHeight: number;
}
