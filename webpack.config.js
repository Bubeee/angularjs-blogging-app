const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: 'index.html',
  inject: true,
  minify: false // TODO: add prod minification
});

module.exports = {
  entry: ['angular', resolve('src', 'app.js')],
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
    // publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      { test: /\.html$/, loader: 'html-loader' }
      // ,
      // {
      //   test: /\.js$/,
      //   loader: 'babel',
      //   exclude: /node_modules/
      // }
    ]
  },
  plugins: [htmlWebpackPlugin],
  stats: {
    colors: true
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: 'source-map'
};
