const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',

  entry: {
    bundle: './src/js/index.js',
    styles: './src/styles/index.sass',
  },

  devServer: {
    historyApiFallback: true,
  },

  resolve: {
    alias: {
      root: `${process.cwd()}/src/js/`,
      components: `${process.cwd()}/src/js/components/`,
      constants: `${process.cwd()}/src/js/constants/`,
      contexts: `${process.cwd()}/src/js/contexts/`,
      helpers: `${process.cwd()}/src/js/helpers/`,
      pages: `${process.cwd()}/src/js/pages/`,
      routes: `${process.cwd()}/src/js/routes/`,
      reducers: `${process.cwd()}/src/js/reducers/`,
      actions: `${process.cwd()}/src/js/actions/`,
      proptypes: `${process.cwd()}/src/js/proptypes/`,
      middleware: `${process.cwd()}/src/js/middleware/`,
    },
  },

  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'public/assets'),
    publicPath: '/assets/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
