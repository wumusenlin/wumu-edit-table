import assert from 'node:assert/strict';
import test from 'node:test';
import { loadUtils } from './loadUtils.mjs';

test('genFixedInfo preserves a frozen columns array', async () => {
  const { genFixedInfo } = await loadUtils();
  const columns = Object.freeze([
    { dataIndex: 'name', fixed: 'left', width: 80 },
    { dataIndex: 'price', width: 100 },
    { dataIndex: 'actions', fixed: 'right', width: 60 },
  ]);

  assert.deepEqual(genFixedInfo(columns), { left: { 0: 0 }, right: { 2: 0 } });
});
