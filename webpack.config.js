

var port = 3000;
module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:' + port,
        "./js/Index.js"
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
            loader: 'file-loader?name=/[path][name].[ext]',
        }]
    },
    devServer: {
        contentBase: './build',
        watchContentBase: true,
        port: port,
        inline: true
    }
}