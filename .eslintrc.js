/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'prettier',
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
  ],
};
