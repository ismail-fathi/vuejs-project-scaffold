/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  ignorePatterns: [
    '**/node_modules/**',
    '**/dist/**',
    '**/public/**',
    '**/functions/lib/**',
  ],
  rules: {
    // Warn on console.log, but allow other console methods
    'no-console': [process.env.NODE_ENV === 'production' ? 'error' : 'warn', { allow: ['warn', 'error', 'info'] }],
    "vue/attributes-order": 'error'
  },
}
