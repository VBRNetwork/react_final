const { ANALYZE, ASSET_HOST } = process.env
const withCSS = require('@zeit/next-css')

// for those who using CDN
const assetPrefix = ASSET_HOST || ''

module.exports = withCSS({
  assetPrefix,
  target: 'server',
  webpack: (config, { dev }) => {
    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`

    if (ANALYZE) {
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
