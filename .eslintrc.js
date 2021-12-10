
const env = process.env.BUILD_ENV
module.exports = {
	env: { // env 关键字指定你想启用的环境
		browser: true,
		es2021: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 6, // 指定你想要使用的 ECMAScript 版本
		sourceType: "module", // 启用 ESModule
	},
	extends: "eslint:recommended", // 继承的配置规则集 default配置
	plugins: ["vue", "html"],
	parser: "@babel/eslint-parser", // 解析器
	rules: {
		// 规则 "off" = 关闭 "warn" = 警告 "error" = 报错
		"strict": "off", // 严格模式，规则关闭
		"quotes": [2, 'single'], // 强制单引号
		"semi": [2, "never"], // 强制分号结尾
		// "indent": ["error", "tab"], // tab缩进
		"no-debugger": 2, //禁止使用debugger
		"no-empty": 2,//块语句中的内容不能为空
		"space-before-function-paren": 0, // 方法()前是否空格
		"no-console": 0, // 禁用 console 对象方法，规则关闭
		"no-unused-vars": 0,  // 定义未使用
		"global-require": "off", // 要求 require() 出现在顶层模块作用域中，规则关闭
		"require-yield": "off", // 要求 generator 函数内有 yield，规则关闭
	},
};
