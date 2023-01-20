/*countPairs
Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.

Examples:

countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
countPairs([4,6,2,7], 10) // 1 (4,6)
countPairs([1,2,3,4,5], 10) // 0
countPairs([1,2,3,4,5], -3) // 0
countPairs([0,-4],-4) // 1
countPairs([1,2,3,0,-1,-2],0) // 2
Constraints

Time Complexity - O(N * log(N))

or

Time Complexity - O(N) */

// add whatever parameters you deem necessary
function countPairs(arr, targetSum, i = 0, pairs = []) {
	// O(N*log(N))
	// check to see if the value at the beginning of the array has a valid match anywhere else in the array
	// set an empty array to push valid pairs into
	let j = arr.length - 1;
	// return number of value pairs when there are no more pairs in the array
	if (arr.length < 2) return pairs.length;

	while (i < j) {
		// if there is a match, push pair to pairs and remove pair from arr. recursively call countPairs to check for any more valid pairs.
		if (arr[i] + arr[j] === targetSum) {
			let pair = [
				arr[i],
				arr[j]
			];
			pairs.push(pair);
			arr = arr.filter((val) => pair.indexOf(val) === -1);
			return countPairs(arr, targetSum, i, pairs);
		}
		j--;
	}
	// if no match, remove first value- arr.shift(). check to see if value at the beginning of the new array has any valid matches.
	arr.shift();
	return countPairs(arr, targetSum, i, pairs);
}

/* SPRINGBOARD
// // O(n) / O(n)
// function countPairs(arr, num) {
//   let s = new Set(arr);
//   let count = 0;
//   for (let val of arr) {
//     s.delete(val);
//     if (s.has(num - val)) {
//       count++;
//     }
//   }
//   return count;
// }

// O(n log n) / O(1)

function countPairs(arr, num) {
    arr.sort((a, b) => a - b);
    let count = 0;
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let sum = arr[start] + arr[end];
        if (sum === num) {
            count++;
            start++;
            end--;
        } else if (sum < num) {
            start++;
        } else {
            end--;
        }
    }
    return count;
}
*/

module.exports = countPairs;
