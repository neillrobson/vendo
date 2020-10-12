const fs = require('fs');

module.exports = {
    publicPath: '/vendo/',
    productionSourceMap: false,
    pluginOptions: {
        webpackBundleAnalyzer: {
            openAnalyzer: false,
            analyzerMode: 'disabled'
        }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
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
        }
    },
    devServer: devServer()
};

function devServer() {
    const config = {
        host: 'localhost'
    };

    if (fs.existsSync('./local-ssl/localhost.key') && fs.existsSync('./local-ssl/localhost.crt')) {
        config.https = {
            key: fs.readFileSync('./local-ssl/localhost.key'),
            cert: fs.readFileSync('./local-ssl/localhost.crt')
        };
    }

    return config;
}