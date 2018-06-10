var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/WebglToolkit.js',
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
        filename: 'WebglToolkit.min.js'
    },
    stats: {
        colors: true
    },
};
