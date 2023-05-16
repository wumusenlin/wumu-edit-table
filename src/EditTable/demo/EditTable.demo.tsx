import { EditTable } from 'wumu-edit-table';

export default () => {
  const columns = [
    {
      title: 'A',
      dataIndex: 'A',
    },
    {
      title: 'B',
      dataIndex: 'B',
    },
    {
      title: 'C',
      dataIndex: 'C',
    },
  ];

  return <EditTable columns={columns} />;
};
