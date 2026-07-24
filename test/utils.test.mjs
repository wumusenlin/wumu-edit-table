import assert from 'node:assert/strict';
import test from 'node:test';
import { loadUtils } from './loadUtils.mjs';

const utils = await loadUtils();

test('getAutoWidthCol assigns remaining width to the last non-right column', () => {
  const result = utils.getAutoWidthCol({
    clientWidth: 400,
    columns: [
      { dataIndex: 'name', title: '名称', width: 100, fixed: 'left' },
      { dataIndex: 'price', title: '价格' },
      { dataIndex: 'actions', title: '操作', width: 60, fixed: 'right' },
    ],
  });

  assert.deepEqual(result, { autoWidthColIndex: 1, autoColWidth: 240 });
});

test('getAutoWidthCol keeps the automatic column at the minimum width', () => {
  const result = utils.getAutoWidthCol({
    clientWidth: 100,
    columns: [
      { dataIndex: 'name', title: '名称', width: 100 },
      { dataIndex: 'actions', title: '操作', width: 100, fixed: 'right' },
    ],
  });

  assert.deepEqual(result, { autoWidthColIndex: 0, autoColWidth: 120 });
});

test('genFixedInfo calculates multiple fixed-column offsets', () => {
  const result = utils.genFixedInfo([
    { dataIndex: 'name', title: '名称', width: 80, fixed: 'left' },
    { dataIndex: 'type', title: '类型', fixed: 'left' },
    { dataIndex: 'price', title: '价格' },
    { dataIndex: 'edit', title: '编辑', width: 70, fixed: 'right' },
    { dataIndex: 'actions', title: '操作', width: 90, fixed: 'right' },
  ]);

  assert.deepEqual(result, {
    left: { 0: 0, 1: 80 },
    right: { 3: 90, 4: 0 },
  });
});

test('getRecordValue returns nested values and null after a missing branch', () => {
  const record = { profile: { name: '吴木', enabled: true } };

  assert.equal(utils.getRecordValue(record, ['profile', 'name']), '吴木');
  assert.equal(utils.getRecordValue(record, ['profile', 'enabled', 'value']), null);
});

test('setRowKey returns new records without changing the source records', () => {
  const source = [{ name: '吴木' }];
  const result = utils.setRowKey(source);

  assert.deepEqual(result, [{ name: '吴木', _rowIndex: 0, rowIndex: 0 }]);
  assert.deepEqual(source, [{ name: '吴木' }]);
  assert.notEqual(result[0], source[0]);
});

test('genClassName marks the outer left fixed column shadow', () => {
  const className = utils.genClassName({
    className: 'table-td',
    columnIndex: 2,
    fixed: 'left',
    fixedInfo: { left: { 0: 0, 2: 80 }, right: {} },
  });

  assert.equal(className, 'table-td fixed-left-shadow table-fixed-td');
});

test('genStyle applies right fixed offsets without replacing existing styles', () => {
  const style = utils.genStyle({
    style: { color: 'red' },
    align: 'right',
    fixed: 'right',
    fixedInfo: { left: {}, right: { 3: 20 } },
    columnIndex: 3,
    defaultRightWidth: 10,
  });

  assert.deepEqual(style, {
    color: 'red',
    textAlign: 'right',
    position: 'sticky',
    zIndex: 1,
    right: 30,
  });
});

test('color helpers preserve configured and fallback primary colors', () => {
  assert.equal(utils.colorLuminance('#69c', 0.2), '#7ab8f5');
  assert.equal(utils.genPrimaryColor(null), 'var(--primary-color)');
  assert.equal(utils.genPrimaryColor({ color: { primaryColor: '#69c' } }), '#69c');
});
