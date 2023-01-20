// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Constraints:

// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

// Examples:

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

// add whatever parameters you deem necessary
function constructNote(msg, ltrs) {
	// return true for empty message
	if (!msg.length) return true;
	// returns false if there are no letters
	if (!ltrs.length) return false;
	// get frequency of letters in msg. return Map {letter:count}
	const msgFreq = frequencyCount(msg);

	// get frequency of letters in ltrs. return Map {letter:count}
	const ltrsFreq = frequencyCount(ltrs);
	// loop over keys in msg.
	for (let letter of msgFreq.keys()) {
		// if key is not found in ltrs. return false.

		if (!ltrsFreq.has(letter)) return false;
		// if key is found in letter but count is not equal, return false.
		if (msgFreq.get(letter) !== ltrsFreq.get(letter)) return false;

		return true;
	}
}

function frequencyCount(str) {
	// set a new Map
	const frequencies = new Map();
	// loop over each letter of string.
	for (let char of str) {
		// get the current value of the key in frequencies. if key does not exist, set value to 0.
		let val = frequencies.get(char) || 0;
		// set letter to be the key. increase the value by 1.
		frequencies.set(char, val + 1);
		// if letter is not present, set value to 1.
		// if letter is present, increase value by 1.
	}
	return frequencies;
}

module.exports = constructNote;
