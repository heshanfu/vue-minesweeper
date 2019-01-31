const path = require('path')
const baseConf = require('../webpack.config.base')
const defConf = require('../webpack.config')
const webpack = require('webpack')

module.exports = function (env, { mode = 'development' } = {}) {
  const production = mode === 'production'
  const configs = [
    Object.assign(baseConf('electron'), {
      mode,
      target: 'electron-main',
      entry: path.join(__dirname, production ? 'main.dev.js' : 'main.dev.js'),
      devtool: production ? false : 'inline-source-map',
      output: {
        filename: 'main.js',
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, '../www/')
      },
      node: { __dirname: !production, __filename: !production }
    }),
    Object.assign(defConf(env, { mode }), {
      mode,
      target: 'electron-renderer',
      entry: [path.join(__dirname, 'renderer.js')],
      node: { __dirname: !production, __filename: !production }
    })
  ]
  if (mode === 'production') {
    configs.forEach(c => c.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' })))
  } else {
    configs[1].entry.push('webpack-hot-middleware/client?noInfo=true&reload=true')
    configs.forEach(c => c.plugins.push(new webpack.HotModuleReplacementPlugin()))
  }
  return configs
}
