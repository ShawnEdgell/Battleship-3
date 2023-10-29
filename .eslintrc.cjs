module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    "jest/globals": true  // Added Jest globals
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended'  // Added Jest recommended rules
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '18.2'
    }
  },
  plugins: [
    'react-refresh',
    'jest'  // Added Jest plugin
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
  },
}
