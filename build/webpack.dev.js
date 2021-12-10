const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  mode: 'development', // 开发环境
  devtool: 'eval-cheap-module-source-map', // sourceMap用于错误调试
  devServer: {
    client: {
      reconnect: 10, // 告诉 dev-server 它应该尝试重新连接客户端的次数。当为 true 时，它​​将尝试无限次重新连接。
      logging: 'info',  // 允许在浏览器中设置日志级别，例如在重新加载之前、错误之前或启用热模块更换时 
      progress: true,
      overlay: {
        errors: true, // 仅报错显示
        warnings: false,
      }, // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖
    },
    https: true, // 启用https
    hot: true, // 热加载
    compress: true, // 为所有服务启用 gzip 压缩
    headers: {
      'X-Custom-Foo': 'bar',
    }, // 为所有响应添加标题:
    historyApiFallback: true, // 使用 HTML5 History API 时，可能必须提供 index.html 页面来代替任何 404 响应。通过将其设置为 true 来启用
    host: '0.0.0.0',
    // port: 8088,
    // contentBase: './example',
    // 服务器启动根目录设置为exampleopen: true, // 自动打开浏览器port: 8088, // 端口号hot: true // 开启热更新，同时要配置相应的插件HotModuleReplacementPlugin
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../tpl/index.html'), // 使用模板文件，主要用于查看效果  
      inject: 'head' // 插入到 head 标签中
    }),
    new webpack.HotModuleReplacementPlugin() // 热更新插件
  ]
};