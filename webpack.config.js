var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
var path = require('path');
const webpack = require('webpack');
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  entry: './App/Client/app.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/compiled/transpiled'),
    publicPath: 'compiled/transpiled',
    filename: '[name].js'
  },
  plugins: [
    new DotenvPlugin({
      sample: './.env.example',
      path: './.env'
    }),
    new webpack.EnvironmentPlugin([
      'PUBNUB_PUBLISH_KEY',
      'PUBNUB_SUBSCRIBE_KEY'
    ])
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  // plugins: [
  //   new webpackUglifyJsPlugin({
  //     cacheFolder: path.resolve(__dirname, 'public/cached_uglify/'),
  //     debug: true,
  //     minimize: true,
  //     sourceMap: false,
  //     output: {
  //       comments: false
  //     },
  //     compressor: {
  //       warnings: false
  //     }
  //   })
  // ]
};