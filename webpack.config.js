const path = require('path');

module.exports = {
    entry: {
        'main': path.resolve(__dirname, './src/js/app.js'),
        'lava' : path.resolve(__dirname, './src/js/lava.mjs')
      },
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
      }
  };
