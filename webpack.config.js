module.exports = {
  context: __dirname + "/",
  entry: "./src/js/main.js",
  output: {
    path: __dirname + "/public/",
    filename: "bundle.js"
  },
  module: {
    loaders:[{
      test:/\.js?$/,
      exclude: /(node_modules| server.js)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}
