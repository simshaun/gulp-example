var gulp = require('gulp'),
    config = require('../config'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');

gulp.task('images', function () {
    return gulp.src(config.imageGlob, { cwd: config.appDir })
        .pipe(cache(imagemin({ progressive: true, interlaced: true })))
        .pipe(gulp.dest(config.builtDir + '/images'));
});