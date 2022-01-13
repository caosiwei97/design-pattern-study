const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: __dirname,
    filename: 'release/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/, // 排除 node_modules 检测
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true, // 开启目录缓存功能
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, './release'),
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
