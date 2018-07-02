var path = require('path');
var webpack = require('webpack');

module.exports = {
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
        filename: `NEWT-${process.env.npm_package_version}.min.js`
    },
    stats: {
        colors: true
    },
};
