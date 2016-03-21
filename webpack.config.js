module.exports = {
  entry: './client/components/main/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js' 
  },
  module: {
    loaders: [
      { 
        test: /\.css$/, 
        loader: 'style!css!'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react']
        }
      }
    ]
  }
}