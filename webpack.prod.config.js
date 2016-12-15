var path = require('path'); 
const webpack = require('webpack');

module.exports = {
  context: __dirname,
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
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: '/dist/'
  },
  plugins: [
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
  }
};