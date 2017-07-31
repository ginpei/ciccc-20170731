// $ node --version
// v8.0.0
// $ node 02-reverse-words-in-a-string.js

/**
 * @param {string} s
 * @returns {string}
 */
function reverseWords(s) {
	return s.split(' ').map(v=>Array.from(v).reverse().join('')).join(' ')
}

;[
	{ source: 'Let\'s take LeetCode contest', expected: 's\'teL ekat edoCteeL tsetnoc' },
].forEach(({ source, expected }) => {
	const result = reverseWords(source)
	console.log(`   ${source}\n-> ${result}`)
	console.assert(result == expected, expected)
})
