import React from 'react';
import { EditTable } from 'wumu-edit-table';

export default () => {
  const columns = [
    {
      title: 'A',
      dataIndex: 'A',
      width: 300,
    },
    {
      title: 'B',
      dataIndex: 'B',
    },
    {
      title: 'C',
      dataIndex: 'C',
      width: 300,
    },
    {
      title: 'D',
      dataIndex: 'D',
    },
    {
      title: 'E',
      dataIndex: 'E',
    },
    {
      title: 'F',
      dataIndex: 'F',
      width: 300,
    },
  ];
  const dataSource = [
    {
      A: '干嘛',
      B: '哎哟',
      C: 'haha',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    { A: 'fasdfasdf', B: 'asdfasd', C: 'ghjfgh' },
    { A: 'adsfasdf', B: 'fasdf', C: 'rsfgsdf' },
    {
      A: 'khjkghj',
      B: '哎哟',
      C: '8iuk',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    { A: 'wts', B: 'vbn', C: 'fhj' },
    {
      A: 'fhjf',
      B: '哎哟',
      C: 'haha',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    { A: '干嘛', B: 'shshsdfgsdfgsdfgsdfgsdfgsdfg', C: 'khjkghjk' },
    { A: 'adsfads', B: 'ghdfgjgh', C: 'adsfasdfad' },
    {
      A: 'adsfads',
      B: 'ghdfgjgh',
      C: 'adsfasdfad',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    {
      A: 'adsfads',
      B: 'ghdfgjgh',
      C: 'adsfasdfad',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    {
      A: 'fhjf',
      B: '哎哟',
      C: 'haha',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    {
      A: 'adsfads',
      B: 'ghdfgjgh',
      C: 'adsfasdfad',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    {
      A: 'adsfads',
      B: 'ghdfgjgh',
      C: 'adsfasdfad',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    {
      A: 'fhjf',
      B: '哎哟',
      C: 'haha',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    {
      A: 'adsfads',
      B: 'ghdfgjgh',
      C: 'adsfasdfad',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
    { A: 'adsfads', B: 'ghdfgjgh', C: 'adsfasdfad' },
    {
      A: 'fhjf',
      B: '哎哟',
      C: 'haha',
      D: '噶速度进来看哈流口水的份',
      E: 'guaiosdjlkgjasdgasdg',
    },
  ];

  return (
    <EditTable columns={columns} dataSource={dataSource} maxHeight={320} />
  );
};
