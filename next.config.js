const withCSS = require('@zeit/next-css')
const webpack = require('webpack')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = withCSS({
    poweredByHeader: false,
    webpack: (config, { dev }) => {
        config.mode = 'production'
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        )
        config.optimization.minimizer = [
            new OptimizeCSSAssetsPlugin({}),
            new TerserPlugin({})
        ];
        return config
    }
})
