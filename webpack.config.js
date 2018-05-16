const path = require('path');

module.exports = {
	mode: 'developement',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/
      },
      {
        test: /.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
	    {
	    	test: /\.(png|svg|jpg|jpeg|gif)$/,
		    use: [
		    	'url-loader'
		    ]
	    }
    ]
  },

  // Dev tools are provided by webpack
  // Source maps help map errors to original react code
  devtool: 'cheap-module-eval-source-map',

  // Configuration for webpack-dev-server
  devServer: {
    contentBase: path.join(__dirname, 'public'),
	  proxy: {
		  "/api*": "http://localhost:8080"
	  }
  },
};