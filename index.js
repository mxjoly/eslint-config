const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    commonjs: true,
    browser: true,
    es6: true,
    jest: true,
    node: true,
    serviceworker: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  plugins: ['import', 'unicorn', 'jest', 'prettier'],
  rules: {
    'arrow-parens': [2, 'always'],
    'brace-style': [2, '1tbs'],
    'block-scoped-var': 2,
    'dot-location': [1, 'property'],
    'dot-notation': 2,
    'eol-last': 2,
    eqeqeq: 2,
    'jsx-quotes': [2, 'prefer-double'],
    'no-alert': 2,
    'no-console': 0,
    'no-else-return': [2, { allowElseIf: false }],
    'no-empty': [2, { allowEmptyCatch: true }],
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extra-semi': 2,
    'no-extend-native': 2,
    'no-fallthrough': 2,
    'no-implicit-coercion': 2,
    'no-implied-eval': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-restricted-globals': [2].concat(restrictedGlobals),
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': [
      2,
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-unused-vars': [2, { argsIgnorePattern: '^_', caughtErrors: 'none' }],
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-void': 2,
    'no-var': 2,
    'one-var': [2, 'never'],
    'prefer-const': 2,
    'prefer-arrow-callback': 2,
    quotes: [2, 'single', { avoidEscape: true }],
    yoda: 2,

    // Import plugins specific rules
    'import/first': 2,
    'import/no-unresolved': 2,
    'import/no-unassigned-import': 0,
    'import/named': 2,
    'import/no-amd': 2,
    'import/no-webpack-loader-syntax': 2,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,

    // Unicors plugins specific rules
    'unicorn/error-message': 2,
    'unicorn/escape-case': 2,
    'unicorn/expiring-todo-comments': 2,
    'unicorn/explicit-length-check': 2,
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/import-index': 2,
    'unicorn/no-abusive-eslint-disable': 2,
    'unicorn/no-instanceof-array': 2,
    'unicorn/no-console-spaces': 2,
    'unicorn/no-array-callback-reference': 2,
    'unicorn/no-for-loop': 2,
    'unicorn/no-hex-escape': 2,
    'unicorn/no-unreadable-array-destructuring': 2,
    'unicorn/no-unused-properties': 2,
    'unicorn/no-useless-undefined': 2,
    'unicorn/no-zero-fractions': 2,
    'unicorn/number-literal-case': 2,
    'unicorn/prefer-add-event-listener': 2,
    'unicorn/throw-new-error': 2,

    // Prettier plugin
    'prettier/prettier': 'error',
  },
};
