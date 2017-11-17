# CWRU Annual Report 2017 Site

## Technologies used

Styles
- [Sass](http://sass-lang.com/) via ([node-sass](https://github.com/sass/node-sass))

Markup
- [Nunjucks](https://mozilla.github.io/nunjucks/)

Optimization
- [Imagemin](https://github.com/imagemin/imagemin)
- [Uglify](https://github.com/mishoo/UglifyJS)

Server
- [BrowserSync](http://www.browsersync.io/)

Linting
- [ESlint](http://eslint.org/)

Automation
- [Gulp](http://gulpjs.com)

Code Management
- [Editorconfig](http://editorconfig.org/)
- [Git](https://git-scm.com/)


## Gulp tasks

`gulp --production`: Same as `gulp serve --production` also run `gulp test` and  not boot up production server

`gulp serve`: Compiles preprocessors and boots up development server
`gulp serve --open`: Same as `gulp serve` but will also open up site/app in your default browser
`gulp serve --production`: Same as `gulp serve` but will run all production tasks so you can view the site/app in it's final optimized form

`gulp test`: Lints all `*.js` file in the `source` folder using eslint

***Adding the `--debug` option to any gulp task displays extra debugging information (ex. data being loaded into your templates)***

## Generators

### Pages

`yo yeogurt:page contact`: Creates a new page with proper folder structure and basic settings.
`yo yeogurt:page contact --layout=one-col`: Optional layout import.

### Modules

`yo yeogurt:module header`: Creates a new module with SCSS, js, and nunjucks files.
`yo yeogurt:module link --atomic=atom`: Optional atomic design level (atom, molecule, organism).

### Layout

`yo yeogurt:layout one-col`: Creates a new layout file.
`yo yeogurt:page contact --layout=one-col`: Optional layout to extend from (base is default).
