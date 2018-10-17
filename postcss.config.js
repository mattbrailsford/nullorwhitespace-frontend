const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.js')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')(tailwindJS),
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./**/*.vue']
    })
  ]
}
