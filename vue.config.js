module.exports = {
    publicPath: '/vendo/',
    productionSourceMap: false,
    pluginOptions: {
        webpackBundleAnalyzer: {
            openAnalyzer: false,
            analyzerMode: "disabled"
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
        devtool: 'source-map',
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