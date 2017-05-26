'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  clean = require('gulp-concat'),
  server = require('gulp-server-livereload'),
  port = 8080;

// Compila Sass para Css
gulp.task('sass', function() {
  return gulp.src([
      'app/stylesheets/sass/reset.scss',
      'app/stylesheets/sass/layout.scss',
      'app/stylesheets/sass/fonts.scss',
      'app/stylesheets/sass/header.scss',
      'app/stylesheets/sass/**/*.scss',
      'app/stylesheets/sass/footer.scss'
    ])
    .pipe(concat('app.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/stylesheets/'));
});

// Observa mudanças para fazer reload
gulp.task('watch', function() {
  gulp.watch('app/stylesheets/sass/**/*.scss', ['sass']);
  // gulp.watch('scripts/**/*.js', ['babel'])
});

// Inicia o servidor
gulp.task('default', ['watch'], function() {
  gulp.src('app/')
    .pipe(server({
      livereload: true,
      open: true,
      port: port
    }));
});
