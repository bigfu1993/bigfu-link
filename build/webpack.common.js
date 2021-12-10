
const path = require('path');
const Webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const { RUN_TYPE } = require('../config/engineering')
const prodConfig = require("./webpack.prod"); // 引入生产环境配置
const devConfig = require("./webpack.dev"); // 引入开发环境配置// 公共配置
const commonConfig = {
	entry: path.resolve(__dirname, '../src/index.js'),  // 打包入口文件
	output: {
		filename: 'flink.js', // 输出的文件名
		library: 'flink', // 类库的命名空间，如果通过网页的方式引入，则可以通过window.axios访问它
		path: path.resolve(__dirname, '../dist'), // 输出的绝对路径
		globalObject: 'this', // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
		libraryTarget: "umd", // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
		libraryExport: 'default' // 对外暴露default属性，就可以直接调用default里的属性
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	plugins: [
		new ESLintPlugin({
			context: path.resolve(__dirname, '../src'), // eslint检查根节点
			eslintPath: 'eslint',
			extensions: 'js', // 检查文件类型
			exclude: ['node_modules'], // 跳过检查目录
			fix: true, // 修复
			lintDirtyModulesOnly: false, // 启动时不检查，只检查修改文件
			threads: false, // 跨线程池运行
		}),
		new CleanWebpackPlugin(), // 每次打包都先清理出口（dist）文件夹
		new Webpack.DefinePlugin({
			'process.env': {
				RUN_ENV: JSON.stringify(process.env.RUN_ENV),
				RUN_TYPE: JSON.stringify(process.env.RUN_TYPE)
			}
		})
	]
};
module.exports = () => {  // 根据执行命令判断开发环境or生产环境，启用不同的配置文件
	if (RUN_TYPE == 'runtime') {
		return merge(commonConfig, devConfig);
	} else {
		return merge(commonConfig, prodConfig);
	}
}
