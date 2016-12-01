/**
 * Returns an array with all values of a given object.
 *
 * @function
 * @param {Object} obj - The source object
 * @return {Array} The list of values in `obj`
 * @example
 *
 *   values({ foo: 1, bar: 2 }) //=> [1, 2]
 */
export default function values(obj) {
  const result = [];
  for (const k in obj)
    result[result.length] = obj[k];
  return result;
}
