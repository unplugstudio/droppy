/* global __dirname, require, module*/

const path = require('path');
const pkg = require('./package.json');

module.exports = (env, { mode }) => ({
  entry: {
    [pkg.name]: './src/index.js'
  },
  devtool:  mode === 'production' ? 'source-map' : 'inline-source-map',
  output: {
    path: __dirname + '/lib',
    filename: mode === 'production' ? '[name].min.js' : '[name].js',
    library: pkg.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  }
})
