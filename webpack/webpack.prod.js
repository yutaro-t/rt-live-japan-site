const merge = require('webpack-merge');
const base = require('./webpack.common');
const babelConfig = require('../babel.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [new CompressionPlugin()],
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
})