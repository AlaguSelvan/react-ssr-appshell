'use strict'
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin

const config = {
  mode: 'development',
  entry: {
    client: './lib/src/client.js'
  },
  devtool: 'inline-cheap-module-source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [new ReactLoadablePlugin({
    filename: './lib/public/react-loadable.json'
  })]
}

module.exports = config