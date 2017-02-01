// Development Version

// var webpack = require('webpack');
// var path = require('path');

// module.exports = {
//   entry: ["webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server", "./app/app.js"],
//   output: {
//     path: "public",
//     filename: "bundle.js"
//   },
//   devServer: {
//     inline: true,
//     contentBase: './public',
//     hot: true,
//     port: 8080
//   },
//   resolve: {
//     root: __dirname,
//     alias: {
//       Main: 'app/components/Main.js',
//       Home: 'app/components/Home.js',
//       FrontEnd: 'app/components/FrontEnd.js',
//       About: 'app/components/About.js',
//       Nav: 'app/components/Nav.js',
//       Footer: 'app/components/Footer.js'
//     }
//   },
//   module: {
//     loaders: [
//       {
//         loader: 'babel-loader',
//         query: {
//           presets: ['es2015', 'react', 'stage-0']
//         },
//         test: /\.js?$/,
//         exclude: /(node_modules|bower_components)/
//       },
//       {
// 				test: /\.css$/,
// 				loader: 'style-loader!css-loader!autoprefixer-loader'
// 			},
// 			{
// 				test: /\.scss$/,
// 				loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
// 			}
//     ]
//   },
//   plugins: [
//         new webpack.optimize.UglifyJsPlugin({
//             compress: {
//                 warnings: false,
//             },
//             output: {
//                 comments: false,
//             },
//         }),
//     ]
// }

//////////////////////////////////////////////////////////////////////////
// Production Version

var webpack = require("webpack");

module.exports = {
	entry: "./app/app.js",
	output: {
		path: "public",
		filename: "bundle.js",
		publicPath: "public"
	},
	devServer: {
		inline: true,
		contentBase: './public',
		port: 3000,
    historyApiFallback:{
        index:'public/index.html'
    }
	},
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.js',
      Home: 'app/components/Home.js',
      FrontEnd: 'app/components/FrontEnd.js',
      About: 'app/components/About.js',
      Nav: 'app/components/Nav.js',
      Footer: 'app/components/Footer.js'
    }
  },
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        },
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
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
}

