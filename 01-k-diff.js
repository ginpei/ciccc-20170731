// $ node --version
// v8.0.0
// $ node 01-k-diff.js

/**
 * @param {Array} nums
 * @param {number} k
 * @returns {number}
 */
function findPairs(nums, k) {
	const matched = []
	for (let i = 0; i < nums.length - 1; i++) {
		const n1 = nums[i]
		for (let j = i + 1; j < nums.length; j++) {
			const n2 = nums[j]

			const m1 = Math.min(n1, n2)
			const m2 = Math.max(n1, n2)
			if (m2 - m1 === k) {
				matched.push([m1, m2])
			}
		}
	}

	const sResults = matched.map(v=>`${v[0]}-${v[1]}`)  // [1, 2] => "1-2"
	return unique(sResults).length
}

function unique(array) {
	const keys = new Set()
	return array.filter(v => !keys.has(v) && keys.add(v))
}

;[
	{ nums: [3, 1, 4, 1, 5], k: 2, expected: 2 },
	{ nums: [1, 2, 3, 4, 5], k: 1, expected: 4 },
	{ nums: [1, 3, 1, 5, 4], k: 0, expected: 1 },
].forEach(({ nums, k, expected }) => {
	const result = findPairs(nums, k)
	console.log(`[${nums}] k=${k} result=${result}`)
	console.assert(result == expected, expected)
})
