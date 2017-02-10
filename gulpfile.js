'use strict';

var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Clean
gulp.task('clean', function(){
  del(['.tmp', 'dist']);
});

// HTML
gulp.task('html', function(){
  return gulp.src([
    'src/html/**/*.html'
  ])
  .pipe(gulp.dest('dist/html'));
});

// CSS
gulp.task('styles', function(){
  return gulp.src([
    'src/static/**/*.scss'
  ])
  .pipe(plumber({
    errorHandler: function(err) {
      console.log(err.messageFormatted);
      this.emit('end');
    }
  }))
  .pipe(sass())
  .pipe(gulp.dest('.tmp/static'));
});

gulp.task('styles:build', function(){
  return gulp.src([
    'src/static/**/*.scss'
  ])
  .pipe(plumber({
    errorHandler: function(err) {
      console.log(err.messageFormatted);
      this.emit('end');
    }
  }))
  .pipe(sass())
  .pipe(gulp.dest('dist/static'));
});

// JavaScript
gulp.task('scripts', function(){
  return gulp.src([
    'src/static/**/*.js'
  ])
  .pipe(plumber({
    errorHandler: function(err) {
      console.log(err.messageFormatted);
      this.emit('end');
    }
  }))
  .pipe(gulp.dest('.tmp/static'))
});

gulp.task('scripts:build', function(){
  return gulp.src([
    'src/static/**/*.js'
  ])
  .pipe(plumber({
    errorHandler: function(err) {
      console.log(err.messageFormatted);
      this.emit('end');
    }
  }))
  .pipe(uglify({preserveComments: 'some'}))
  .pipe(gulp.dest('dist/static'))
});

// Copy Images
gulp.task('copyImages', function(){
  return gulp.src([
    'src/static/**/*.png',
    'src/static/**/*.jpg',
    'src/static/**/*.gif'
  ])
  .pipe(gulp.dest('dist/static'))
});

gulp.task('reload', function(){
  browserSync.reload();
});

// Server
gulp.task('server', function(){ ['html', 'styles', 'scripts', 'copyImages']
  browserSync.init({
    server: ['.tmp', 'dist']
  });
});

// Watch
gulp.task('watch', ['server'], function(){
  gulp.watch('src/html/**/*.html', ['html', 'reload']);
  gulp.watch('src/static/**/*.scss', ['styles', 'reload']);
  gulp.watch('src/static/**/*.js', ['scripts', 'reload']);
});

// Build
gulp.task('build', ['clean'], function(){
  return runSequence(
    'html',
    'styles:build',
    'scripts:build',
    'copyImages'
  );
});
