# CWRU Annual Report 2017 Site
Quick start:
- `cd ~/Documents/`
- `git clone https://github.com/usma1000/AR2017.git`
- `cd AR2017`
- `npm install`
- `npm install -g yo`
- `npm install -g generator-yeogurt`
- `gulp serve --open`
- May need to refresh the browser if you see a blank page

## Issues
- Featured links don't span entire li. Only text/img are clickable
- Slider should be removed and each story should live on its own page
- When clicking through to story page, correct link should be active in sidebar

## ToDo
- Design/create home page
- Design/create one-col page layout
- Design/create facts & figures page
- Design/create president's letter page
- Responsiveness
- Accessibility
- Add thumbnails to secondary stories in sidenav?
- Find SVG CWRU logo
- Integrate PatternLab?

## Waiting On
- Get final PDF from Emma and link to topnav
- Add final background images
- Crop and resize all images

## Documentation Links

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

`yo yeogurt:layout contact --layout=one-col`: Optional layout to extend from (base is default).
