export interface color {
  primaryColor?: string;
  headerBackground?: string;
}

export interface config {
  color?: color;
}

export interface selectDataItem {
  value: any;
  label: any;
}
export interface inputOptionsProps {
  selectData?: Array<selectDataItem>;
  placeholder?: string;
}

export interface fixedInfoProps {
  left: object;
  right: object;
}

export interface containerInfoProps {
  offsetWidth: number;
  clientWidth: number;
  scrollLeft?: number;
  scrollTop?: number;
}

export interface onChangeOptions {
  rowIndex: number;
  record: any;
  dataIndex: string | Array<string>;
  value: any;
}
export interface onChange {
  (data: Array<any>, options: onChangeOptions): void;
}

export interface handleChangeOptions {
  rowIndex: number;
  record: any;
  dataIndex: string | Array<string>;
}
export interface handleChange {
  (val: any, handleChangeOptions: handleChangeOptions): void;
}

interface onScrolledParams {
  scrollLeft: number;
  scrollTop: number;
}
export interface onScrolled {
  (onScrolledParma: onScrolledParams): void;
}
export interface IAutoCol {
  autoWidthColIndex: null | number;
  autoColWidth: number;
}

export type onEdit = (id: string, y?: number) => void;
export type onAdd = (record: any) => void;
export type onDelete = (record: any) => void;
export type permanentNodeFun = (val: any, record: any) => void;
export type inputChange = (value: any) => void;

export type TFixed = 'right' | 'left' | null | string;
export type TAlign = 'left' | 'center' | 'right' | null | string;
export type InputType = 'text' | 'select' | null | string;

export interface colProps {
  dataIndex: string | string[];
  title: string | any;
  width?: number;
  fixed?: TFixed;
  align?: TAlign;
  readonly?: undefined | boolean;
  inputType?: InputType;
  inputOptions?: inputOptionsProps;
  permanentNode?: permanentNodeFun;
}
