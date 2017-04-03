const path = require('path');
const webpack = require('webpack');

const ENV = process.env.NODE_ENV || 'development';
const IS_PROD = ENV === 'production';

const devPlugins = [];

const prodPlugins = [
	new webpack.LoaderOptionsPlugin({
		debug: false,
		minimize: true,
		sourceMap: true,
	}),
	new webpack.optimize.UglifyJsPlugin({
		sourceMap: true,
	}),
];

const devStats = {
	hash: false,
	version: false,
	timings: false,
	assets: false,
	entrypoints: false,
	chunks: false,
	chunkModules: false,
	modules: false,
	reasons: false,
	depth: false,
	usedExports: false,
	providedExports: false,
	children: false,
	source: false,
	errors: true,
	errorDetails: true,
	warnings: true,
	publicPath: false,
	performance: false,
};

const prodStats = {
	...devStats,
	assets: true,
};

module.exports = {
	entry: {
		'droppy': './src/index.js',
	},

	output: {
		filename: IS_PROD ? '[name].min.js' : '[name].js',
		path: path.resolve(__dirname, 'dist'),
		library: 'droppy',
		libraryTarget: 'umd',
	},

	externals: {
		Houdini: {
			commonjs: 'Houdini',
			commonjs2: 'Houdini',
			amd: 'Houdini',
			root: 'houdini',
		},
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				// See .babelrc and .eslintrc.js
				use: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /\.(jpe?g|png|gif|eot|svg|ttf|woff|woff2|mp4|webm)$/,
				loader: 'file-loader',
			},
		],
	},

	plugins: [
		new webpack.EnvironmentPlugin({ NODE_ENV: ENV }),
	].concat(IS_PROD ? prodPlugins : devPlugins),

	stats: IS_PROD ? prodStats : devStats,

	devtool: IS_PROD ? 'source-map' : 'inline-source-map',
};
