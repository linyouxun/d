var path = require('path');
var rootPath = path.resolve(__dirname, "public");
module.exports = {
  entry: [
    'babel-polyfill',
    path.join(rootPath,"javascripts/main")
  ],
  output: {
    path: path.join(rootPath,"dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
    {
      loader: "babel-loader",
      test: /\.jsx?$/,
    },]
  },
  exclude: [
    path.resolve(__dirname, "node_modules"),
  ],
}
