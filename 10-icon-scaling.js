// $ node --version
// v8.0.0
// $ node 10-icon-scaling.js

/**
 * @param {Array} icon
 * @param {number} factor
 * @returns {number}
 */
function enlarge(icon, factor) {
	const scaledIcon = []

	for (let y = 0; y < icon.length; y++) {
		const line = icon[y]
		runFor(factor, () => {
			const scaledLine = []
			for (let x = 0; x < line.length; x++) {
				const dot = line[x]
				runFor(factor, () => scaledLine.push(dot))
			}
			scaledIcon.push(scaledLine)
		})
	}

	return scaledIcon
}

function runFor(factor, fn) {
	for (let i = 0; i < factor; i++) {
		fn(i)
	}
}

;[
	{
		source: {
			factor: 3,
			icon: [
				'*x*'.split(''),
				' xx'.split(''),
				'* *'.split(''),
			],
		},
		expected: [
			'***xxx***'.split(''),
			'***xxx***'.split(''),
			'***xxx***'.split(''),
			'   xxxxxx'.split(''),
			'   xxxxxx'.split(''),
			'   xxxxxx'.split(''),
			'***   ***'.split(''),
			'***   ***'.split(''),
			'***   ***'.split(''),
		],
	},
].forEach(({ source, expected }) => {
	const result = enlarge(source.icon, source.factor)
	const icon = source.icon.map(v => v.join('')).join('\n')
	const largeIcon = result.map(v => v.join('')).join('\n')
	console.log(`Source:\n${icon}\n\nResult\n${largeIcon}`)
	console.assert(result.toString() == expected.toString(), expected)
})
