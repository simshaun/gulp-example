var gulp = require('gulp'),
    config = require('../config'),
    uglify = require('gulp-uglify');

gulp.task('scripts', function () {
    gulp.src(config.jsGlob, { cwd: config.appDir })
        .pipe(uglify())
        .pipe(gulp.dest(config.builtDir + '/js'));
});