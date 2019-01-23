const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./webpack.base.config');

module.exports = merge(base, {
  mode: 'development',

  devServer: {
    contentBase: path.resolve(process.cwd(), 'public'),
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(sass|css)$/,
        use: [
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },

  plugins: [
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
      openAnalyzer: false,
    }),
    new webpack.DefinePlugin({
      NODE_ENV: 'development',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
});
