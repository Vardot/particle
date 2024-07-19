/**
 * PostCSS config
 */
const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");
const tailwindcss = require("tailwindcss");
const hexrgba = require("postcss-hexrgba");
const stylelint = require("stylelint");
const postcssReporter = require("postcss-reporter");

module.exports = ({ options, env }) => {
  return {
    plugins: [
      stylelint(),
      // tailwindConfig is set per *design system* webpack.config.js.
      tailwindcss({
        config: "./tailwind.config.js",
      }),
      // Hex in rgba like Sass
      hexrgba(),
      // Use .browserslistrc to determine CSS mutations
      postcssPresetEnv({
        features: {
          'is-pseudo-class': false,
        }
      }),
      // Heavy processing for production
      env === "production" && cssnano(),
      postcssReporter({ clearReportedMessages: true }),
    ],
  };
};
