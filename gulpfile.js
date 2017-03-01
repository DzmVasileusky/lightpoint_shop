'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');
var csso = require('gulp-csso');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rigger = require('gulp-rigger');
var exec = require('child_process').exec;

// app scripts
gulp.task('scripts', function() {
  return gulp.src('app/app.rigger.js')
    .pipe(rigger())
    /*.pipe(babel({
        presets: ['es2015']
    }))*/
    //.pipe(sourcemaps.init())
    //.pipe(uglify())
    //.pipe(sourcemaps.write('/'))
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('assets/js'));
});

// styles
gulp.task('styles', function() {
  return gulp.src('assets/css/src/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'Android 3', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 8', 'ie 9'],
      cascade: false
    }))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('assets/css/'))
    .pipe(csso())
    .pipe(sourcemaps.write('/'))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('assets/css/'));
});

// default task
gulp.task('watch', function() {
  gulp.watch(['assets/js/src/*.js', 'assets/js/src/**/*.js', 'app/*.js', 'app/**/*.js', 'app/**/**/*.js'], ['scripts']);
  gulp.watch(['assets/css/src/*.scss', 'assets/css/src/**/*.scss', 'assets/css/src/**/**/*.scss', 'assets/css/src/*.css', 'assets/css/src/**/*.css', 'assets/css/src/**/**/*.css'], ['styles']);
  exec('node app.js');
});

gulp.task('default', [ 'styles', 'scripts' ]);