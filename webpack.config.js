var path = require('path');
var webpack = require('webpack');

module.exports = [
  {
      entry: './src/NEWT.js',
      mode: 'production',
      module: {
          rules : [
              {
                  test: /\.js$/,
                  loader: 'babel-loader',
                  query: {
                      presets: ['es2015']
                  }
              }
          ]
      },
      output: {
          path: path.resolve(__dirname, 'dist'),
          filename: `NEWT-${process.env.npm_package_version}.min.js`,
          library: 'NEWT',
          libraryTarget: 'umd',
          umdNamedDefine: true
      },
      stats: {
          colors: true
      },
      target: 'web',
  },
  {
      entry: './src/NEWT.js',
      mode: 'production',
      module: {
          rules : [
              {
                  test: /\.js$/,
                  loader: 'babel-loader',
                  query: {
                      presets: ['es2015']
                  }
              }
          ]
      },
      output: {
          path: path.resolve(__dirname, 'dist'),
          filename: `NEWT.node.js`,
          library: 'NEWT',
          libraryTarget: 'umd',
          umdNamedDefine: true
      },
      stats: {
          colors: true
      },
      target: 'node',
  }
];
