// averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Constraints:

// Time Complexity: O(N)

// Examples:

// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false

// add whatever parameters you deem necessary
function averagePair(arr, target) {
	// Pointers
	// set left pointer at 0
	let left = 0;
	// set right pointer at arr-1
	let right = arr.length - 1;
	// loop until pointers cross
	while (left < right) {
		let avg = (arr[left] + arr[right]) / 2;
		// if average of arr[left]+arr[right]=target, return true
		if (avg === target) return true;
		// if average of arr[left] + arr[right] > target,  move right pointer to the left
		if (avg > target) right--;
		else
			// else move left pointer to the right
			left++;
	}
	return false;
}

module.exports = averagePair;
