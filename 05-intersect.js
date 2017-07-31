// $ node --version
// v8.0.0
// $ node 05-intersect.js

/**
 * @param {Array} nums1
 * @param {Array} nums2
 * @returns {Array}
 */
function intersect(orgNums1, orgNums2) {
	const nums1 = orgNums1.concat()
	const nums2 = orgNums2.concat()
	const matched = []
	
	for (let j = 0; j < nums2.length; j++) {
		const n2 = nums2[j]
		for (let i = 0; i < nums1.length; i++) {
			const n1 = nums1[i]

			if (n1 === n2) {
				matched.push(n1)
				nums1[i] = NaN
				break
			}
		}
	}

	return matched
}

;[
	{ source: { nums1: [1, 2, 2, 1], nums2: [2, 2] }, expected: [2, 2] },
	{ source: { nums1: [1, 2], nums2: [1, 1] }, expected: [1] },
	{ source: { nums1: [1, 2, 1], nums2: [1, 1] }, expected: [1, 1] },
	{ source: { nums1: [1, 2, 1], nums2: [1, 1, 2] }, expected: [1, 1, 2] },
].forEach(({ source, expected }) => {
	const { nums1, nums2 } = source
	const result = intersect(nums1, nums2)
	console.log(`[${nums1}], [${nums2}]: ${result}`)
	console.assert(result.toString() == expected.toString(), expected)
})
