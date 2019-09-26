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

// - Copy individual theme files to dist/js/themes
// - Merge individual theme files to dist/js/revolve-themes.js
function copyThemes(cb) {
  return src( './src/themes/*.json' )
    .pipe( dest( './dist/themes/' ))
    .pipe( jsoncombine( 'revolve-themes.js', (data, meta) => {
      return new Buffer( JSON.stringify(data, null, '  ' ) );
    }))
    .pipe( gap.prependText( 'let themes = ' ) )
    .pipe( gap.prependFile( './src/revolve-themes-prefix.js' ))
    .pipe( gap.appendText( ';\r\nreturn themes;\r\n}));' ))
    .pipe( dest( './dist/' ));
}

// - Strip comments from revolve.js, producing revolve.quiet.js
// - Minify after comments are stripped, producing revolve.min.js
function standalone() {
  return src( './src/index.js' )
    .pipe( rename({ basename: 'revolve' }) )
    .pipe( dest('./dist/') )
    .pipe( strip() )
    .pipe( rename({ suffix: '.quiet' }) )
    .pipe( dest('./dist/') )
    .pipe( rename( (path) => {
      if( path.basename.endsWith('.quiet') )
        path.basename = path.basename.slice(0,-6);
      return path;
    }))
    .pipe( minify({ ext:{ src:'.quiet.js', min:'.min.js' }}) )
    .pipe( dest('./dist/') );
}

// Assemble the packaged version of Revolve.js
function packaged(cb) {
  return src('./src/index.js')
    .pipe( rename({ basename: 'revolve', suffix: '.pkgd' }) )
    .pipe( gap.prependFile( './dist/revolve-themes.js' ))
    // .pipe( gap.appendF( 'REVOLVE.themes = ' ))
    // .pipe( gap.appendText( 'REVOLVE.themes = ' ))
    // .pipe( gap.appendFile( './dist/js/themes/all-themes.json' ))
    // .pipe( gap.appendText( ';' ))
    // .pipe( gap.appendText( suffix ))
    .pipe( dest('./dist/') )
    .pipe( strip() )
    .pipe( rename({ suffix: '.quiet' }) )
    .pipe( dest('./dist/') )
    .pipe( rename( (path) => {
      if( path.basename.endsWith('.quiet') )
        path.basename = path.basename.slice(0,-6);
        return path;
      }))
    .pipe( minify({ ext:{ src:'.quiet.js', min:'.min.js' }}) )
    .pipe( dest('./dist/') );
}

exports.default = series( copyThemes, standalone, packaged );
