const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const clientConfig = {
    name: "browser",
    entry: {
        pageHome: './app/src/pages/home/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_module)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: [["import", {
                            "libraryName": "antd",
                            "style": "css"
                        }]]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    devServer: {
        port: 9000,
        contentBase: './dist'
    },
    plugins: [
        new ExtractTextPlugin('index.css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/src/pages/home/home.html'
        })
    ]
};

module.exports = clientConfig;