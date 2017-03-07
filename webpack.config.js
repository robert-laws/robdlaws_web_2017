// Check if npm config production value is set to true. If this value is true, it will skip over the dev dependencies.
// Run npm config get production
// To set it: npm config set -g production false

var webpack = require("webpack");
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
	entry: "./app/app.js",
	output: {
		path: "public",
		filename: "bundle.js"
	},
	devtool: 'cheap-module-eval-source-map', // makes bundles.js file very large in production
	devServer: {
		inline: true,
		contentBase: './public',
		port: 3000
	},
  resolve: {
   root: __dirname,
	 modulesDirectories: [
		'node_modules',
		'./app/components',
		'./app/data'
	 ]
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
			},
			{
				test:/.woff$/,
				loader:'url-loader',
				query:{mimetype:'application/font-woff',name:'./semantic/dist/themes/default/assets/fonts/icons.woff'}
			},
			{
				test:/.woff2$/,
				loader:'url-loader',
				query:{mimetype:'application/font-woff2',name:'./semantic/dist/themes/default/assets/fonts/icons.woff2'}
			},
			{
				test:/.[ot]tf$/,
				loader:'url-loader',
				query:{mimetype:'application/octet-stream',name:'./semantic/dist/themes/default/assets/fonts/icons.ttf'}
			},
			{
				test:/.eot$/,
				loader:'url-loader',
				query:{mimetype:'application/vnd.ms-fontobject',name:'./semantic/dist/themes/default/assets/fonts/icons.eot'}
			},
			{
				test:/.svg$/,
				loader:'url-loader',
				query:{mimetype:'image/svg+xml',name:'./semantic/dist/themes/default/assets/fonts/icons.svg'}
			},
			{
				test:/.png$/,
				loader:'url-loader',
				query:{mimetype:'image/png',name:'./semantic/dist/themes/default/assets/images/flags.png'}
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
		new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    })
  ]
}
