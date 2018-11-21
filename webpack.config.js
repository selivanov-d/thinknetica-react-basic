const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: [
    './src/js/index.js',
    './src/styles/index.sass',
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      js_root: path.resolve(__dirname, 'src/js'),
    },
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'node_modules')],
            },
          },
        ],
      },
    ],
  },
};
