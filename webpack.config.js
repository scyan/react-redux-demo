var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
  // entry: './index.js',
  entry: {
  	'webpack-dev-server':'webpack/hot/only-dev-server',
  	'demo1/index':'./demo1/index.js',
  	'demo2/index':'./demo2/index.js',
  	'demo3/index':'./demo3/index.js',
  },
  resolve: {
    alias: {
      react: 'react/dist/react.js'
    }
  },

  output: {
  	path: './',
    filename: '[name].js'
  },
  module: {
  	noParse:[
  		/react/
  	],//不遍历搜索依赖的文件
    loaders: [
	    { 
		    test: /\.js$/, 
		    exclude: /node_modules/, 
		    loaders: ['react-hot','babel?presets[]=es2015,presets[]=react']
  		},
      {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.less$/,
        loader: 'style!css!less'
      },{ 
        test: /\.(png|jpg)$/, 
        loader: 'url?limit=25000' 
      }

    ]
  }

};