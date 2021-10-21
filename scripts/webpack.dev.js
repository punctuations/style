const ExtractPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
    devtool: 'cheap-module-eval-source-map',

    mode: 'development',

    output: {
        publicPath: '/',
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
    },

    plugins: [
        new ExtractPlugin('[name].css'),
    ],

})