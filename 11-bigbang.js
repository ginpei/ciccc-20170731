// $ node --version
// v8.0.0
// $ node 11-bigbang.js

/**
 * @param {string} source
 * @param {number} s
 * @param {number} k
 * @returns {string}
 */
function bigbang(source, s, k) {
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
	const numLetters = letters.length
	return Array.from(source)
		.map((letter, index) => {
			return letters[(numLetters * 1000 + letters.indexOf(letter) - s * (index + 1) - k) % numLetters]
		})
		.join('')
}

;[
	{ source: { text: 'FXAB', k: 3 }, expected: 'ZOOM' },
	{ source: { text: 'JTUSUKG', k: 5 }, expected: 'BIGBANG' },
].forEach(({ source, expected }) => {
	const result = bigbang(source.text, 3, source.k)
	console.log(`${source.text} (${source.k}): ${result}`)
	console.assert(result.toString() == expected.toString(), expected)
})
