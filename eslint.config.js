/**
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 * @type {Array<import("eslint").Linter.Config>}
 */
export default [
    {
        files: [
            "src/**/*.js"
        ],
        ignores: [
            "webpack-configs/**/*.js",
            "src/index.js"
        ],
        languageOptions: {
            ecmaVersion: 2018,
            sourceType: "module"
        },
        rules: {
            "no-var": "error",
            "semi": "error",
            "indent": "error",
            "no-multi-spaces": "error",
            "space-in-parens": "error",
            "no-multiple-empty-lines": "error",
            "prefer-const": "error",
            "no-use-before-define": "error"
        }
    }
];
