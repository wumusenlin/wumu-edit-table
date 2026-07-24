import type { CSSProperties, ReactNode } from 'react';
import type {
  AutoCol,
  ColumnProps,
  ContainerInfoProps,
  FixedInfoProps,
  InputChange,
  OnAdd,
  OnChange,
  OnDelete,
  OnEdit,
  OnScrolled,
  TAlign,
  TFixed,
  TableConfig,
} from './type/types.basic';
import type {
  HeaderStyleProps,
  UsefulCellProps,
  UsefulRowProps,
} from './type/types.useful';

export interface NotFoundContentWrapProps {
  children: ReactNode;
  containerInfo: ContainerInfoProps;
}

export interface ColGroupProps {
  columns: Array<ColumnProps>;
  autoCol: AutoCol;
}

export interface TbodyRendererProps extends UsefulRowProps {
  dataSource: Array<object>;
  notFoundContent?: null | ReactNode;
}

export interface RowRendererProps extends UsefulRowProps {
  rowIndex: number;
  record: any;
}

export interface HeaderRendererProps extends HeaderStyleProps {
  columns: Array<ColumnProps>;
  fixedInfo: FixedInfoProps;
  headerDraggable?: boolean;
  tableUid?: string;
}

export interface VirtualListOptions {
  overscan?: number;
  itemHeight?: number;
  maxHeight?: number;
  onScrolled?: OnScrolled;
  wrapperPropsStyle?: CSSProperties;
  calcDelay?: number;
}

export interface InputProps {
  inputChange?: InputChange;
  initValue: any;
  onEdit?: OnEdit;
  column: ColumnProps;
  config?: TableConfig | null;
}

export interface GenClassNameProps {
  className: string;
  rowIndex?: number;
  columnIndex?: number;
  readonly?: boolean | null;
  fixed?: TFixed;
  fixedClassName?: string;
  fixedInfo?: FixedInfoProps;
}

export interface GenStyleProps {
  style: CSSProperties;
  rowIndex?: number;
  columnIndex?: number;
  readonly?: boolean | null;
  fixed?: TFixed;
  align?: TAlign;
  fixedInfo: FixedInfoProps;
  defaultRightWidth?: number;
}

export interface TableContextProps {
  topHeight: number;
}

export interface CellRenderProps extends UsefulCellProps {
  col: ColumnProps;
  columnIndex: number;
  rowIndex: number;
  record: any;
}

interface OptionsConfig {
  label: string;
  fn: () => void;
}

export interface OptionsColumnsProps {
  columns: Array<ColumnProps>;
  deleteConfig: OptionsConfig;
  addConfig: OptionsConfig;
}

export interface EditTableProps extends HeaderStyleProps {
  columns: Array<ColumnProps>;
  dataSource: Array<object>;
  onEdit?: OnEdit;
  editId?: string;
  rowHeight?: number;
  maxHeight?: number;
  rowKey?: string;
  onChange?: OnChange;
  hiddenHerder?: boolean;
  notFoundContent?: null | ReactNode;
  config?: TableConfig | null;
  onAdd?: OnAdd;
  onDelete?: OnDelete;
  headerDraggable?: boolean;
  calcDelay?: number;
}
