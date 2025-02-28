/**
 * Created by elect
 * Developed by elect
 * Date: 28.02.2025
 * Time: 12:39
 * Telegram: @agscontent
 */

export default {
    plugins: [
        require('autoprefixer'),
        require('postcss-combine-media-query'),
        require('cssnano')({
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
