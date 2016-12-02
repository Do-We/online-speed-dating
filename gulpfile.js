var gulp = require('gulp');
var gutil = require('gulp-util');
var gconcat = require('gulp-concat');
var guglify = require('gulp-uglify');
var grename = require('gulp-rename');

gulp.task('min', function() {
  gulp.src('Compiled/Transpiled/**/*.js')
  .pipe(gconcat('scripts.js'))
  .pipe(grename('scripts.min.js'))
  .pipe(guglify())
    .on('error', gutil.log)
  .pipe(gulp.dest('Compiled/Bundled'));
});

gulp.watch('Compiled/Transpiled/**/*.js', 'min')
.on('change', function(event) {
  console.log('Bundled was changed due to ', event);
});