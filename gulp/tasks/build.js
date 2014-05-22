var gulp = require('gulp');

gulp.task('build', ['lint', 'scripts', 'styles-dev', 'styles', 'images']);