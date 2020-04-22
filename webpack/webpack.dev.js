const merge = require('webpack-merge');
const base = require('./webpack.common');
const babelConfig = require('../babel.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          'css-loader'
        ],
      },
      {
        test: /\.module\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          { loader: "css-modules-typescript-loader"},
          'css-loader?modules',
          { loader: "sass-loader"}
        ],
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