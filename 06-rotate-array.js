// $ node --version
// v8.0.0
// $ node 06-rotate-array.js

/**
 * @param {Array} nums
 * @param {number} k
 */
function rotate(nums, k) {
	// pattern 1
	nums.splice(0, k + 1).forEach(v => nums.push(v))


	/*
	// pattern 2
	const result = nums.slice(k + 1).concat(nums.slice(0, k + 1))
	nums.splice(0)  // remove all
	result.forEach(v => nums.push(v))
	*/

	/*
	// pattern 3
	const options = nums.concat()  // clone
	nums.splice(0)  // remove all
	for (let i = 0; i < options.length; i++) {
		const index = (i + k + 1) % options.length
		nums.push(options[index])
	}
	*/
}

;[
	{ source: { n: 7, k: 3 }, expected: [5, 6, 7, 1, 2, 3, 4] },
].forEach(({ source, expected }) => {
	const { n, k } = source
	const nums = []
	for (let i = 0; i < n; i++) {
		nums.push(i + 1)  // 1, 2, 3, ...
	}

	rotate(nums, k)
	const result = nums
	console.log(`n=${n}, k=${k}: [${result}]`)
	console.assert(result.toString() == expected.toString(), expected)
})
