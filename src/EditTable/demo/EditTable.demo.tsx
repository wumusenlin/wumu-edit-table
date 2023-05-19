import React from 'react';
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
    {
      title: 'D',
      dataIndex: 'D',
    },
    {
      title: 'E',
      dataIndex: 'E',
    },
  ];
  const dataSource = [
    { A: '干嘛', B: '哎哟', C: 'haha' },
    { A: 'fasdfasdf', B: 'asdfasd', C: 'ghjfgh' },
    { A: 'adsfasdf', B: 'fasdf', C: 'rsfgsdf' },
    { A: 'khjkghj', B: '哎哟', C: '8iuk' },
    { A: 'wts', B: 'vbn', C: 'fhj' },
    { A: 'fhjf', B: '哎哟', C: 'haha' },
    { A: '干嘛', B: 'shshsdfgsdfgsdfgsdfgsdfgsdfg', C: 'khjkghjk' },
    { A: 'adsfads', B: 'ghdfgjgh', C: 'adsfasdfad' },
  ];

  return <EditTable columns={columns} dataSource={dataSource} />;
};
