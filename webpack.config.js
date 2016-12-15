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
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
    // publicPath: '/dist/',
  },
  plugins: [
    // server-side injection
    new DotenvPlugin({
      sample: './.env.example',
      path: './.env'
    }),
    // client-side injection
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