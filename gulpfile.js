/**
Gulpfile for the Revolve.js library.

Usage: gulp [with no arguments]

Builds src/*.js to dist/*.js, dist/*.quiet.js, and dist/*.min.js.
*/

const { series, src, dest } = require('gulp');
const minify = require('gulp-minify');
const child = require('child_process');
const strip = require('gulp-strip-comments');
const rename = require('gulp-rename');

function clean(cb) {
  cb();
}

function build(cb) {
  cb();
}

function copyJS(cb) {
  return src('./src/*.js')                  // Take source files...
    .pipe( dest('./dist/js') )              // And dump them in output dir...
    .pipe( strip() )                        // Now strip the comments...
    .pipe( rename({ suffix: '.quiet' }) )   // And rename to *.quiet.js...
    .pipe( dest('./dist/js') )              // And dump in the output dir...
    .pipe( rename( (path) => {              // Now remove the '.quiet'...
      if( path.basename.endsWith('.quiet') )
        path.basename = path.basename.slice(0,-6);
      return path;
    }))
    .pipe( minify({ ext:{ src:'.quiet.js', min:'.min.js' }}) ) // And minify...
    .pipe( dest('./dist/js/') );                               // And output!
}

function copyThemes(cb) {
  return src('./src/themes/*.json')         // Take source files...
    .pipe( dest('./dist/js/themes') );      // And dump them in output dir...
}

exports.default = series( clean, build, copyJS, copyThemes );
