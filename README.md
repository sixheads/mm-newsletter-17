# README #

### Setup ###
1. Navigate to project folder with terminal
2. Install NPM dependencies using the package.json file:
npm install
3. OR install dependencies manually:
npm install gulp gulp-util gulp-sass gulp-sourcemaps gulp-plumber gulp-autoprefixer gulp-notify gulp-imagemin gulp-cache gulp-rename browser-sync gulp-clean-css gulp-concat gulp-uglify gulp-svgo susy --save-dev

### Gulp Tasks ###

'gulp watch' runs a normal watch task and automatic reload via browsersync
'gulp sassBuild' runs a minify task on the SCSS (JS is concatenated and minified automatically in the watch task)