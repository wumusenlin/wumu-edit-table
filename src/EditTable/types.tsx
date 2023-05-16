export interface colProps {
  dataIndex: string;
  title: string | Node;
  width: number | string;
}

export interface tableProps {
  columns: Array<colProps>;
}
