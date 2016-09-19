module.exports = {
	devtool: 'eval-source-map', // 生成source map文件
	entry: __dirname+"/app/main.js",// 多次提及的唯一入口
	output:{
		path: __dirname+"/public", // 打包后的文件存放的地方
		filename: "bundle.js" // 打包后输出文件的文件名
	},
	module:{
		loaders:[{
			test:/\.json$/,
			loader:"json"
		},{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel",
			query:{
				presets:['es2015','react']
			}
		}]
	},
	devServer: {
		contentBase: './public', // 本地服务器所加载的页面所在的目录
		colors: true, // 终端中输出结果为彩色
		historyApiFallback: true, // 不跳转
		inline: true // 实时刷新
	}
};