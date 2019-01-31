const webpack = require('webpack')
const config = require('./webpack.config')(null, { mode: 'production' })
process.env.NODE_ENV = 'production'

webpack(config, (err, stats) => {
  if (err) return console.error(err.stack || err)
  if (stats.hasErrors()) console.error(stats.toString({ chunks: false, colors: true }))
  else console.log(stats.toString({ chunks: false, colors: true }))
})
