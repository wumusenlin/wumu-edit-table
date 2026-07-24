export interface ColorConfig {
  primaryColor?: string;
  headerBackground?: string;
}

export interface TableConfig {
  color?: ColorConfig;
}

export interface SelectDataItem {
  value: any;
  label: any;
}
export interface InputOptionsProps {
  selectData?: Array<SelectDataItem>;
  placeholder?: string;
}

export interface FixedInfoProps {
  left: Record<number, number>;
  right: Record<number, number>;
}

export interface ContainerInfoProps {
  offsetWidth: number;
  clientWidth: number;
  scrollLeft?: number;
  scrollTop?: number;
}

export interface OnChangeOptions {
  rowIndex: number;
  record: any;
  dataIndex: string | Array<string>;
  value: any;
}
export interface OnChange {
  (data: Array<any>, options: OnChangeOptions): void;
}

export interface HandleChangeOptions {
  rowIndex: number;
  record: any;
  dataIndex: string | Array<string>;
}
export interface HandleChange {
  (val: any, handleChangeOptions: HandleChangeOptions): void;
}

interface OnScrolledParams {
  scrollLeft: number;
  scrollTop: number;
}
export interface OnScrolled {
  (params: OnScrolledParams): void;
}
export interface AutoCol {
  autoWidthColIndex: null | number;
  autoColWidth: number;
}

export type OnEdit = (id: string, y?: number) => void;
export type OnAdd = (record: any) => void;
export type OnDelete = (record: any) => void;
export type PermanentNodeFn = (val: any, record: any) => void;
export type InputChange = (value: any) => void;

export type TFixed = 'right' | 'left' | null | string;
export type TAlign = 'left' | 'center' | 'right' | null | string;
export type InputType = 'text' | 'select' | null | string;

export interface ColumnProps {
  dataIndex: string | string[];
  title: string | any;
  width?: number;
  fixed?: TFixed;
  align?: TAlign;
  readonly?: undefined | boolean;
  inputType?: InputType;
  inputOptions?: InputOptionsProps;
  permanentNode?: PermanentNodeFn;
}
