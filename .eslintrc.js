module.exports = {
    env: { es6: true, node: true, browser: true, jest: true },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
    parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
    rules: { 'no-console': 'off' },
};
