// twoArrayObject
// Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.

// Examples:

// twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
// twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
// twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}

// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
	// set empty object
	let obj = {};
	// If there not enough keys, just ignore the rest of values.
	// loop until you reach the end of the keys
	for (let i = 0; i < keys.length; i++) {
		// set object key[i]:val[i]
		obj[keys[i]] = vals[i];
		// If there are not enough values, the rest of keys should have a value of null.
		if (i > vals.length - 1) {
			obj[keys[i]] = null;
		}
	}
	return obj;
}

/*SPRINGBOARD SOLUTION

 * Convert the keys array into an object using Array.prototype.reduce.
 *  In the reduce callback function, set the current value as a key in
 *  the accumulator object, with the value set to whatever element is
 *  at the current index in the values array.
 *
 *  MDN reduce -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

function twoArrayObject(keys, values) {
    return keys.reduce((obj, cur, idx) => {
      obj[cur] = idx < values.length ? values[idx] : null;
      return obj;
    }, {});
  }
  
   */

module.exports = twoArrayObject;
