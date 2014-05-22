var notify = require("gulp-notify"),
    gutil = require('gulp-util');

module.exports = function (error) {
    gutil.beep();

    // Send error to notification center with gulp-notify
    notify.onError({
        title:   "Compile Error",
        message: "<%= error.message %>"
    }).apply(this, arguments);
};