var webpack = require("webpack");

module.exports = {
	entry: "./app/app.js",
	output: {
		path: "public",
		filename: "bundle.js"
	},
	devServer: {
		inline: true,
		contentBase: './public',
		port: 3000
	},
    resolve: {
     root: __dirname,
     alias: {
       Main: 'app/components/Main.js',
       Home: 'app/components/Home.js',
       FrontEnd: 'app/components/FrontEnd.js',
       About: 'app/components/About.js',
       WebMenu: 'app/components/WebMenu.js',
       Footer: 'app/components/Footer.js',
       Page404: 'app/components/Page404.js'
     }
   },
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: ["babel-loader"],
				query: {
					presets: ['es2015', 'react', 'stage-0']
				}
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: "json-loader"
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
			}
		]
	},
	plugins: [
//        new webpack.optimize.UglifyJsPlugin({
//            compress: {
//                warnings: false,
//            },
//            output: {
//                comments: false,
//            },
//        })
    ]
}
