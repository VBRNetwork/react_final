const { ANALYZE, ASSET_HOST } = process.env
const withCSS = require('@zeit/next-css')
const webpack = require('webpack')
const assetPrefix = ASSET_HOST || ''

module.exports = withCSS({
    assetPrefix,
    poweredByHeader: false,
    webpack: (config, { dev }) => {
        config.output.publicPath = `${assetPrefix}${config.output.publicPath}`
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
        config.module.rules.push({
            test: /\.scss/,
            use: [{
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]'
                }
            },
                'babel-loader',
                'styled-jsx-css-loader', {
                    loader: 'sass-loader',
                    options: { sourceMap: dev }
                }]
        })
        return config
    }
})
