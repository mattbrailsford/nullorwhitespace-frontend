const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
	tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'Null or Whitespace',
  plugins: [],
  css: {
    loaderOptions: {
        postcss: {
            plugins: postcssPlugins,
        },
    },
},
}
