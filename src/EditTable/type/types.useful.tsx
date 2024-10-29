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
}

export interface IUsefulRowProps extends IUsefulCell {
  columns: Array<colProps>;
}
