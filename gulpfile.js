'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  clean = require('gulp-clean'),
  jslint = require('gulp-jslint'),
  jsdoc = require("gulp-jsdoc3"),
  server = require('gulp-server-livereload'),
  port = 8080;

// Testes de qualidade de código
gulp.task('lint', function() {
  return gulp.src([
      '**/*.js',
      '!node_modules/**',
      '!app/libs/**'
    ])
    .pipe(jslint())
    .pipe(jslint.reporter('stylish', 'errors'));
});

// Gera documentação usando as marcações com js-doc3
gulp.task('jsdoc', function(cb) {
  return gulp.src([
      'app/components/**/*.js',
      'README.md'
    ])
    .pipe(jsdoc(cb));
});

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
  gulp.watch('components/**/*.js', ['lint'])
});

// Gera um build para deploy no servidor
gulp.task('build', function() {
  return gulp.src([
      'app/components',
      'app/fonts',
      'app/images',
      'app/stylesheets/app.css',
      'app/translate',
      'app/404.html',
      'app/index.html',
      'app/robots.txt',
      'app/libs'
    ])
    .pipe(gulp.dest('dist/'));
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
