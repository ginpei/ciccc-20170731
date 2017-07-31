// $ node --version
// v8.0.0
// $ node 04-max-product.js

/**
 * @param {Array} nums
 * @returns {number}
 */
function maximumProducs(nums) {
	let max = -Infinity
	for (let i = 0; i < nums.length - 2; i++) {
		const n1 = nums[i]
		for (let j = i + 1; j < nums.length - 1; j++) {
			const n2 = nums[j]
			for (let k = j + 1; k < nums.length; k++) {
				const n3 = nums[k]
				const result = n1 * n2 * n3
				if (result > max) {
					max = result
				}
			}
		}
	}
	return max
}

;[
	{ source: [1, 2, 3], expected: 6 },
	{ source: [1, 2, 3, 4], expected: 24 },
	{ source: [-10, -1, 2, 3, 4], expected: 40 },
	{ source: [-4, -3, -2, -1, 1, 2, 3], expected: 36 },
	{ source: [-4, -3, -2, -1, 0], expected: 0 },
].forEach(({ source, expected }) => {
	const result = maximumProducs(source)
	console.log(`${source}: ${result}`)
	console.assert(result == expected, expected)
})
