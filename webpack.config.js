const path=require('path')

module.exports = {
	
	mode: 'development',
		entry: {
		main: './src/js/main.js'
		
			
	},
	output: {
		filename: '[name].js'
	},
	module: {
		rules: [
			{
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
