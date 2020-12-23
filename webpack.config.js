const path = require('path');

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
};

module.exports = config;