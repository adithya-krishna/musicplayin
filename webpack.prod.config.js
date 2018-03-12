const webpack = require('webpack');
const path = require('path');

const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const prodConfig = {
	devtool: 'cheap-source-map',
	entry: [
		path.resolve(__dirname, 'app')
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: './bundle.js'
	},
	module: {
		rules: [
            {
                test: /\.css$/, include: path.resolve(__dirname, 'app'), use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            { test: /\.js[x]?$/, exclude: /node_modules/, include: path.resolve(__dirname, 'app'), use: 'babel-loader' }
        ]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new uglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new CopyWebpackPlugin([
			{ from: './app/index.html', to: 'index.html' },
		])
	]
};

module.exports = prodConfig;