var path = require('path');
const webpack = require('webpack');
const DotenvPlugin = require('webpack-dotenv-plugin');

// Hack for Ubuntu on Windows: interface enumeration fails with EINVAL, so return empty.
try {
  require('os').networkInterfaces()
} catch (e) {
  require('os').networkInterfaces = () => ({})
}

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
    path: path.join(__dirname, '/dist/build'),
    publicPath: '',
  },
  plugins: [
    // server-side injection
    new DotenvPlugin({
      sample: path.join(__dirname, '/.env.example'),
      path: path.join(__dirname, '/.env')
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