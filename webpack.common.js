const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
		new CopyPlugin({
			patterns: [
				{ from: "assets", to: "assets" },
				{ from: "fonts", to: "fonts" },
			],
		}),
	],

	module: {
		// https://webpack.js.org/guides/asset-modules/
		//I use it because we need loader to parse assets in css
		//but I disable inserting files to public because it moves only those files
		//that are used in css but not in html.
		//I use copy webpack plugin instead.
		rules: [
			{ 	//works only for those files which are used in css
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/[name][ext]',
					emit: false,
				}
			},
			{
				test: /\.(ttf|woff|woff2)$/,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]',
					emit: false,
				}
			}
		]
	}
};