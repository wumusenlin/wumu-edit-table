import {
  ColumnProps,
  ContainerInfoProps,
  FixedInfoProps,
  HandleChange,
  OnEdit,
  TableConfig,
} from './types.basic';

export interface UsefulCellProps {
  onEdit?: OnEdit;
  handleChange?: HandleChange;
  rowHeight: number;
  editId?: string;
  config?: TableConfig | null;
  containerInfo?: ContainerInfoProps;
  fixedInfo: FixedInfoProps;
  tableUid: string;
}

export interface UsefulRowProps extends UsefulCellProps {
  columns: Array<ColumnProps>;
}

export interface HeaderStyleProps {
  headerHeight?: number;
  headerBackground?: string;
}
