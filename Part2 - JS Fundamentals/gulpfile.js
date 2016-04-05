'use strict';

var del = require('del');
var gulp = require('gulp');
var concat = require('gulp-concat');
// var connect = require('gulp-connect');
var inject = require('gulp-inject');
var jshint = require('gulp-jshint');
var webserver = require('gulp-webserver');
var mainBowerFiles = require('main-bower-files');
var path = require('path');
var runSequence = require('run-sequence');
var config = require('./gulpfile.config.json');

gulp.task('clean', cleanTask);
gulp.task('jshint', jshintTask);
gulp.task('app-js', appJsTask);
gulp.task('vendor-js', vendorJsTask);
gulp.task('vendor-css', vendorCssTask);
gulp.task('index', indexTask);
gulp.task('build', [ 'clean', 'jshint' ], buildTask);
gulp.task('connect', [ 'build' ], connectTask);
gulp.task('watch', [ 'connect' ], watchTask);

function cleanTask() {
    return del(config.directories.build.root);
}

function jshintTask() {
    return gulp.src([ 'gulpfile.js', config.files.app.js ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
}

function appJsTask() {
    return gulp.src(config.files.app.js)
    .pipe(concat(config.filenames.build.app.js))
    .pipe(gulp.dest(config.directories.build.js));
    // .pipe(connect.reload());
}

function vendorCssTask() {
    return gulp.src(mainBowerFiles({ filter: '**/*.css' }))
    .pipe(concat(config.filenames.build.vendor.css))
    .pipe(gulp.dest(config.directories.build.css));
}

function vendorJsTask() {
    return gulp.src(mainBowerFiles({ filter: '**/*.js' }))
    .pipe(concat(config.filenames.build.vendor.js))
    .pipe(gulp.dest(config.directories.build.js));
}

function indexTask() {
    var vendor = vendorStream();
    var app = appStream();
    return gulp.src([ config.files.app.index ])
    .pipe(inject(vendor, { starttag: '<!-- inject:vendor:{{ext}} -->', ignorePath: config.directories.build.root }))
    .pipe(inject(app, { starttag: '<!-- inject:app:{{ext}} -->', ignorePath: config.directories.build.root }))
    .pipe(gulp.dest(config.directories.build.root));

    function vendorStream() {
        return gulp.src([
            path.join(config.directories.build.js, config.filenames.build.vendor.js),
            path.join(config.directories.build.css, config.filenames.build.vendor.css)
        ], { read: false });
    }

    function appStream() {
        return gulp.src([
            path.join(config.directories.build.js, config.filenames.build.app.js)
        ], { read: false });
    }
}

function buildTask(done) {
    runSequence([ 'app-js', 'vendor-css', 'vendor-js' ], 'index', done);
}

function connectTask() {
    var options = {
        livereload: true,
        open: true,
        fallback: 'index.html'
    };
    gulp.src(config.directories.build.root)
    .pipe(webserver(options));
}

function watchTask() {
    gulp.watch([ config.files.app.js ], [ 'jshint', 'app-js' ]);
}
