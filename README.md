
# UTCWEB Theme

The UTCWEB theme includes several npm scripts to facilitate theme development, building, and linting. These scripts help in automating tasks like compiling assets, watching for changes during development, and ensuring code quality.

Current toolset uses node 20. To switch node version;
```
nvm use 20
```

## Available Scripts

### Development Scripts

- **dev:drupal**

  Runs the webpack in development mode and watches for any file changes. This is useful during theme development as it automatically rebuilds assets when files are changed.

  ```bash
  npm run dev:drupal
  ```

- **build:drupal**

  Builds the theme assets for production. This script runs webpack in production mode, optimizing the assets for deployment.

  ```bash
  npm run build:drupal
  ```

- **build:drupal:dev**

  Similar to `build:drupal`, but it builds the assets in development mode. It's useful for debugging or when you need unminified assets for a development environment.

  ```bash
  npm run build:drupal:dev
  ```

### Linting Scripts

- **lint**

  Runs both JavaScript and CSS linting tasks. This script ensures that your code follows the specified style guides and helps in identifying common coding issues.

  ```bash
  npm run lint
  ```

- **lint:js**

  Lints JavaScript files in the theme to identify and report on patterns found in ECMAScript/JavaScript code.

  ```bash
  npm run lint:js
  ```

- **lint:css**

  Lints CSS files in the theme. It helps in avoiding errors and enforcing consistent conventions in your styles.

  ```bash
  npm run lint:css
  ```

### Formatting Scripts

- **fmt**

  Formats both JavaScript and CSS files using Prettier and fixes linting errors where possible. It ensures consistent formatting across your theme's codebase.

  ```bash
  npm run fmt
  ```

- **fmt:js**

  Formats JavaScript files using ESLint's auto-fix option and Prettier. It helps in maintaining a clean and consistent codebase.

  ```bash
  npm run fmt:js
  ```

- **fmt:css**

  Formats CSS files by fixing linting errors automatically and then running Prettier to ensure consistent styling.

  ```bash
  npm run fmt:css
  ```

## Conclusion

These npm scripts are set up to help maintain a high-quality codebase and to streamline the development process. Use them regularly as part of your development workflow to minimize errors and maintain consistent coding standards.
