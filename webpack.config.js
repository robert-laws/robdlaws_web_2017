// Check if npm config production value is set to true. If this value is true, it will skip over the dev dependencies.
// Run npm config get production
// To set it: npm config set -g production false

var webpack = require("webpack");

module.exports = {
	entry: "./app/app.js",
	output: {
		path: "public",
		filename: "bundle.js"
	},
	// devtool: 'cheap-module-eval-source-map', // makes bundles.js file very large in production
	devServer: {
		inline: true,
		contentBase: './public',
		port: 3000
	},
    resolve: {
     root: __dirname,
     alias: {
       Main: 'app/components/Main.js',
       WebMenu: 'app/components/WebMenu.js',
       Home: 'app/components/Home.js',
       Footer: 'app/components/Footer.js',
       FrontEnd: 'app/components/FrontEnd.js',
       BackEnd: 'app/components/BackEnd.js',
       Design: 'app/components/Design.js',
       DataVisualization: 'app/components/DataVisualization.js',
       Podcasts: 'app/components/Podcasts.js',
       Websites: 'app/components/Websites.js',
       Learning: 'app/components/Learning.js',
       TravelPhotos: 'app/components/TravelPhotos.js',
       FunPhotos: 'app/components/FunPhotos.js',
       About: 'app/components/About.js',
       Resume: 'app/components/Resume.js',
       SocialNetworking: 'app/components/SocialNetworking.js',
       Blog: 'app/components/Blog.js',
       FourFootedFriends: 'app/components/FourFootedFriends.js',
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
				new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            }
        })
    ]
}
