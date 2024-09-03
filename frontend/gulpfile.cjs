const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp
    .src('./src/styles/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles/css'));
}

const watch = () => {
  gulp.watch('./src/styles/sass/**/*.scss', gulp.series(buildStyles));
};

exports.buildStyles = buildStyles;
exports.watch = watch;