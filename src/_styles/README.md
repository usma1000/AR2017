# Styles

This "Styles" folder is designated for all global stylesheet files.
The key file in this folder is `main` as it is designated as the bootstrapping file (intializes/imports all your stylesheets) and is included in the `base.nunjucks` file

## Adding third-party stylesheet libraries

```
npm install [package name] --save
```

**Using SCSS:**

```scss
// SCSS
@import 'node_modules/bootstrap-sass-official/scss/bootstrap';

// CSS
@import 'node_modules/normalize.css/normalize';
```
