const fs = require('fs');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    publicPath: '/vendo/',
    productionSourceMap: false,
    pluginOptions: {
        webpackBundleAnalyzer: {
            openAnalyzer: false,
            analyzerMode: 'disabled'
        }
    },
    chainWebpack: (config) => {
        config.plugin('html').tap((args) => {
            args[0].title = 'Vendo';
            return args;
        });
    },
    configureWebpack: {
        devtool: 'source-map',
        optimization: {
            splitChunks: {
                maxSize: 244000
            }
        },
        resolve: {
            fallback: {
                crypto: require.resolve('crypto-browserify'),
                stream: require.resolve('stream-browserify')
            }
        },
        plugins: [new NodePolyfillPlugin()]
    },
    devServer: devServer()
};

function devServer() {
    const config = {
        port: 8081,
        host: 'localhost'
    };

    if (
        fs.existsSync('./local-ssl/localhost.key') &&
        fs.existsSync('./local-ssl/localhost.crt')
    ) {
        config.server = {
            type: 'https',
            options: {
                key: fs.readFileSync('./local-ssl/localhost.key'),
                cert: fs.readFileSync('./local-ssl/localhost.crt')
            }
        };
    }

    return config;
}
