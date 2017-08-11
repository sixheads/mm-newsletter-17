// DEPENDENCIES
var gulp  = require('gulp'),
    gutil = require('gulp-util'),

    // SASS & CSS
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),

    // JavaScript & jQuery
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),

    // Errors
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),

    // SVG & PNG - Images
    cache = require('gulp-cache'),
    svgo = require('gulp-svgo'),

    rename = require('gulp-rename'),
    browserSync = require('browser-sync');



// TASKS

// Plumber Function for errors
function customPlumber() {
    return plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
    });
}

// BrowserSync
gulp.task('browserSync', function() {
    browserSync.init({
        server: "./dist"
    });
});

// SASS Task
gulp.task('sass', function(){
    return gulp.src('dev/scss/style.scss')
    .pipe(customPlumber()) //custom error message from customPlumber function
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions', 'ie 8-9'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.reload({
        stream: true
    }))
    .pipe(notify({ message: 'Sass task complete' }));
});

// SASS Build
gulp.task('sassBuild', function(){
    return gulp.src('dev/scss/style.scss')
    .pipe(customPlumber()) //custom error message from customPlumber function
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions', 'ie 8-9'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.reload({
        stream: true
    }))
    .pipe(notify({ message: 'Sass Build task complete' }));
});

// SVG - optimise
gulp.task('svg', function () {
    gulp.src('dev/svg/*')
        .pipe(svgo())
        .pipe(gulp.dest('dist/img/'))
        .pipe(notify({ message: 'SVG task complete' }));
});

// Javascript Tools
gulp.task('scripts', function() {  
    return gulp.src(['dev/js/plugins.js', 'dev/js/my-scripts.js'])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest( 'dist/js/' ));
});

// JS Build
gulp.task('jsBuild', function() {  
    return gulp.src(['dev/js/plugins.js', 'dev/js/my-scripts.js'])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest( 'dist/js/' ));
});

// WATCH task
gulp.task('watch', ['browserSync', 'sass', 'scripts'], function(){
    gulp.watch('dev/scss/*.scss', ['sass']);
    gulp.watch('dev/js/*.js', ['scripts']);
    gulp.watch('dist/**').on('change', browserSync.reload);
});