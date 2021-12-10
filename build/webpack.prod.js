

const { RUN_ENV } = require('../config/engineering')
const TerserWebpackPlugin = require("terser-webpack-plugin");
module.exports = {
	mode: RUN_ENV == 'prod' ? "production" : "development",
	optimization: {
		minimize: true,
		minimizer: [
			new TerserWebpackPlugin({
				parallel: true, // 是否并行打包
				extractComments: false, // 注释打包额外文件
				terserOptions: {
					compress: {
						unused: true,
						drop_debugger: true,
						drop_console: true,
						dead_code: true
					}
				}
			})
		]
	},
};
