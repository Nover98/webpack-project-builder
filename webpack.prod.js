const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require('postcss-preset-env');
const mqpacker = require("node-css-mqpacker");
const sortCSSmq = require('sort-css-media-queries');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
	mode: 'production',

	devtool: false,

	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
		],
	},

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									postcssPresetEnv({
										autoprefixer: {
											'overrideBrowserslist': [
												'last 2 versions',
												'not ie 10',
												'not ie_mob 10'
											],
											'cascade': true,
											'grid': 'no-autoplace'
										}
									}),
									mqpacker({
										sort: sortCSSmq,
									})
								],
							},
						}
					},
					{
						loader: 'sass-loader',
					}
				]
			}
		]
	}
});