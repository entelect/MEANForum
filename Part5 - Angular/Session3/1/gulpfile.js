'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var inject = require('gulp-inject');
var KarmaServer = require('karma').Server;

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

gulp.task('index.html', ['js', 'css', 'tpl.html'], function() {
    var js = gulp.src('dist/**/*.js');
    var css = gulp.src('dist/**/*.css');
    
    return gulp.src('src/index.html')
        .pipe(inject(js, {
            ignorePath: 'dist',
            addRootSlash: false
        }))
        .pipe(inject(css, {
            ignorePath: 'dist',
            addRootSlash: false
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('test', ['index.html'], function (done) {
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('default', ['index.html', 'test']);
