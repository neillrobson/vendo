const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    publicPath: '/vendo/',
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),
            new BundleAnalyzerPlugin()
        ]
    }
}