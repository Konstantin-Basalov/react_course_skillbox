import webpack from 'webpack';
import webpackConfig from '../webpack.config';
const [webpackClientConfig, webpackServerConfig] = webpackConfig;
import nodemon from 'nodemon';
import { resolve } from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';

const hmrServer = express();

const clientCompiler = webpack(webpackClientConfig);

hmrServer.use(webpackDevMiddleware(clientCompiler, {
    publicPath: webpackClientConfig.output.publicPath,
    serverSideRender: true,
    // noInfo: true,
    // watchOptions: {
    //     ignore: /dist/,
    // },
    writeToDisk: true,
    stats: 'errors-only'
}));

hmrServer.use(webpackHotMiddleware(clientCompiler, {
    path: '/static/__webpack_hmr',
}));

hmrServer.listen(3001, () => {
    console.log('HMR server successfully started');
});



const compiler = webpack(webpackServerConfig);

// compiler.run((err) => {
//     if (err) {
//         console.log('Compilation failed: ', err)
//     }

    compiler.watch({}, (err) => {
        if (err) {
            console.log('Compilation failed: ', err);
        }
        console.log('Compilation was success');
    });

    nodemon({
        script: resolve(__dirname, '../dist/server/server.js'),
        watch: [
            resolve(__dirname, '../dist/server'),
            resolve(__dirname, '../dist/client')
        ]
    });
// });

