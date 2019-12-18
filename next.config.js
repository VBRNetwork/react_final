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
        return config
    }
})
