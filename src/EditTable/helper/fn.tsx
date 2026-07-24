export function mustArray(
  list: Array<any> | undefined | null | string | object,
) {
  if (Array.isArray(list)) {
    return list;
  }
  return [];
}

export const isFunction = (x: any): boolean => typeof x === 'function';
