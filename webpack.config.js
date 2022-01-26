const path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/'
  },
  devServer: {
    static: {
      directory: __dirname,
    },
    hot: true

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            // options: { injectType: "linkTag" }
          },
          // { loader: "file-loader" },
          {loader:"css-loader"}
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)\)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'image/', // 指定图片输入的文件夹
              publicPath: '../dist/image/', // 指定获取图片的路径
              limit: 500,
              // name: '[name].[hash:8].[ext]' // 输入的图片名
            }
          }
        ]
      }
    ]
  }
};