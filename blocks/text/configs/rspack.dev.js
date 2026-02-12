const path = require("path")
const { merge } = require("webpack-merge")
const rspackBaseConfig = require("./rspack.base")

const devConfig = {
	mode: "development",
	devtool: "eval",
	cache: false,
	optimization: {
		minimize: false,
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "../dist"),
		},
		port: 3102,
		hot: true,
		compress: false,
		historyApiFallback: true,
		open: false,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
		},
	},
}

const mergedConfig = merge(rspackBaseConfig, devConfig)

module.exports = mergedConfig
