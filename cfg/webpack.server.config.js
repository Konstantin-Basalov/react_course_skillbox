const path = require('path');
const nodeExternals = require("webpack-node-externals");
const NODE_ENV = process.env.NODE_ENV;


module.exports = {
    target: "node",
    entry: path.resolve(__dirname, "../src/server/server.js"),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: "server.js", // bundle file
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader'] // для добавления стилей глобально
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                                exportOnlyLocals: true,
                            },

                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimize: false,
    }
}