module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.css',
      options: {
        singleQuote: true,
      },
    },
    {
      files: '*.hbs',
      options: {
        singleQuote: true,
      },
    },
  ],
};
