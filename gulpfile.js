var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var srcDir = './sass/';
var dstDir = './public/css/';

gulp.task('sass', function () {
  return gulp.src(srcDir + 'style.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(dstDir))
});

gulp.task('watch', ['sass'], function () {
  gulp.watch([srcDir + '**/*.scss'], ['sass']);
});

gulp.task('default', ['sass']);
