import {
  colProps,
  config,
  containerInfoProps,
  fixedInfoProps,
  handleChange,
  onEdit,
} from './types.basic';

export interface IUsefulCell {
  onEdit?: onEdit;
  handleChange?: handleChange;
  rowHeight: number;
  editId?: string;
  config?: config | null;
  containerInfo?: containerInfoProps;
  fixedInfo: fixedInfoProps;
  tableUid: string;
}

export interface IUsefulRowProps extends IUsefulCell {
  columns: Array<colProps>;
}

export interface IUsefulHeaderStyle {
  headerHeight?: number;
  headerBackground?: string;
}
