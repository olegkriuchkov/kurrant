module.exports = {
  root: true,
  extends: [
    'airbnb',
    'plugin:react/recommended',
    '@react-native-community',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'formatjs', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/prop-types': 0,
    'import/no-unresolved': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'react/no-unused-prop-types': 'off',
    'formatjs/no-offset': 'error',
    'formatjs/no-multiple-whitespaces': 1,
    'formatjs/no-camel-case': 'error',
    'formatjs/enforce-placeholders': 'error',
    'formatjs/blacklist-elements': 'error',
  },

  ignorePatterns: [
    '**/native-base-theme/**/*.js',
    'metro.config.js',
    'plopfile.js',
    '**/*.json',
  ],
  overrides: [
    {
      files: ['**/*.jsx'],
      rules: {
        'explicit-function-return-type': 'off',
      },
    },
    {
      files: ['**/*.stories.jsx'],
      rules: {
        'react-native/no-inline-styles': 'off',
      },
    },
  ],
};
