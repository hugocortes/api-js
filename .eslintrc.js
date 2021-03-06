module.exports = {
  extends: "prettier",
  plugins: [
    "prettier"
  ],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'no-unused-vars': 2,
    'no-undef': 2,
    'comma-dangle': ['error', 'never'],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id']
      }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
