const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    './src/index.tsx'
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
              plugins: ['react-hot-loader/babel'],
            },
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin()
  ],
  resolve: {
    extensions: ['.tsx','.ts', '.js']
  }
}