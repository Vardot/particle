/**
 * Webpack config for design system
 */

const path = require('path');

const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

const namespaces = require('./namespaces');

// Constants: root
const { ASSETS_ATOMIC_FOLDER } = require('../../particle.root.config');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, '_patterns'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: ASSETS_ATOMIC_FOLDER,
          context: path.resolve(__dirname),
          emit: true,
        },
      },
    ],
  },
  plugins: [
    // Sprite system options
    new SVGSpritemapPlugin(
      path.resolve(namespaces.atoms, 'svg/icons/**/*.svg'),
      {
        output: {
          filename: 'images/spritemap.svg',
          svg4everybody: true,
          svgo: true,
        },
        styles: {
          filename: '~svg-icons.css',
        },
      }
    ),
  ],
  resolve: {
    // JavaScript can import other components via shorthand, eg:
    //   `import thing from 'atoms/thing';`
    alias: namespaces,
    extensions: ['.js', '.json'],
  },
};
