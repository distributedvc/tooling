module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    useJSXTextNode: true,
    project: './tsconfig.json',
  },
  env: {
    node: true,
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['graphql', '@typescript-eslint'],
  // add your custom rules here
  rules: {
    '@typescript-eslint/camelcase': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 100,
      },
    ],
    'max-classes-per-file': 0,
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        mjs: 'never',
        ts: 'never',
      },
    ],
    'no-console': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'import/prefer-default-export': 0,
    'import/no-dynamic-require': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'import/no-cycle': 0,
    'class-methods-use-this': 0,
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
};
