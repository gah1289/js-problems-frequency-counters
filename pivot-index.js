// Write a function called pivotIndex which accepts an array of integers, and returns the pivot index where the sum of the items to the left equal to the sum of the items to the right. If there are more than one valid pivot index, return the smallest value.

// Examples:

// pivotIndex([1,2,1,6,3,1]) // 3
// pivotIndex([5,2,7]) // -1  no valid pivot index
// pivotIndex([-1,3,-3,2]) // 1 valid pivot at 2: -1 + 3 = 2 however there is a smaller valid pivot at 1: -1 = -3 + 2
// Constraints

// Time Complexity: O(N)

// add whatever parameters you deem necessary
function pivotIndex(arr, mid = Math.floor((0 + arr.length - 1) / 2)) {
	// set initial mid point to middle of array
	// get the sum of everything to the left of mid pount. Don't include value at the midpoint.
	let leftSum = getSum(0, mid - 1, arr);
	// get the sum of everything to the right of the mid point. Don't include value at the midpoint.
	let rightSum = getSum(mid + 1, arr.length - 1, arr);

	// if sum arr[0]-arr[mid] == sum arr[mid]-arr[arr.length-1] return pivot index (mid)
	if (leftSum === rightSum) return mid;

	// if left sum < right sum move mid to the right
	if (leftSum < rightSum) return pivotIndex(arr, mid + 1);

	// if right sum < left sum move mid to the left

	if (rightSum > leftSum) return pivotIndex(arr, mid - 1);
	// if no valid pivot by the time the pointer reaches either end of the array, return -1
	if (mid === 0 || mid === arr.length - 1) return -1;
}

function getSum(firstIdx, lastIdx, arr) {
	// O(n)

	arr = arr.slice(firstIdx, lastIdx + 1);

	return arr.reduce((a, b) => a + b, 0);
}

module.exports = pivotIndex;
