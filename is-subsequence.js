// isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Constraints:

// Time Complexity - O(N + M)

// add whatever parameters you deem necessary

// recursion
// The idea is simple, traverse both strings from one side to another side (say from rightmost character to leftmost). If we find a matching character, move ahead in both strings. Otherwise, move ahead only in str2.
function isSubsequence(str1, str2, m = str1.length, n = str2.length) {
	if (m === 0) return true;
	if (n === 0) return false;
	// If last characters of two strings
	// are matching
	if (str1[m - 1] === str2[n - 1]) return isSubsequence(str1, str2, m - 1, n - 1);
	// If last characters are not matching
	return isSubsequence(str1, str2, m, n - 1);
}

// iterative
function isSubsequenceIterative(str1, str2) {
	/*Returns true if s1 is subsequence of s2*/

	let n = str1.length,
		m = str2.length;
	// Initialize the pointers i and j with zero, where i is the pointer to str1 and j is the pointer to str2.

	let i = 0,
		j = 0;
	while (i < n && j < m) {
		// If str1[i] = str2[j] then increment both i and j by 1.
		// Otherwise, increment only j by 1.
		if (str1[i] == str2[j]) i++;
		j++;
	}
	/*If i reaches end of s1,that mean we found all
    characters of s1 in s2,
    so s1 is subsequence of s2, else not*/
	return i == n;
}

// https://www.geeksforgeeks.org/given-two-strings-find-first-string-subsequence-second/
