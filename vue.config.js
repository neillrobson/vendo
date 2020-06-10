module.exports = {
    publicPath: '/vendo/',
    productionSourceMap: false,
    pluginOptions: {
        webpackBundleAnalyzer: {
            openAnalyzer: false,
            analyzerMode: "server"
        }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Vendo";
                return args;
            });
    },
    configureWebpack: {
        optimization: {
            splitChunks: {
                maxSize: 244000
            }
        },
        performance: {
            assetFilter(filename) {
                return !(/\.(map|svg|css)$/.test(filename));
            }
        }
    }
}