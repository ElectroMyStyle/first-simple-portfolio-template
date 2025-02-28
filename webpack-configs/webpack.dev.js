/**
 * Created by elect
 * Developed by elect
 * Date: 28.02.2025
 * Time: 12:51
 * Telegram: @agscontent
 */

import {merge} from "webpack-merge";

import common from "./webpack.common.js";
import paths from "./paths.js";

export default merge(common, {
    // Set the mode to development or production
    mode: 'development',

    // Spin up a server for quick development
    devServer: {
        allowedHosts: 'all', // Разрешает доступ с любого хоста
        compress: true,
        client: {
            overlay: {
                errors: true, // Показывать оверлей с ошибками
                warnings: false, // Не показывать предупреждения
            },
        },
        host: '0.0.0.0',
        hot: true,
        open: 'http://localhost:3000',
        liveReload: true,
        port: 3000,
        static: {
            directory: paths.public,
            watch: true, // Отслеживает изменения в статических файлах
        },
        watchFiles: [
            paths.srcJS + '/**/*.js',
            paths.srcSass + '/**/*.+(sass|scss|css)',
            paths.srcViews + '/**/*.html',
        ],
    },

    // Control how source maps are generated
    devtool: 'inline-source-map',

    module: {
        rules: [
            // Styles: Inject CSS into the head with source maps
            {
                test: /\.(sass|scss|css)$/i,
                include: paths.srcSass,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    // Translates autoprefixer and cssnano
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: true // True - auto loading file - postcss.config.js
                            },
                            sourceMap: true
                        }
                    },
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: [

                                ]
                            },
                            sourceMap: true
                        }
                    }
                ]
            },
        ]
    },

    plugins: [],

    target: 'web',
});
