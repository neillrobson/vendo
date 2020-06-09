const webpack = require('webpack');

module.exports = {
    publicPath: '/vendo/',
    pluginOptions: {
        webpackBundleAnalyzer: {
            openAnalyzer: false
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        ]
    }
}