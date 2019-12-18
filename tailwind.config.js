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

	'green-darkest': '#0f2f21',
	'green-darker': '#1a4731',
	'green-dark': '#1f9d55',
	'green': '#38c172',
	'green-light': '#51d88a',
	'green-lighter': '#a2f5bf',
	'green-lightest': '#e3fcec',

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
