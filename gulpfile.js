/**
Gulpfile for the Revolve.js library.

Usage: gulp [with no arguments]

Builds the Revolve.js library.
*/

const { series, src, dest } = require('gulp');
const minify = require('gulp-minify');
const child = require('child_process');
const strip = require('gulp-strip-comments');
const rename = require('gulp-rename');
const jsoncombine = require('gulp-jsoncombine');
const gap = require('gulp-append-prepend');
let suffix = "\r\n// Finish the UMD wrapper we began at the top of the file." +
             "\r\nreturn REVOLVE; // Return the module object\r\n}));";

// Copy and merge theme files
function copyThemes(cb) {
  return src('./src/themes/*.json')
    .pipe( dest('./dist/js/themes/') )
    .pipe( jsoncombine( 'all-themes.json', (data, meta) => {
      return new Buffer( JSON.stringify(data, null, '  ' ) );
    }))
    .pipe( dest('./dist/js/themes/') );
}

// Assemble the standalone version of Revolve.js
function assemble(cb) {
  return src('./src/revolve.js')
    .pipe( gap.appendText(suffix) )
    .pipe( dest('./dist/js') );
}

// Strip and minify the standalone version of Revolve.js
function standalone() {
  return src( './dist/js/revolve.js' )
    .pipe( strip() )
    .pipe( rename({ suffix: '.quiet' }) )
    .pipe( dest('./dist/js') )
    .pipe( rename( (path) => {
      if( path.basename.endsWith('.quiet') )
        path.basename = path.basename.slice(0,-6);
      return path;
    }))
    .pipe( minify({ ext:{ src:'.quiet.js', min:'.min.js' }}) )
    .pipe( dest('./dist/js/') );
}

// Assemble the packaged version of Revolve.js
function packaged(cb) {
  return src('./src/revolve.js')
    .pipe( rename({ suffix: '.pkgd' }) )
    .pipe( gap.appendText( 'REVOLVE.themes = ' ))
    .pipe( gap.appendFile( './dist/js/themes/all-themes.json' ))
    .pipe( gap.appendText( ';' ))
    .pipe( gap.appendText( suffix ))
    .pipe( dest('./dist/js/') )
    .pipe( strip() )
    .pipe( rename({ suffix: '.quiet' }) )
    .pipe( dest('./dist/js') )
    .pipe( rename( (path) => {
      if( path.basename.endsWith('.quiet') )
        path.basename = path.basename.slice(0,-6);
        return path;
      }))
    .pipe( minify({ ext:{ src:'.quiet.js', min:'.min.js' }}) )
    .pipe( dest('./dist/js/') );
}

exports.default = series( copyThemes, assemble, standalone, packaged );
