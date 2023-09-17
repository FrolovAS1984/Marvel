const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin= require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {options} = require("axios");

module.exports = {
    entry: './src/index.js',
    mode:"development",
    output: {
        filename: 'main.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        static: "./dist",
        port: 9000,
        open: true,
        hot: true
    },
    plugins: [
        new MiniCSSExtractPlugin(),
        new TerserWebpackPlugin(),
        new OptimizeCSSAssetsPlugin(),
        new ESLintPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.pug',
            filename: "index.html"

        }),
        // new StylelintPlugin(),
    ],
    optimization: {
        minimizer:  [
            new TerserWebpackPlugin(),
            new OptimizeCSSAssetsPlugin(),
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    'css-loader',
                ],

            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
            {
                test: /\.svg$/,
                use: ['svg-inline-loader']
            },
        ]
    },
}
