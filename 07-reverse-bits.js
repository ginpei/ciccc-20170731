// $ node --version
// v8.0.0
// $ node 07-reverse-bits.js

/**
 * @param {number} n
 * @returns {number}
 */
function reverseBits(n) {
	const bin = n.toString(2)  // 43261596 -> "10100101000001111010011100"
	const filled = `00000000000000000000000000000000${bin}`.slice(-32)  // -> 00000010100101000001111010011100""
	const reversed = Array.from(filled).reverse().join('')  // -> "00111001011110000010100101000000"
	const result = parseInt(reversed, 2)  // -> 964176192

	return result
}

;[
	{ source: 43261596, expected: 964176192 },
	{ source: 5234, expected: 1311244288 },
	{ source: 123456789, expected: 2830359264 },
].forEach(({ source, expected }) => {
	const result = reverseBits(source)
	console.log(`${source}: [${result}]`)
	console.assert(result.toString() == expected.toString(), expected)
})
