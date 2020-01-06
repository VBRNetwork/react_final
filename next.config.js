const withCSS = require('@zeit/next-css')
const webpack = require('webpack')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WithBabelMinify = require('next-babel-minify')
module.exports = withCSS({
    poweredByHeader: false,
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        )
        config.optimization.minimizer = [
            new OptimizeCSSAssetsPlugin({}),
            WithBabelMinify({comments: false})
        ];
        return config
    }
})
