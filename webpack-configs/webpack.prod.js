/**
 * Created by elect
 * Developed by elect
 * Date: 28.02.2025
 * Time: 15:01
 * Telegram: @agscontent
 */

import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import {merge} from "webpack-merge";

import common from "./webpack.common.js";
import paths from "./paths.js";

export default merge(common, {
    // Set the mode to development or production
    mode: 'production',

    devtool: false,

    output: {
        filename: 'assets/js/chat-app-bundle.[contenthash].js',
        path: paths.build,
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/i,
                include: paths.srcSass,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Extract CSS from JS files
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false
                        }
                    },
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                            modules: false,
                        },
                    },
                    // Translates autoprefixer and cssnano
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: true // True - auto loading file - postcss.config.js
                            }
                        }
                    },
                    'sass-loader',
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css',
            chunkFilename: '[id].css',
        }),
    ],

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                terserOptions: {
                    output: {
                        comments: false,
                    }
                }
            }),
        ],
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                vendor: false,
                styles: {
                    name: 'styles',
                    type: 'css/mini-extract',
                    chunks: 'all',
                    enforce: true
                },
                mainStyle: {
                    name: 'main-styles',
                    test: '/main\.scss',
                    type: 'css/mini-extract',
                    chunks: 'all',
                    enforce: true
                },
                chatStyle: {
                    name: 'chat-styles',
                    test: '/main\.scss',
                    type: 'css/mini-extract',
                    chunks: 'all',
                    enforce: true
                },
            }
        }
    },

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});
