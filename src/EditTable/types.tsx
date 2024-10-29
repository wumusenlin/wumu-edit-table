import { ReactNode } from 'react';
import {
  TAlign,
  TFixed,
  IAutoCol as basicAutoCol,
  colProps as basicColProps,
  fixedInfoProps as basicFixedInfoProps,
  config,
  containerInfoProps,
  handleChangeOptions,
  inputChange,
  onAdd,
  onChange,
  onDelete,
  onEdit,
  onScrolled,
} from './type/types.basic';
import {
  IUsefulCell,
  IUsefulHeaderStyle,
  IUsefulRowProps,
} from './type/types.useful';

export interface notFoundContentWrap {
  children: ReactNode;
  containerInfo: containerInfoProps;
}

export interface IColGroup {
  columns: Array<basicColProps>;
  autoCol: basicAutoCol;
  scrollBar?: number;
}

export interface tbodyRendererProps extends IUsefulRowProps {
  dataSource: Array<object>;
  notFoundContent?: null | ReactNode;
}

export interface rowRendererProps extends IUsefulRowProps {
  rowIndex: number;
  record: any;
}

export interface headerRendererProps extends IUsefulHeaderStyle {
  columns: Array<basicColProps>;
  containerInfo: containerInfoProps;
  fixedInfo: basicFixedInfoProps;
  scrollBar?: number;
  headerDraggable?: boolean;
  trId?: string;
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
  containerInfo: containerInfoProps;
}

export interface inputProps {
  inputChange?: inputChange;
  initValue: any;
  onEdit?: onEdit;
  column: basicColProps;
  config?: config | null;
}

export interface genClassNameProps {
  className: string;
  rowIndex?: number;
  columnIndex?: number;
  readonly?: boolean | null;
  fixed?: TFixed;
  fixedClassName?: string;
  fixedInfo?: basicFixedInfoProps;
}

export interface genStyleProps {
  style: any;
  rowIndex?: number;
  columnIndex?: number;
  readonly?: boolean | null;
  fixed?: TFixed;
  align?: TAlign;
  fixedInfo?: basicFixedInfoProps;
  defaultRightWidth?: number;
}

export interface tableContextProps {
  topHeight: number;
}

export interface cellRenderProps extends IUsefulCell {
  col: basicColProps;
  columnIndex: number;
}

export interface optionsConfig {
  label: string;
  fn: () => void;
}

export interface OptionsColumnsProps {
  columns: Array<basicColProps>;
  deleteConfig: optionsConfig;
  addConfig: optionsConfig;
}

export interface ITable extends IUsefulHeaderStyle {
  columns: Array<basicColProps>;
  dataSource: Array<object>;
  onEdit?: onEdit;
  editId?: string;
  rowHeight?: number;
  maxHeight?: number;
  rowKey?: string;
  onChange?: onChange;
  hiddenHerder?: boolean;
  notFoundContent?: null | ReactNode;
  config?: config | null;
  onAdd?: onAdd;
  onDelete?: onDelete;
  headerDraggable?: boolean;
}

export interface IColProps extends basicColProps {
  dataIndex: string;
}
export interface fixedInfoProps extends basicFixedInfoProps {
  left: object;
}
export interface IAutoCol extends basicAutoCol {
  autoColWidth: number;
}

export interface handleChange {
  (val: any, handleChangeOptions: handleChangeOptions): void;
}
