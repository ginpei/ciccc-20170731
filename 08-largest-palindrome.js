// $ node --version
// v8.0.0
// $ node 08-largest-palindrome.js

/**
 * @param {number} n
 * @returns {number}
 */
function largestPalindrome(n) {
	const start = Math.pow(10, n - 1)
	const end = Math.pow(10, n) - 1

	let max = -Infinity
	let maxNums

	// ewww (but work)
	for (let i = end; i >= start; i--) {
		for (let j = i; j >= start; j--) {
			const production = i * j
			if (isPalindrome(production.toString())) {
				if (production > max) {
					max = production
					maxNums = [i, j]
				}
			}
		}
	}

	console.log(maxNums, max)
	return max % 1337
}

/**
 * @param {string} s
 * @returns {boolean}
 */
function isPalindrome(s) {
	const letters = Array.from(s)
	return letters
		.slice(Math.ceil(letters.length / 2))
		.reverse()
		.every((v, i) => v === letters[i])
}

// // tests of isPalindrome()
// ;[
// 	{ source: 'a', expected: true },
// 	{ source: 'aba', expected: true },
// 	{ source: 'ab', expected: false },
// 	{ source: 'abba', expected: true },
// 	{ source: 'abcdefedcba', expected: true },
// 	{ source: 'abcdeffedcba', expected: true },
// 	{ source: 'abcdefxedcba', expected: false },
// ].forEach(({ source, expected }) => {
// 	const result = isPalindrome(source)
// 	console.log(`${source}: ${result ? 'is' : 'isn\'t'} palindrome`)
// 	console.assert(result.toString() == expected.toString(), expected)
// })

;[
	{ source: 2, expected: 987 },  // 99 * 91 = 9009
	{ source: 3, expected: 123 },  // 993 * 913 = 906609
	{ source: 4, expected: 597 },  // 9999 * 9901 = 99000099
	{ source: 5, expected: 677 },  // 
].forEach(({ source, expected }) => {
	const result = largestPalindrome(source)
	console.log(`${source}: ${result}, ${expected}`)
	console.assert(result.toString() == expected.toString(), expected)
})
