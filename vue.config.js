module.exports = {
    publicPath: '/vendo/',
    productionSourceMap: false,
    pluginOptions: {
        webpackBundleAnalyzer: {
            openAnalyzer: false
        }
    },
    configureWebpack: {
        optimization: {
            splitChunks: {
                maxSize: 244000
            }
        },
        performance: {
            assetFilter(filename) {
                return !(/\.(map|svg)$/.test(filename));
            }
        }
    }
}