const ExtractPlugin = require('extract-text-webpack-plugin')
const helper = require('./helper')

module.exports = {
    entry: {
        style: helper.join('src/styles/index.styl'),
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.js', '.css', '.styl', '.png'],
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.styl$/,
                use: ExtractPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'stylus-loader',
                            options: {
                                resolveUrl: true,
                            },
                        },
                    ],
                }),
            }],
    },
}