'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint-js', function() {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('js', ['lint-js'], function() {
    return gulp.src('src/**/*.js')
        .pipe(gulp.dest('dist/'));
});

gulp.task('css', function() {
    return gulp.src('src/**/*.css')
        .pipe(gulp.dest('dist/'));
});

gulp.task('tpl.html', function() {
    return gulp.src('src/**/*.tpl.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['js', 'css', 'tpl.html']);
