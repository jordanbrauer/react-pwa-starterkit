const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist') + '/app',
    filename: 'bundle.js',
    publicPath: '/app/',
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [ path.resolve(__dirname, 'src') ],
        loader: 'babel-loader',
        options: {
          presets: [ 'es2015', 'react' ]
        }
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      }
    ]
  }
}
