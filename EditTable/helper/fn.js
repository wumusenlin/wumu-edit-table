export function mustArray(list) {
  if (Array.isArray(list)) {
    return list;
  }
  return [];
}
export function isExist(val) {
  return val !== null && val !== undefined && val !== '';
}