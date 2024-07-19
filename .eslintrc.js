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
    "plugin:yml/recommended",
    "prettier",
  ],
  plugins: ["prettier"],
  root: true,
  globals: {
    drupalTranslations: true,
    once: true,
    tabbable: true,
    Drupal: true,
    drupalSettings: true,
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
    "no-plusplus": ["warn", {
      "allowForLoopAfterthoughts": true
    }],
    "no-param-reassign": ["off"],
    "no-prototype-builtins": ["off"],
    "valid-jsdoc": ["warn", {
      "prefer": {
        "returns": "return",
        "property": "prop"
      },
      "requireReturn": false
    }],
    "no-unused-vars": ["off"],
    "prefer-const": ["off"],
    "object-shorthand": ["off"],
    "no-inner-declarations": ["off"],
    "func-names": ["off"],
    "prefer-template": ["off"],
    "operator-linebreak": ["error", "after", { "overrides": { "?": "ignore", ":": "ignore" } }],
    "yml/indent": ["error", 2] 
  }
};
