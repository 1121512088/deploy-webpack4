const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: ['./src/index.js'],
  output: {
    path: path.json(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {},
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html', // 最终创建的文件名
      template: path.join(__dirname, 'src/index.html') // 指定模板路径
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  // devtool 控制是否生成
  devtool:"cheap-module-eval-source-map",// 开发环境配置  source map 定位到错误信息位置的文
  // devtool:"cheap-module-source-map",  // 线上生成配置 source map 定位到错误信息位置的文
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "./dist"),
    host: "GSZY", // 可以使用手机访问
    port: 8080,
    historyApiFallback: true, // 该选项的作用所有的404都连接到index.html
    proxy: {
      // 代理到后端的服务地址，会拦截所有以api开头的请求地址
      "/api": "http://localhost:3000"
    }
  },
  
}
