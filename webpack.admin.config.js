const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const Htmlplugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const plugins = [
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'vendor',
    //     minChunks: function (module) {
    //         return (
    //             /node_modules/.test(module.context) &&
    //             !/\.css$/.test(module.request)
    //         )
    //     }
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'manifest',
    //     minChunks: Infinity
    // }),
    new CopyWebpackPlugin([
        {
            from: 'src/js',
            to: 'js'
        },
        {
            from: 'src/img',
            to: 'img'
        },
        {
            from: 'src/css',
            to: 'css'
        },
    ]),
    new Htmlplugin({
        template: path.resolve('src', 'admin.html'),
        filename: 'admin.html',
        inject: 'body',
        minify: {
            removeComments: true,
        }
    }),
    new Htmlplugin({
        template: path.resolve('src', 'admin-gr.html'),
        filename: 'admin-gr.html',
        inject: 'body',
        minify: {
            removeComments: true,
        }
    }),
    new Htmlplugin({
        template: path.resolve('src', 'admin-qy.html'),
        filename: 'admin-qy.html',
        inject: 'body',
        minify: {
            removeComments: true,
        }
    }),
    new Htmlplugin({
        template: path.resolve('src', 'admin-login.html'),
        filename: 'admin-login.html',
        inject: 'body',
        minify: {
            removeComments: true,
        }
    }),
];

if (isProd) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                // drop_console: true,
                dead_code: true
            },
            sourceMap: true,
            output: {
                comments: false
            }
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            // allChunks: true,
        })
    );
}

module.exports = {
    entry: {
        'admin-entry': './src/admin-entry.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
            },
            {
                test: /\.(jpe?g|svg|png|gif|webp|ttf|eot|woff|woff2)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    publicPath: '../',
                    outputPath: '',
                    useRelativePath: false,
                    name: 'img/[name].[ext]'
                }
            },
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader?min=false&exclude=img/',
            },
            {
                test: /\.(scss|css)$/,
                use: isProd ? ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: false,
                                sourceMap: true,
                            }
                        },
                        'postcss-loader?sourceMap',
                        'sass-loader?sourceMap',
                    ],
                    fallback: "style-loader"
                }) : ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
        ]
    },
    plugins: plugins,
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 8086,
        // historyApiFallback: true
    }
};
