const webpack = require('webpack'); //eslint-disable-line no-unused-vars
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: './app.css'
});
const postcssOpts = { sourceMap: true };
const vendorStyleLoaders = [
    {
        loader: 'css-loader',
        query: {
            modules: true,
            sourceMap: true,
            importLoaders: 1,
            localIdentName: '[local]',
            minimize: false
        }
    },
    {
        loader: 'postcss-loader',
        options: postcssOpts
    }
];
const loaders = [
    {
        loader: 'css-loader',
        query: {
            modules: true,
            sourceMap: true,
            importLoaders: 2,
            localIdentName: '[name]__[local]--[hash:base64:5]',
            minimize: false,
            url: false
        }
    },
    {
        loader: 'postcss-loader',
        options: postcssOpts
    },
    {
        loader: 'sass-loader',
        options: {
            sourceMap: true,
            outputStyle: 'expanded',
            includePaths: [path.resolve(__dirname, 'app'), 'node_modules']
        }
    }
];

const baseConfig = {
    context: __dirname,
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        inline: true,
        progress: true,
        contentBase: './app',
        port: 8080
    },
    entry: path.resolve(__dirname, 'app'),
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: './app.bundle.js',
        sourceMapFilename: '[file].map',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: 'source-map-loader',
                enforce: 'pre'
            },
            {
                test: /\.js[x]?$/,
                include: path.resolve(__dirname, 'app'),
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: {
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /(\.scss)$/,
                exclude: [path.resolve(__dirname, 'app/css')],
                use: ['css-hot-loader'].concat(
                    extractSass.extract({
                        fallback: 'style-loader',
                        use: loaders
                    })
                )
            },
            {
                test: /(\.css)$/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: vendorStyleLoaders
                })
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss'],
        modules: [path.resolve(__dirname, 'app'), 'node_modules']
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        extractSass,
        new CopyWebpackPlugin([
            {
                context: 'app/static',
                from: '**/*',
                to: 'static'
            }
        ])
    ]
};

module.exports = baseConfig;
