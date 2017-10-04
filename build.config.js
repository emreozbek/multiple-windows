
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('bundle.css');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    entry: [
        "./src/Index.js"
    ],
    output: {
        path : __dirname + '/build/assets',
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: extractCSS.extract(["css-loader", "sass-loader"])
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'es2015','react','stage-0']
                }
            }
        },{
            test : /\.(eot|otf|woff|woff2|ttf|svg|jpg|jpeg|png|gif)(\?\S*)?$/,
            loader: 'file-loader?name=[name].[ext]'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: false
            },
            output: {comments: false}
        }),
        extractCSS,
        new OptimizeCssAssetsPlugin({cssProcessorOptions: { discardComments: {removeAll: true } }})
    ]
}