const purgecss = require('@fullhuman/postcss-purgecss')
const fs = require('fs')
const postcss = require('postcss')

const purgeCSSResults = async () => {
  const css = fs.readFileSync('./css/font-awesome.css', 'utf8')

  const result = await postcss([
    purgecss({
      content: ['./**/*.html', './**/*.js'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]).process(css, { from: './css/font-awesome.css', to: './dist/font-awesome.css' })


  fs.writeFileSync('./dist/font-awesome.css', result.css)
  if (result.map) fs.writeFileSync('./dist/font-awesome.min.css', result.map.toString())
}

purgeCSSResults().then(r => {
  console.log(r)
})