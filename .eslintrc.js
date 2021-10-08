module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-mutating-props': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/require-v-for-key': 0,
    'vue/require-valid-default-prop': 0,
    'vue/no-parsing-error': 0,
    'no-undef': 0,
    'no-prototype-builtins': 0,
    'prettier/prettier': [
      'error',
      { singleQuote: true, semi: false, tabWidth: 2 },
    ],
  },
}
