export function mustArray(
  list: Array<any> | undefined | null | string | object,
) {
  if (Array.isArray(list)) {
    return list;
  }
  return [];
}

export function isExist(val: any) {
  return val !== null && val !== undefined && val !== '';
}

export function notEmptyArray(list: any) {
  return Array.isArray(list) && list.length > 0;
}

export const isFunction = (x: any): boolean => typeof x === 'function';
