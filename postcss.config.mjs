/**
 * PostCSS config
 */
import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";
import tailwindcss from "tailwindcss";
import hexrgba from "postcss-hexrgba";
import stylelint from "stylelint";
import postcssReporter from "postcss-reporter";

export default ({ options, env }) => {
  return {
    plugins: [
      stylelint(),
      // tailwindConfig is set per *design system* webpack.config.js.
      tailwindcss({
        config: './source/default/tailwind.config.js',
      }),
      // Hex in rgba like Sass
      hexrgba(),
      // Use .browserslistrc to determine CSS mutations
      postcssPresetEnv(),
      // Heavy processing for production
      env === 'production' && cssnano(),
      postcssReporter({ clearReportedMessages: true }),
    ],
  };
};
