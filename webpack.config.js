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
       Page404: 'app/components/Page404.js',
			 Chapter3: 'app/components/Chapter3.js',
			 FindPercentage: 'app/components/FindPercentage.js',
			 CompoundInterest: 'app/components/CompoundInterest.js',
			 CompoundingFrequencies: 'app/components/CompoundingFrequencies.js',
			 SolveRateTime: 'app/components/SolveRateTime.js',
			 RuleOf72: 'app/components/RuleOf72.js',
			 EffectiveRate: 'app/components/EffectiveRate.js'
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
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //     },
        //     output: {
        //         comments: false,
        //     }
        // })
    ]
}
