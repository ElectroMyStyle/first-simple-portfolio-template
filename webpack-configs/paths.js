/**
 * Created by elect
 * Developed by elect
 * Date: 28.02.2025
 * Time: 12:31
 * Telegram: @agscontent
 */

import {resolve} from "path";

export default {
    // Source files
    src: resolve('./src'),

    // Source SCSS and SASS files
    srcSass: resolve('./src/scss'),

    // Source template part files
    srcFonts: resolve('./src/fonts'),
    srcImages: resolve('./src/images'),
    srcJS: resolve('./src/js'),
    srcPartials: resolve('./src/views/partials'),
    srcViews: resolve('./src/views'),

    // Productions build files
    build: resolve('./dist'),

    // Static files that get copied to build folder
    public: resolve('./src/public'),
};
