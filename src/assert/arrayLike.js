import array from './array';
import string from './string';

/**
 * Checks if a given object is (or at least seems to be) an array-line object.
 *
 * An array-like object should have a finite numeric `length` property greater
 * than -1 and the value at `length` - 1 should be the last value in the list.
 * Functions, strings and arrays are not array-like objects.
 *
 * @function
 * @param {*} subject - The object to test
 * @return {boolean} `true` if `subject` seems to be an array-like object, `false` otherwise
 * @example
 *
 *   function foo() { return arguments }
 *
 *   arrayLike(foo) //=> false
 *   arrayLike(foo()) //=> true
 */
export default function arrayLike(subject) {
  if (array(subject) || string(subject) || typeof subject === 'function')
    return false;

  const length = subject.length;

  if (typeof length !== 'number' ||
    length < 0 || length === Infinity || isNaN(length)
  ) return false;

  return subject[length] === undefined;
}