const { ANALYZE } = process.env
const withCSS = require('@zeit/next-css')
const webpack = require('webpack')

module.exports = withCSS({
    poweredByHeader: false,
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        )
        if (false && ANALYZE) {
            const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
            config.plugins.push(new BundleAnalyzerPlugin({
                analyzerMode: 'server',
                analyzerPort: 8888,
                openAnalyzer: true
            }))
        }
        return config
    }
})
