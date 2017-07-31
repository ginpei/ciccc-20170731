// $ node --version
// v8.0.0
// $ node 09-1987-to-2013.js

/**
 * @param {number} since
 * @returns {number}
 */
function getNextDistinctDigits(since) {
	let year
	for (year = since + 1; !isDistinct(year.toString()); year++) {
		// nothing to do
	}
	return year
}

function isDistinct(s) {
	const existingLetters = new Set()
	return Array.from(s).every(v => !existingLetters.has(v) && existingLetters.add(v))
}

;[
	{ source: 1987, expected: 2013 },
	{ source: 999, expected: 1023 },
	{ source: 2014, expected: 2015 },
].forEach(({ source, expected }) => {
	const result = getNextDistinctDigits(source)
	console.log(`${source}: ${result}`)
	console.assert(result.toString() == expected.toString(), expected)
})
