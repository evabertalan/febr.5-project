'use strict';

var gulp = require('gulp'); 
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
  gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
    // .pipe(jshint.reporter('fail'));
});

gulp.task('watch', function() {
  gulp.watch('./*.js', ['jshint']);
});

gulp.task('default', ['watch']);
