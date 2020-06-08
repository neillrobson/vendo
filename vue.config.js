const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    publicPath: '/vendo/',
    configureWebpack: {
        plugins: [
            new BundleAnalyzerPlugin()
        ],
        optimization: {
            splitChunks: {
                maxSize: 244000
            }
        },
        performance: {
            assetFilter(filename) {
                return !(/\.(map|css)$/.test(filename));
            }
        }
    }
}