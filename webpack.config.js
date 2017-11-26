const path = require('path')
const Compression = require('compression-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: path.resolve('src/server.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'server.js'
	},
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader' }
		]
	},
	target: 'node',
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			mangle: true,
			output: {
				comments: false
			},
			sourceMap: false
		})
	]
}