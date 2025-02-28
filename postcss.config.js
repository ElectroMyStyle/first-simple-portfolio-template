/**
 * Created by elect
 * Developed by elect
 * Date: 28.02.2025
 * Time: 12:39
 * Telegram: @agscontent
 */

import autoprefixer from "autoprefixer";
import cssnanoPlugin from "cssnano";
import postCssCombineMediaQuery from "postcss-combine-media-query";

export default {
    plugins: [
        autoprefixer,
        postCssCombineMediaQuery,
        cssnanoPlugin({
            preset: [
                'default', {
                    discardComments: {
                        removeAll: true
                    }
                }
            ]
        })
    ]
}
