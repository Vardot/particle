/**
 * Webpack config.
 */
const path = require("path");
const { DefinePlugin, ProgressPlugin } = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const { mergeWithRules } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RunScriptAfterEmit = require("./tools/webpack/run-script-after-emit");

// Constants: environment
const { NODE_ENV } = process.env;
const shared = {
  entry: path.resolve(__dirname, "./particle_theme/index.js"),
  output: {
    path: path.join(__dirname, "dist/assets"),
    publicPath: "dist/assets",
  },
  // development|production
  mode: NODE_ENV,
  devtool: NODE_ENV === "development" ? "eval" : "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "resolve-url-loader",
            options: {
              sourceMap: true,
              root: "",
            },
          },
          {
            // PostCSS config at ./postcss.config.js
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                ident: "postcss",
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        // @babel runtime and core must NOT be transformed by babel
        exclude: /@babel(?:\/|\\{1,2})runtime|core-js/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]?[hash]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]?[hash]",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: NODE_ENV === "production",
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          sourceMap: NODE_ENV === "production",
        },
      }),
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js"],
      exclude: ["/node_modules/"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    // Only add ProgressPlugin for non-production env.
    ...(NODE_ENV === "production"
      ? []
      : [new ProgressPlugin({ profile: false })]),
  ],
  resolve: {
    extensions: [".ts", ".js", ".css"],
  },
};

const dev = {
  stats: {
    children: false,
    entrypoints: false,
  },
  plugins: [
    new RunScriptAfterEmit({
      exec: [
        // prettier-ignore
        `echo \n🚀 Webpack Drupal ${NODE_ENV} build complete! Edit 
        webpack.config.js to replace this line with
        anything you'd like run after rebuilding assets, e.g.
        'drupal cr all'. 🚀\n`,
      ],
    }),
  ],
};

const prod = {
  stats: {
    children: false,
    entrypoints: false,
    chunks: false,
  },
};

module.exports = mergeWithRules({
  module: {
    rules: {
      test: "match",
      use: "prepend",
    },
  },
})(
  // App config shared between dev and prod modes
  shared,
  // App config specific to dev or prod
  NODE_ENV === "development" ? dev : prod,
);
