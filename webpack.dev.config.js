
//Webpack development server configuration

'use strict';

var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = 
{
    mode: 'development',
    entry: 
    [
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: 
    {
        filename: 'main.js',
        publicPath: '/assets/',
        path: path.resolve(__dirname, 'assets'),
    },
    cache: true,
    devtool: false,
    optimization: 
    {
        minimize: false,
    },
    stats: 'minimal',
    plugins:
    [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new HtmlWebpackPlugin(),
    ],
    module:
    {
        rules: 
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 
                [
                    { loader: 'react-hot-loader/webpack' },
                    { loader: 'babel-loader' }
                ],
            },
            {
                test: /\.sass/,
                use: 
                [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { 
                        loader: 'sass-loader',
                        options:
                        {
                            indentedSyntax: true,
                            outputStyle: 'expanded'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: 
                [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: 
                [
                    { 
                        loader: 'url-loader',
                        options:
                        {
                            limit: 8192,
                        } 
                    },
                ]
            }
        ]
    }
};