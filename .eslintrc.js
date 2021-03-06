// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'airbnb-base'
    ],
  // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "indent": ["error", 4],
        "space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always",
        }],
        "padded-blocks": 0,
        "no-console": 0,
        "comma-dangle": 0,
        "semi": [1, "always"],
        "no-param-reassign": ["error", {"props": false }],
        "quotes": 0,
        "arrow-parens": ["error", "as-needed"],
        "max-len": 0,
        "no-trailing-spaces": 0,
        "eol-last": 0,
        "no-plusplus": 0,
        "func-names": 0
    }
}
