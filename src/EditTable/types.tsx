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

export interface fixedInfoProps {
  left: object;
  right: object;
}
export type permanentNodeFun = (val: any, record: any) => void;

export interface colProps {
  dataIndex: string;
  title: string | any;
  width?: number;
  fixed?: 'right' | 'left' | null | string;
  align?: 'left' | 'center' | 'right' | null | string;
  readonly?: undefined | boolean;
  inputType?: 'text' | 'select' | null | string;
  inputOptions?: inputOptionsProps;
  permanentNode?: permanentNodeFun;
}

type onEdit = (id: string, y?: number) => void;
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
  onAdd?: any;
  onDelete?: any;
  headerDraggable?: boolean;
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
  fixedInfo: fixedInfoProps;
}
export interface headerRendererProps {
  columns: Array<colProps>;
  headerHeight: number;
  containerInfo: containerInfoProps;
  fixedInfo: fixedInfoProps;
  scrollBar?: number;
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
  fixedInfo?: fixedInfoProps;
}

export interface genStyleProps {
  style: any;
  rowIndex?: number;
  columnIndex?: number;
  readonly?: boolean | null;
  fixed?: 'right' | 'left' | null | string;
  align?: 'left' | 'center' | 'right' | null | string;
  fixedInfo?: fixedInfoProps;
  defaultRightWidth?: number;
}

export interface tableContextProps {
  topHeight: number;
}

export interface cellRenderProps {
  rowIndex: number;
  record: any;
  rowHeight: number;
  onEdit?: onEdit;
  handleChange?: handleChange;
  editId?: string;
  config?: config | null;
  containerInfo?: containerInfoProps;
  col: colProps;
  columnIndex: number;
  fixedInfo: any;
}

export interface optionsConfig {
  label: string;
  fn: () => void;
}

export interface OptionsColumnsProps {
  columns: Array<colProps>;
  deleteConfig: optionsConfig;
  addConfig: optionsConfig;
}
