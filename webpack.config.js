const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { SourceMapDevToolPlugin } = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		sourceMapFilename: '[name].js.map',
		publicPath: '/',
	},

	mode: 'development',

	devtool: 'source-map',

	resolve: {
		extensions: ['.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				enforce: 'pre',
				exclude: /node_modules/,
				use: ['source-map-loader', 'babel-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|pdf|svg)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
				},
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
			favicon: './public/rick-sanchez.png',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new SourceMapDevToolPlugin({
			filename: '[file].map',
		}),
	],

	devServer: {
		historyApiFallback: true,
		allowedHosts: path.join(__dirname, 'dist'),
		compress: true,
		port: 3005,
	},
};
