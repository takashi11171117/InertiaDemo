const cssImport = require('postcss-import')
const cssNesting = require('postcss-nesting')
const mix = require('laravel-mix')
const path = require('path')
const tailwindcss = require('tailwindcss')

mix.js('resources/js/app.js', 'public/js')
.webpackConfig({
	output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.runtime.esm.js',
			'@': path.resolve('resources/js'),
		},
	},
})
.babelConfig({
	plugins: ['@babel/plugin-syntax-dynamic-import'],
});

mix.sass('resources/sass/app.scss', 'public/css')
.options({
	processCssUrls: false,
	postCss: [
		tailwindcss('tailwind.js')
	],
});

mix.version()
.sourceMaps();