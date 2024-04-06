const path = require('path');
require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.jsx'),
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        // Explicitly define the environment variables you need
        SERVER_IP: process.env.SERVER_IP,
        PORT: process.env.PORT,
        // Add any other environment variables you need here
      }),
      // If you need to use process.browser
      'process.browser': true
    }),
  ],
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto-browserify'),
      url: require.resolve('url/'),
      util: require.resolve('util/'),
      vm: require.resolve('vm-browserify'),
      buffer: require.resolve('buffer/'),
    },
    extensions: ['.js', '.jsx', '.css'],
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src/tests'),
    ],
  },
};
