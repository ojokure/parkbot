export function Stringify(obj) {
  return JSON.stringify(obj);
}
export function JSONRemoveUndefined(obj) {
  return JSON.parse(JSON.stringify(obj));
}
