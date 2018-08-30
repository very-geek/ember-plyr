module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: ['ember', 'qunit'],
  extends: ['eslint:recommended', 'plugin:ember/recommended'],
  env: {
    browser: true,
  },
  globals: {
    Plyr: false,
  },
  rules: {},
  overrides: [
    {
      parser: 'typescript-eslint-parser',
      files: ['**/*.ts'],
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
      },
    },
    {
      files: [
        '.eslintrc.js',
        '.prettierrc.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js',
      ],
      excludedFiles: [
        'addon/**',
        'addon-test-support/**',
        'app/**',
        'tests/dummy/app/**',
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015,
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      rules: Object.assign(
        {},
        require('eslint-plugin-node').configs.recommended.rules,
        {
          // add your custom rules and overrides for node files here
        }
      ),
    },
  ],
};
