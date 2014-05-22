var gulp = require('gulp'),
    config = require('../config');

gulp.task('watch', function () {
    gulp.watch(config.jsGlob, { cwd: config.appDir }, ['lint', 'scripts']);
    gulp.watch(config.sassGlob, { cwd: config.appDir }, ['styles-dev', 'styles']);
    gulp.watch(config.imageGlob, { cwd: config.appDir }, ['images']);
});