// $ node --version
// v8.0.0
// $ node 03-square-sum.js

/**
 * @param {number} c
 * @returns {boolean}
 */
function judgeSquareSum(c) {
	const nums = []
	for (let i = 1; i < c; i++) {
		nums.push(i)
	}

	for (let i = 0; i < nums.length - 1; i++) {
		const n1 = nums[i]
		for (let j = i + 1; j < nums.length; j++) {
			const n2 = nums[j]
			if (n1 * n1 + n2 * n2 === c) {
				return true
			}
		}
	}

	return false
}

;[
	{ source: 5, expected: true },
	{ source: 3, expected: false },

	{ source: 18, expected: false },  // 4^2 ... 2
	{ source: 49, expected: false },  // 7^2 ... 0
	{ source: 50, expected: true },  // 1^2 + 7^2
	{ source: 52, expected: true },  // 4^2 + 6^2
	{ source: 53, expected: true },  // 2^2 + 7^2
	{ source: 99, expected: false },  // 9^2 + 4^2 ... 2
].forEach(({ source, expected }) => {
	const result = judgeSquareSum(source)
	console.log(`${source}: ${result}`)
	console.assert(result == expected, expected)
})
