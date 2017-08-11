# README #

### What is this repository for? ###

* A basic starter setup for a static HTML site based on HTML5 boilerplate
* Version 1.0.0
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

1. Create MAMP server for project: projectname

3. Navigate to project folder with terminal

4. Install NPM dependencies using the package.json file:
yarn install

5. Install dependencies:
yarn add gulp gulp-util gulp-sass gulp-sourcemaps gulp-plumber gulp-autoprefixer gulp-notify gulp-imagemin gulp-cache gulp-rename browser-sync gulp-clean-css gulp-concat gulp-uglify gulp-svgo susy --dev

6. Update gulpfile proxy server for browser-sync to point to the MAMP server set up if necessary

7. Set up sublimeText project


### Project dependencies ###

* [Susy grid system](http://susydocs.oddbird.net/en/latest/install/) 


### How to add additional dependencies ###

Susy is already included but here's how it works. This means we don't need to bother with Bower anymore.

* Add Susy to node_modules: yarn add susy --dev
* Import into style.scss file: import '../../node_modules/susy/sass/susy';
* Not sure how this works with JS yet
