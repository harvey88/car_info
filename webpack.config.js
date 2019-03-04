const path = require('path');
const webpack = require('webpack');

const config = {
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build/')
    },
    entry: [
        '@babel/polyfill',
        './index.js',
        'react-hot-loader',
        'webpack/hot/only-dev-server'
    ],
    module : {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader : 'babel-loader',
                    options: {
                        cacheDirectory: false,
                    }
                }
            },
            {
                test:/\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'babel-loader',
                        // options: {
                        //     presets: ['env', 'react']
                        // }
                    },
                    {
                        loader: 'react-svg-loader',
                        options: {
                            jsx: true,
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    devServer: {
        hot: true
    },
    devtool: 'eval-sourcemap',
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        },
        extensions: ['.jsx', '.js', '.json', '.scss', '.sass', '.css', '.svg']
    }
}

module.exports = config