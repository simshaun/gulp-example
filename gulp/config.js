var path = require('path');

var root = path.resolve('./');

module.exports = {
    appDir:             root + '/web/assets',
    builtDir:           root + '/web/assets-built',
    jsGlob:             'js/**/*.js',
    staticVendorJsGlob: 'vendor-static/**/*.js',
    sassGlob:           'scss/**/*.scss',
    imageGlob:          'images/**/*.{jpg,jpeg,gif,png}',
    port:               '8080',
    root:               root
};