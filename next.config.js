const { ANALYZE, ASSET_HOST } = process.env
const withCSS = require('@zeit/next-css')

const webpack = require('webpack')
// for those who using CDN
const assetPrefix = ASSET_HOST || ''

module.exports = withCSS({
  assetPrefix,
  poweredByHeader: false,
  target: 'server',
  webpack: (config, { dev }) => {
    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`

      config.plugins.push(
          new webpack.ProvidePlugin({
              '$': 'jquery',
              'jQuery': 'jquery',
          })
      )

    if (ANALYZE) {
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
