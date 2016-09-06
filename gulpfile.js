/* Ready for some gulpification */

// Require vars
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');

// Location vars
var src = './sass/**/*.scss',
    output = './css',
    html = '*.html',
    js = './js/**/*.js';

// Server
gulp.task('connect', function() {
    connect.server({
      livereload: true,
      root: '',
      port: 9999
    });
});

// Sass
gulp.task('sass', function() {
    return gulp.src(src)
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(gulp.dest(output))
      .pipe(connect.reload());
});

// Html
gulp.task('html', function() {
  return gulp.src(html)
    .pipe(connect.reload());
});

// Javascript
gulp.task('js', function() {
  return gulp.src(js)
    .pipe(connect.reload());
});

// Watch for file changes
gulp.task('watch', function() {
  gulp.watch([src], ['sass']);
  gulp.watch([html], ['html']);
  gulp.watch([js], ['js']);
});

// Gulp - cmon, your turn!
gulp.task('default', ['connect', 'watch', 'html', 'sass', 'js']);