const HtmlWebpackPlugin=require('html-webpack-plugin');
const webpack=require("webpack");
const path=require('path');
//浏览器
const OpenBrowserPlugin=require("open-browser-webpack-plugin");
//css样式分离
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('styles/[name].css');

module.exports={
	context:path.resolve(__dirname,'src'),
	entry:{
		main:'./index.jsx',
		vendor: 'material-ui'//material分离
	},
	output:{
		path:path.resolve(__dirname,'build'),
		filename:'[name].js',
		chunkFilename:'[name]-[id].js',
		publicPath:'/',
	},
	devServer:{
		contentBase:'src/',
	},
	module:{
		rules:[
		{
			test:/\.(js|jsx)$/,
			use:[{
				loader:'babel-loader',
				options:{
					presets:["es2015","stage-0","babel-preset-react"],
				}
			},],
		},
		{
			test:/\.css$/,
			use:extractCSS.extract(['style-loader',//css样式分离
				{
					loader:'css-loader',
					options:{
						importLoaders: 1
					}
				}
				,
				{
	                loader:'postcss-loader',
	                options:{
	                    plugins:function(){
	                        return [
	                            require('autoprefixer')({broswers:['last 5 versions']})
	                        ];
	                    }
	                }
	            }
            ]),
		}
		]
	},
	//devtool: 'inline-source-map',
	resolve:{
		//(import Func from './file') to (import Func from './file.js')
		extensions:['.js','.jsx']
	},
	plugins:[
		/*new webpack.optimize.CommonsChunkPlugin({//公共组件分离
			name:'commons',
			filename:'commons.js',
			minChunks:function(module){
				return module.context && module.context.indexOf('node_modules') !==-1;
			}
		}),*/

		extractCSS,//样式分离
		new webpack.optimize.CommonsChunkPlugin({//公共组件分离
			  names: ['vendor', 'manifest']
		}),
		
		new HtmlWebpackPlugin({//动态创建html文件
			inject: true,
			title: 'My App',
      		template: '../index.ejs'
		}),
		new OpenBrowserPlugin({url:"http://localhost:8080"})
	],
}