var path = require('path'); 
const webpack = require('webpack');

// Hack for Ubuntu on Windows: interface enumeration fails with EINVAL, so return empty.
try {
  require('os').networkInterfaces()
} catch (e) {
  require('os').networkInterfaces = () => ({})
}
////////////////////////////////////////////////////////////////////////////////////////

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
    publicPath: ''
  },
  plugins: [
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