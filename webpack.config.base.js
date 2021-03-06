const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = function (name) {
  return {
    mode: 'development',
    name,
    module: {
      rules: [
        { test: /\.vue$/, loader: 'vue-loader' },
        { test: /\.css$/, loader: 'vue-style-loader!css-loader' },
        { test: /\.(png|woff|woff2|eot|ttf|svg|jpg|otf|gif)$/, loader: 'file-loader?outputPath=files/' }
      ]
    },
    plugins: [new VueLoaderPlugin(), new webpack.ProvidePlugin({ _: 'lodash', Vue: 'vue' })],
    resolve: { alias: { '~': path.resolve(__dirname, `${name}`) } }
  }
}
