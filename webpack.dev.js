const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/react/index.tsx',
  mode: 'development',
  target: 'electron-renderer',
  devtool: false, // using SourceMapDevToolPlugin instead
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html',
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].map',
      exclude: ['vendor.js'],
    }),
  ],
};
