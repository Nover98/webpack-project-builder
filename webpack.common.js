const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

	context: path.resolve(__dirname, 'src'),

	entry: {
		index: ["./js/index.js", "./scss/index.scss"],
	},

	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true, //https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
		pathinfo: false, //https://webpack.js.org/guides/build-performance/#output-without-path-info
	},

	plugins: [
		new HTMLWebpackPlugin({
			filename: "index.html",
			template: `./index.html`,
			inject: "body",
			minify: false,
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],

	module: {
		rules: [
			{
				test: /\.(png|jpe?g|webp)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/[name][ext]'
				}
			},
			{
				test: /\.(ttf|woff|woff2)$/,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]'
				}
			}
		]
	}
};