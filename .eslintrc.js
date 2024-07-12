/**
 * Use AirBnB ES6 linting standards
 *
 * Rule reference: http://eslint.org/docs/rules
 * Individual rule reference: http://eslint.org/docs/rules/NAME-OF-RULE
 */

module.exports = {
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["prettier"],
  root: true,
  globals: {
    Drupal: true,
    jQuery: true,
    _: true,
    BUILD_TARGET: true,
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    eqeqeq: "error",
    "no-console": [0], // turned off for now while we are console.logging everywhere.
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
