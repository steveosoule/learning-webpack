const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'none', // production, development, none
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};