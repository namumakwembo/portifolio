const path = require('path')
const MangleCssClassPlugin = require('mangle-css-class-webpack-plugin');
const mangleCssClassWebpackPlugin = require('mangle-css-class-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: ['./src/app.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
            'style-loader',
            'css-loader',
            'postcss-loader'],
      },
    ],

  },
  plugins: [
    new MangleCssClassPlugin({
      classNameRegExp: '[cl]-[a-z][a-zA-Z0-9_]*',
      log: true,
      
    //   entry: ['./public/index.html'],
    //   output: {
    //     path: path.resolve(__dirname, 'public/page'),
    //     filename: 'index.html',
    //   },

    }),
  ],

}