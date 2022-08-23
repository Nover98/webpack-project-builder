const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
	mode: 'development',

	devtool: 'source-map',

	devServer: {
		static: './src',
		open: true,
		hot: true, // https://webpack.js.org/configuration/dev-server/#devserverhot
		//look console log "[webpack-dev-server] On Your Network (IPv4)" to open site on other devices
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