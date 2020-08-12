var gulp = require('gulp');
var sass = require('gulp-sass');
const { parallel } = require('gulp');


function convertSass() {
  return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in src/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('dist'))
}

function copyHtml() {
  return gulp.src('src/*.html') // Copy HTML to dist
    .pipe(gulp.dest('dist'))
}

function copyImg() {
  return gulp.src('src/img/**/*') // Copy img to dist
    .pipe(gulp.dest('dist/img'))
}

function copyFonts() {
  return gulp.src('src/fonts/**/*') // Copy font to dist
    .pipe(gulp.dest('dist/fonts'))
}

function copyJs() {
  return gulp.src('src/*.js') // Copy font to dist
    .pipe(gulp.dest('dist'))
}

exports.build = parallel(convertSass, copyHtml, copyImg, copyFonts, copyJs);
