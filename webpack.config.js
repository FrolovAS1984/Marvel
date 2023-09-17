const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin= require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode:"development",
    output: {
        filename: 'main.js'
    },
    plugins: [
        new MiniCSSExtractPlugin(),
        new TerserWebpackPlugin(),
        new OptimizeCSSAssetsPlugin(),
        new ESLintPlugin(),
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
            }
        ]
    },
}
