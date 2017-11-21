const path = require('path');

const serverConfig = {
    name: "server-side rendering",
    entry: './app/render.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'render.js'
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
                            "libraryName": "antd"
                        }]]
                    }
                }
            }
        ]
    },
    target: 'node'
};

module.exports = serverConfig;