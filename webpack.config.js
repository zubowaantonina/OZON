const path = require('path');
const webpack = require('webpack');
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    // mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        // sourceMapFilename: 'js/[name].js.map',
        // chunkFilename: '[id].[chunkhash].js'

    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src/static'),
            // publicPatch: '/dist'
        },
        compress: true,
        port: 9000,
        hot: true,
        open: true
    },
    // performance: {
    //     maxAsserSize: 10000,
    // },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    type: 'css/mini-extract',
                    chunks: 'all',
                    enforce: true,
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    miniCss.loader,
                    "css-loader",
                    "sass-loader",

                ]
            }]
    },
    devtool: false,
    plugins: [
        new miniCss({
            filename: 'css/style.css',
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/static" },

            ],
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map[query]',
            exclude: ['vendor.js']
          })
    ]
};