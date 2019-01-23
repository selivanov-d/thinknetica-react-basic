const path = require('path');

const root = process.cwd();

module.exports = {
  entry: {
    bundle: './src/js/index.js',
    styles: './src/styles/index.sass',
  },

  resolve: {
    alias: {
      root: `${root}/src/js/`,
      components: `${root}/src/js/components/`,
      constants: `${root}/src/js/constants/`,
      contexts: `${root}/src/js/contexts/`,
      helpers: `${root}/src/js/helpers/`,
      pages: `${root}/src/js/pages/`,
      routes: `${root}/src/js/routes/`,
      reducers: `${root}/src/js/reducers/`,
      actions: `${root}/src/js/actions/`,
      proptypes: `${root}/src/js/proptypes/`,
      middleware: `${root}/src/js/middleware/`,
    },
  },

  output: {
    path: path.resolve(process.cwd(), 'public'),
    publicPath: '/',
    filename: 'assets/[name].[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
};
