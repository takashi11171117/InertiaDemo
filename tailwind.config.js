let colors = {
	'transparent': 'transparent',

	'black': '#22292f',
	'grey-darkest': '#3d4852',
	'grey-darker': '#606f7b',
	'grey-dark': '#8795a1',
	'grey': '#b8c2cc',
	'grey-light': '#dae1e7',
	'grey-lighter': '#f1f5f8',
	'grey-lightest': '#f8fafc',
	'white': '#ffffff',

	'red-darkest': '#3b0d0c',
	'red-darker': '#621b18',
	'red-dark': '#cc1f1a',
	'red': '#e3342f',
	'red-light': '#ef5753',
	'red-lighter': '#f9acaa',
	'red-lightest': '#fcebea',

	'indigo-darkest': '#191e38',
	'indigo-darker': '#2f365f',
	'indigo-dark': '#5661b3',
	'indigo': '#6574cd',
	'indigo-light': '#7886d7',
	'indigo-lighter': '#b2b7ff',
	'indigo-lightest': '#e6e8ff',
}

module.exports = {
  theme: {
    extend: {},
		colors: colors,
		backgroundColors: colors,
		fill: colors
  },
	variants: ['responsive', 'focus-within','hover', 'focus', 'active', 'visited', 'disabled']
}
