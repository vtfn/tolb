import curry2 from '../_internal/curry2';

/**
 * The `List` type definition for this method.
 *
 * @typedef {Object} List
 * @property {number} length - The size of the list.
 */

/**
 * Applies a given function to each value in a list.
 * Returns the input list.
 *
 * Deals with objects as lists of key-value pairs.
 *
 * At each iteration the current index (or key) is passed as the second argument
 * to the supplied function.
 *
 * @function
 * @param {function} fn - The iteratee function
 * @param {(Object|List)} list - The list to iterate over
 * @return {(Object|List)} The `list` itself
 */
export default curry2((fn, list) => {
  const length = list.length;

  if (typeof length === 'number') {
    for (let i = 0; i < length; i++)
      fn(list[i], i);
  } else {
    for (const key in list)
      fn(list[key], key);
  }

  return list;
});
