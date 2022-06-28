//return array of pages templates if we need to generate many pages
//but still there is a problem how to include right js file here
//I also can write here HTMLWebpackPlugin instance many times and just include this file in webpack.config.js


const fs = require('fs');

const HTMLWebpackPlugin = require('html-webpack-plugin');

function getHtmlFiles() {
	const allFiles = fs.readdirSync(__dirname + "/src");

	return allFiles.filter((file) => file.endsWith(".html"));
}

module.exports = getHtmlFiles().map(function (htmlFileName) {

	return new HTMLWebpackPlugin({
		filename: htmlFileName,
		template: `src/${htmlFileName}`,
		title: htmlFileName.slice(0, htmlFileName.length - 5),
		inject: "body"
	});

});