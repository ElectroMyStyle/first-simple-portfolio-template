/**
 * Created by elect
 * Developed by elect
 * Date: 28.02.2025
 * Time: 12:48
 * Telegram: @agscontent
 */

import {CleanWebpackPlugin} from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {resolve} from "path";

import paths from "./paths.js";

export default {
    // Where webpack looks to start building the bundle
    entry: {
        main: paths.src + '/index.js',
    },

    // Where webpack outputs the assets and bundles
    output: {
        assetModuleFilename: 'assets/images/[name][ext]',
        filename: 'assets/js/[name].bundle.js',
        path: paths.build,
        publicPath: '/'
    },

    // Determine how modules within the project are treated
    module: {
        rules: [
            // JavaScript: Use Babel to transpile JavaScript files
            {
                test: /\.m?js$/,
                exclude: /^(node_modules|bower_components)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env' ]
                    }
                }
            },

            // Copy files to build folder
            {
                test: /\.(json|txt)$/,
                type: 'asset/source'
            },

            // Images: Copy image files to build folder
            {
                test: /\.(png|jpe?g|gif|ico|svg|webp)$/,
                type: 'asset/resource',
                include: paths.srcImages,
                generator: {
                    filename: `[name].[ext]`
                }
            },

            // Fonts and SVGs: Inline files
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                type: 'asset/inline',
                include: paths.srcFonts,
            },
        ],
    },

    // Customize the webpack build process
    plugins: [
        // Removes/cleans build folders and unused assets when rebuilding
        new CleanWebpackPlugin({
            verbose: true
        }),

        // Copies files from target to destination folder
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.public,
                    to: '',
                    globOptions: {
                        ignore: ['*.DS_Store'],
                    },
                    noErrorOnMissing: true,
                },
                {
                    from: paths.srcImages,
                    to: 'assets/images',
                    globOptions: {
                        ignore: ['*.DS_Store'],
                    },
                    noErrorOnMissing: true,
                },
            ]
        }),

        // Generates an HTML file from a template
        new HtmlWebpackPlugin({
            hash: false,
            title: 'Simple portfolio template',
            favicon: resolve(paths.public, 'favicon.ico'),
            filename: 'index.html',
            template: resolve(paths.srcViews, 'index.html'),
            inject: true,
            /*minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }*/
        }),
    ],

    resolve: {
        modules: [paths.src, 'node_modules'],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': paths.src,
            assets: paths.public,
        }
    },

    // Statistic
    stats: {
        children: true,
        colors: true,
        errorDetails: true
    }
}
