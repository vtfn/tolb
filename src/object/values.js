/**
 * Returns an array with the own values of a given object.
 *
 * @function
 * @param {Object} obj - The source object
 * @return {Array} The list of values in `obj`
 * @example
 *
 *   values({ foo: 1, bar: 2 }) //=> [1, 2]
 */
export default function values(obj) {
  const keys = Object.keys(obj);
  const length = keys.length;
  const result = new Array(length);
  for (let i = 0; i < length; i++)
    result[i] = obj[keys[i]];
  return result;
}
