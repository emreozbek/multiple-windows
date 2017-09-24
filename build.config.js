
var webpack = require('webpack');
module.exports = {
    entry: [
        "./src/Index.js"
    ],
    output: {
        filename: "./build/bundle.js"
    },
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
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
            loader: 'file-loader?name=build/[name].[ext]',
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
            }
        })
    ]
}