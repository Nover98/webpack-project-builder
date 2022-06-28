const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
	mode: 'development',

	devtool: 'source-map',

	devServer: {
		static: './dist',
		open: true,
		hot: true, // https://webpack.js.org/configuration/dev-server/#devserverhot
	},

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		]
	}
});