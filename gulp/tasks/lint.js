var gulp = require('gulp'),
    config = require('../config'),
    jshint = require('gulp-jshint');

gulp.task('lint', function () {
    gulp.src(config.jsGlob, { cwd: config.appDir })
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});