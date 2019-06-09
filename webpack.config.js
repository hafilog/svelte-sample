const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: { main: './src/main.js' },
  plugins: [
      new HtmlWebpackPlugin()
  ],
  module: {
    rules: [{
      test: /\.html/,
      include: path.resolve(__dirname, './src'),
      use: [{
        loader: 'svelte-loader'
      }]
    }]
  }
}
