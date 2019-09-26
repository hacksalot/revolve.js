/**
The packaged Revolve.js theme library.
@file revolve-themes.js
@copyright Copyright (c) 2019 | James M. Devlin | https://revolvejs.org
*/
//------------------------------------------------------------------------------
// Wrap the Revolve.js theme library in a universal module definition (UMD)
// wrapper to support a variety of clients including CommonJS, AMD, and
// browser-global.
// See: https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.RevolveThemes = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
// Okay, UMD wrapper nonsense concluded. Commence with Revolve.js themes!
//------------------------------------------------------------------------------
