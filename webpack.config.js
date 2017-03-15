/**
 * Created by Administrator on 2017/3/14.
 */
 var path = require('path');
 var ROOT_PATH = path.resolve(__dirname);
 var APP_PATH = path.resolve(ROOT_PATH,'app');
 var BUILD_PATH = path.resolve(ROOT_PATH,'build');
 module.exports = {
     devtool: 'eval-source-map',
     entry: APP_PATH,
     output: {
         path: BUILD_PATH,
         filename: 'bundle.js'
     },
     devServer: {
         historyApiFallback: true,
         hot: true,
         inline: true,
         progress: true,
     },
     module: {
         loaders: [
             {
                 test: /\.css$/,
                 loaders: ['style','css'],
             },
             {
                 test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                 loader: "url-loader?limit=10000&mimetype=application/font-woff"
             },
             {
                 test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                 loader: "file-loader"
             }
         ]
     },
 };