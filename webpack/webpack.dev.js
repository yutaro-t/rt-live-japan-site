const merge = require('webpack-merge');
const base = require('./webpack.common');
const babelConfig = require('../babel.config');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig,
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          },
          {
            loader: "eslint-loader",
            options: {
              fix: true,
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  }
})