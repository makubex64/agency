const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Assets = require('./assets');


module.exports = {

<<<<<<< HEAD
	entry: './js/scripts.js',
=======
	entry: {
    scripts: './js/scripts.js',
    scrollreveal: './js/scrollreveal.js'
  },
>>>>>>> 8f26df0197c67337a7b02a9e89268b5b94721f60
	output: {
		path: __dirname + '/dist',
		filename: '[name].bundle.js'
	},

	plugins: [
	new HtmlWebpackPlugin(),

    new CopyPlugin({
      patterns: Assets.map(asset =>{
      	return {
      		from: path.resolve(__dirname, `./node_modules/${asset}`),
      		to: path.resolve(__dirname, 'libraryes')
      	}
      })
    }),
  ],

  //show errors by console 
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist',
   },
	

  module: {
  rules: [
    {
      test: /\.css$/,
         use: [
           'style-loader',
           'css-loader',
         ],
         
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}

}