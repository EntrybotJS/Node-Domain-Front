const path = require('path')
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
		new webpack.optimize.OccurrenceOrderPlugin()
	]
}