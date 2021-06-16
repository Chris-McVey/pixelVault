const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/public/dist');
const priv_src = path.join(__dirname, '/private');
const priv_dist = path.join(__dirname, '/private');
const publicConfig = {
  entry: `${SRC_DIR}/index.jsx`,
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif|mp3)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '...'],
  },
};
const privateConfig = {
  entry: `${priv_src}/index.jsx`,
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: priv_dist,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif|mp3)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '...'],
  },
};
module.exports = [publicConfig, privateConfig];
