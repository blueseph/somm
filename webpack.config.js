const path = require('path');
const restSpread = require('babel-plugin-transform-object-rest-spread');

module.exports = {
  entry: './src/index',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mise-router.js',
    library: 'miseRouter',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [restSpread],
          },
        },
      },
    ],
  },
};
