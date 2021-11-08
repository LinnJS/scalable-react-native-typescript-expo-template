module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'plugin:react/recommended',
    'prettier',
    'standard',
    'eslint:recommended',
    'plugin:react-native-a11y/all'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
    'import',
    'react-native',
    'react-native-a11y'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: [ 'node_modules/*', 'build/*', 'dist/*', '.expo/*', '.expo-shared/*' ],
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    semi: [ 2, 'always' ],

    // eslint-plugin-import
    'import/first': 1,
    'import/newline-after-import': 1,
    'import/no-cycle': 2,
    'import/no-duplicates': 1,

    // eslint-plugin-prettier
    'prettier/prettier': 0,

    // eslint-plugin-react
    'react/prop-types': 0,

    // eslint-plugin-react-native
    'react-native/no-color-literals': 1,
    'react-native/no-inline-styles': 1,
    'react-native/no-single-element-style-arrays': 0,
    'react-native/no-unused-styles': 1
  }
};
