var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    handleErrors = require('../util/handleErrors'),
    config = require('../config'),
    sass = require('gulp-ruby-sass');

gulp.task('styles-dev', function () {
    gulp.src(config.sassGlob, { cwd: config.appDir })
        .pipe(plumber({ errorHandler: handleErrors }))
        .pipe(sass({ style: 'expanded' }))
        .pipe(gulp.dest(config.appDir + '/css'));
});

gulp.task('styles', function () {
    gulp.src(config.sassGlob, { cwd: config.appDir })
        .pipe(plumber({ errorHandler: handleErrors }))
        .pipe(sass({ style: 'compressed' }))
        .pipe(gulp.dest(config.builtDir + '/css'));
});