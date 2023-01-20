// sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Examples:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false
// Constraints

// Time Complexity - O(N + M)

// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
	// get frequencies of num in each passed integer
	const int1Freq = frequencyCounter(int1);
	const int2Freq = frequencyCounter(int2);

	// if integers do not have same amount of keys (individual numbers), return false
	if (int1Freq.size !== int1Freq.size) return false;
	// compare frequencies of int1 and int2
	// loop over int1Freq
	for (let num of int1Freq.keys()) {
		// if int2 frequency doesnt have num as a key, return false
		if (!int2Freq.has(num)) return false;
		// if int2 frequence has num as a key but num the same value aka frequency, return false
		if (int1Freq.get(num) !== int2Freq.get(num)) return false;
	}
	return true;
}

function frequencyCounter(int) {
	let frequencies = new Map();
	// loop over each num in int. convert int to string so you can iterate
	for (let num of int.toString()) {
		// convert num from string back to integer
		num = parseInt(num);
		// get value of num as they key if key already exists. if num doesn't exist yet, set value to 0
		let val = frequencies.get(num) || 0;
		// set key as num.. increase value by 1
		frequencies.set(num, val + 1);
	}
	return frequencies;
}

module.exports = sameFrequency;
