/**
The Revolve.js library
@file revolve.js
@version 1.2.0
@copyright Copyright (c) 2019 | James M. Devlin | https://revolvejs.org
*/
//------------------------------------------------------------------------------
// Wrap the Revolve.js library in a universal module definition (UMD) wrapper
// to support a variety of clients including CommonJS, AMD, and browser-global.
// See: https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['RevolveThemes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('RevolveThemes'));
  } else {
    root.Revolve = factory( root.RevolveThemes );
  }
}(typeof self !== 'undefined' ? self : this, function (RevolveThemes) {

//------------------------------------------------------------------------------
// The one-and-only Revolve.js module object.
//------------------------------------------------------------------------------
let REVOLVE = {
  clock: (ctx, opt) => {
    let c = new AnalogClock( ctx, opt );
    _handleLoad( opt.theme || 'classic', ( themeObj, themeJson ) => {
      c.theme = themeObj;
      c.init();
    });
    return c;
  },
  gauge: (ctx, opt) => {
    let g = new RadialGauge( ctx, opt );
    _handleLoad( opt.theme || 'unitless', ( themeObj, themeJson ) => {
      g.theme = themeObj;
      g.init();
    });
    return g;
  },
  themes: RevolveThemes
};

//------------------------------------------------------------------------------
// A representation of an on-screen radial gauge or dial, such as a pressure
// gauge or analog clock.
//------------------------------------------------------------------------------
class RadialGauge
{
  // Construct a RadialGauge from a canvas context and an options object.
  constructor(ctx, opt ) {
    // Store references
    ctx.obj = this;
    this.ctx = ctx;
    // Set up default options
    let defOpts = {
      logicalSize: 512,
      label: 'Revolve.js | v1.2.0',
      mode: 'discrete',
      center: [0,0],
      radius: Math.min( ctx.canvas.width, ctx.canvas.height ) / 2.0
    };
    // Merge user options ONTO default options ONTO *this* object
    extend( true, this, /* <-- */ defOpts, /* <-- */ opt );
  }

  init() {
    if( this.theme.axes ) {
      this.axes = { };
      Object.keys(this.theme.axes).forEach( (k) => {
        let ax = this.theme.axes[k];
        this.axes[k] = new RadialAxis( ax.pointA.angle, ax.pointB.angle,
                                       ax.pointA.value, ax.pointB.value );
      }, this);
    }
    this.render();
  }

  // Set the gauge's value.
  set value(val) {
    if((!val)||(isString(val)&&!val.trim())) { this.safeValue = 0; }
    else if( isString(val) ) { this.safeValue = parseFloat(val); }
    else { this.safeValue = val; }
  }

  // Render the radial gauge.
  render() {
    this.ctx.translate( this.radius / 2, this.radius / 2 );
    let th = this.theme;
    th.layers && Object.keys(th.layers).forEach( function(k) {
      CanvasRenderer[ th.layers[k].type ](this.ctx,this,th.layers[k]);
    }.bind(this));
  }
}

//------------------------------------------------------------------------------
// A representation of a virtual analog clock. For our purposes, an AnalogClock
// is a RadialGauge with additional behaviors.
//------------------------------------------------------------------------------
class AnalogClock extends RadialGauge
{
  // Construct an AnalogClock from a canvas context and an options object.
  constructor( ctx, opt ) {
    super( ctx, opt );
  }

  init() {
    super.init();
    this.paused || this.start();
  }

  // Start the clock!
  start() {
    if( this.timer ) return;
    this.started = _milliSinceMidnight();
    this.paused = false;
    this.timer = setInterval( function() {
      let msince = _milliSinceMidnight();
      if( this.mode === 'continuous' ) {
        this.safeValue = msince;
        this.render();
      }
      else {
        let curVal = Math.floor(msince / 1000) * 1000;
        if ( curVal !== this.safeValue ) {
          this.safeValue = curVal;
          this.render();
        }
      }
    }.bind(this), this.interval || 1000/24.0);
  }

  // Stop the clock!
  stop() {
    this.paused = true;
    if( this.timer ) {
      clearInterval( this.timer );
      this.timer = null;
    }
  }

  // Set the clock's time value. The time can be null/undefined/empty, a string
  // such as '10:10:00', or a JavaScript Date object. This uses the ES6 setter
  // syntax, and will be called anytime `clock.value = blah;` is used.
  set value(val) {
    if((val===null)||(val===undefined)||(isString(val)&&!val.trim())) {
      this.safeValue = _milliSinceMidnight();
    }
    else if( isString(val) ) {
      let ar = val.split(':').map( v => { return parseInt(v, 10); });
      while( ar.length < 4 ) ar.push(0);
      let now = new Date();
      let dt = new Date( now.getFullYear(), now.getMonth(), now.getDay(),
                         ar[0], ar[1], ar[2] );
      this.safeValue = _milliSinceMidnight( dt );
    }
    else if( val instanceof Date ) {
      this.safeValue = _milliSinceMidnight( val );
    }
  }
}

//------------------------------------------------------------------------------
// A representation of a radial axis for a clock or gauge. The axis defines
// a starting and ending angle and a starting and ending value. Currently, only
// used for custom axes (as in the Speedometer theme).
//------------------------------------------------------------------------------
class RadialAxis
{
  // Construct a radial axis from a starting and ending angle and value.
  constructor( angA, angB, valueA, valueB ) {
    this.pointA = { angle: angA, value: valueA };
    this.pointB = { angle: angB, value: valueB };
    let angleRange = (angA < angB) ? angB - angA : (360 - angA) + angB;
    let valueRange = Math.abs(valueB - valueA);
    this.unitDegrees = angleRange / valueRange;
  }

  // Convert the specified value to an angle, per this axis
  toAngle( val ) {
    return this.pointA.angle + ((val - this.pointA.value) * this.unitDegrees);
  }
}

const STD_AXES = {
  HOURS:    new RadialAxis(0,360,0,12*60*60*1000),
  HOURS24:  new RadialAxis(0,360,0,24*60*60*1000),
  MINUTES:  new RadialAxis(0,360,0,60*60*1000),
  SECONDS:  new RadialAxis(0,360,0,60*1000)
};

//------------------------------------------------------------------------------
// A collection of methods that can be used to render Revolve.js JSON user
// interface descriptions.
//------------------------------------------------------------------------------
class CanvasRenderer
{
  static arc(ctx,ctl,lay,p) {
    p || _resetContext(ctx,ctl,lay); p && ctx.beginPath();
    let rad = lay.radius !== undefined ? _p(lay.radius, ctl) : ctl.radius;
    let bw = lay.border ? _p(lay.border.width, ctl) : 0;
    let a = lay.degrees === undefined ? 2*Math.PI : TO_RADIANS*(lay.degrees - (p ? 0 : 90));
    let ctr = lay.center || ctl.center;
    let angleStart = (lay.start === undefined || p) ? 0 : TO_RADIANS * (lay.start-90);
    ctx.arc( _p(ctr[0],ctl), _p(ctr[1],ctl), rad - bw / 2.0, angleStart, a );
    lay.color && ctx.fill();
    lay.border && ctx.stroke();
  }

  static circle(ctx,ctl,lay) { CanvasRenderer.arc(ctx,ctl,lay); }

  static rect(ctx,ctl,lay) {
    ctx.rect( _p(lay.bounds[0],ctl), _p(lay.bounds[1], ctl),
      _p(lay.bounds[2],ctl), _p(lay.bounds[3], ctl) );
    lay.color && ctx.fill();
    lay.border && ctx.stroke();
  }

  static triangle(ctx,ctl,lay) {
    ctx.beginPath();
    ctx.moveTo( _p(lay.points[0].x, ctl), _p(lay.points[0].y,ctl) );
    ctx.lineTo( _p(lay.points[1].x, ctl), _p(lay.points[1].y,ctl) );
    ctx.lineTo( _p(lay.points[2].x, ctl), _p(lay.points[2].y,ctl) );
    ctx.closePath();
    lay.color && ctx.fill();
    lay.border && ctx.stroke();
  }

  static path(ctx,ctl,lay) {
    ctx.beginPath();
    ctx.moveTo( _p(lay.points[0].x,ctl), _p(lay.points[0].y,ctl) );
    lay.points.slice(1).forEach( pt => {
      ctx.lineTo( _p(pt.x,ctl), _p(pt.y,ctl) );
    });
    ctx.closePath();
    lay.color && ctx.fill();
    lay.border && ctx.stroke();
  }

  static sector(ctx,ctl,lay) {
    _resetContext(ctx,ctl,lay);
    let rFrom = (lay.from - 90) * TO_RADIANS
      , rTo = (lay.to - 90) * TO_RADIANS
      , rad = lay.radius !== undefined ? _p(lay.radius, ctl) : ctl.radius
      , ctr = lay.center || ctl.center;
    ctx.arc( _p(ctr[0], ctl), _p(ctr[1], ctl), rad, rFrom, rTo );
    ctx.lineTo( _p(ctr[0], ctl), _p(ctr[1], ctl) );
    ctx.closePath();
    lay.color && ctx.fill();
    lay.border && ctx.stroke();
  }

  static radial(ctx,ctl,lay) {
    _resetContext(ctx,ctl,lay);
    let timeRotation = 0;
    let safeCount = _getRadialCount(lay);
    let degreesPer = lay.degrees || (360.0 / safeCount);
    for( let n = 0; n < safeCount; n++ ) {
      if( (lay.exclude && lay.exclude.includes(n) ) ||
          (lay.include && !lay.include.includes(n) ) )
        continue;
      ctx.resetTransform();
      ctx.translate( ctl.radius, ctl.radius );
      if( lay.orient || (lay.content !== "text") ) {
        let rotAngle = (n * degreesPer) + (lay.start || 0) + timeRotation;
        ctx.rotate( TO_RADIANS * rotAngle );
      }
      if( lay.content === 'text' ) _drawRadialText(n,ctx,ctl,lay);
      else if( lay.content === 'ticks' ) _drawRadialTick(n,ctx,ctl,lay);
      else if( lay.content === 'arcs' ) CanvasRenderer.arc(ctx,ctl,lay,true);
      else if( Array.isArray(lay.content) ) {
        lay.content.forEach( el => { this[el.type](ctx,ctl,el); }, CanvasRenderer);
        lay.color && ctx.fill();
        lay.border && ctx.stroke();
      }
    }
  }

  static text(ctx,ctl,lay) {
    _resetContext(ctx,ctl,lay);
    ctx.font = '' + lay.weight + ' ' + _p(lay.size, ctl) + 'px ' + lay.family;
    lay.value || (lay.value = "");
    let safeValue = (lay.value.length > 0 && lay.value[0] === '$') ?
      ctl[lay.value.substr(1)] : lay.value;
    safeValue === undefined && (safeValue = '');
    let xPos, yPos;
    if(lay.align === 'center') {
      let metrics = ctx.measureText( safeValue );
      xPos = _p(lay.pos[0], ctl) - (metrics.width/2);
      yPos = _p(lay.pos[1] + (lay.size / 2), ctl);
    }
    else {
      xPos = _p( lay.pos[0], ctl );
      yPos = _p( lay.pos[1], ctl );
    }
    ctx.fillText( safeValue, xPos, yPos );
  }

  static arm( ctx, ctl, lay ) {
    _resetContext( ctx, ctl, lay );
    if( !lay.axis ) return;
    let axName = lay.axis.trim().toUpperCase();
    let ax = (ctl.axes && ctl.axes[ axName ]) || STD_AXES[ axName ];
    let finVal = ( lay.relative ) ? ctl.safeValue - ctl.started : ctl.safeValue;
    ctx.rotate( TO_RADIANS * ax.toAngle( finVal ) );

    if( Array.isArray( lay.layers ) ) {
      lay.layers.forEach( el => { this[el.type](ctx,ctl,el); }, CanvasRenderer);
      lay.color && ctx.fill();
      lay.border && ctx.stroke();
    }
    else if( !lay.style || lay.style === 'line' ) {
      ctx.lineWidth = _p( lay.width, ctl );
      ctx.moveTo( ctl.center[0], ctl.center[1] + _p(lay.offset, ctl) );
      ctx.lineTo( ctl.center[0], ctl.center[1] - _p(lay.length, ctl) );
      ctx.stroke();
    }
    else if( lay.style === 'rect') {
      ctx.rect( ctl.center[0] - (_p(lay.width,ctl)/2),
                ctl.center[1] - _p(lay.length, ctl),
                _p(lay.width, ctl), _p(lay.length + lay.offset, ctl) );
      ctx.fill();
    }
    else if( isFunction(lay.style) ) { lay.style(ctx,ctl,lay); }
  }

  static events(ctx,ctl,lay) {
    ctx.resetTransform();
    ctl.events && ctl.events.forEach( (ev,idx) => {
      let repFrom = ev.from.split(':').map( v => { return parseInt(v, 10); });
      while( repFrom.length < 4 ) repFrom.push(0);
      let repTo = ev.to.split(':').map( v => { return parseInt(v, 10); });
      while( repTo.length < 4 ) repTo.push(0);
      let temp_layer = {
        color: ['#0c52eb','red','green','gold','orange','white'][idx],
        radius: lay.radius[0] - (lay.width * idx),
        from: (_hourDegrees( repFrom ) / 2) + 180,
        to: (_hourDegrees( repTo ) / 2) + 180
      };
      if( idx === 0 ) {
        let temp = temp_layer.color;
        temp_layer.color = 'black';
        CanvasRenderer.circle(ctx,ctl,temp_layer);
        temp_layer.color = temp;
      }
      CanvasRenderer.sector(ctx,ctl,temp_layer);
      temp_layer.color = 'black';
      temp_layer.radius -= lay.width;
      CanvasRenderer.circle(ctx,ctl,temp_layer);
    });
  }
}

//------------------------------------------------------------------------------
// REVOLVE.JS: Private helper functions
//------------------------------------------------------------------------------

const TO_RADIANS = Math.PI / 180;

// https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
function _loadThemeJSON( themeName, callback ) {
   let xobj = new XMLHttpRequest();
   xobj.overrideMimeType("application/json");
   xobj.open('GET', '/themes/' + themeName + '.json', true); // asynchronous
   xobj.onreadystatechange = function () {
     if (xobj.readyState == 4 && xobj.status == "200") {
       // Required use of an anonymous callback as .open will NOT return a value
       // but simply returns undefined in asynchronous mode
       callback( xobj.responseText );
     }
   };
   xobj.send(null);
}

function _resetContext( ctx, ctl, lay ) {
  ctx.resetTransform();
  ctx.translate( ctl.radius, ctl.radius );
  ctx.beginPath();
  if( lay.color ) {
    ctx.fillStyle = ctx.strokeStyle = _colorToFill( lay.color, ctx, ctl );
  }
  if( lay.border ) {
    ctx.strokeStyle = lay.border.color;
    ctx.lineWidth = _p(lay.border.width, ctl);
  }
  if( lay.shadow ) {
    ctx.shadowBlur = lay.shadow;
    ctx.shadowColor = lay.shadowColor;
  }
  else {
    ctx.shadowBlur = 0;
    ctx.shadowColor = '#00000000';
  }
}

function _milliSinceMidnight( now ) {
  now = now || new Date();
  let then = new Date( now.getFullYear(), now.getMonth(), now.getDate(), 0,0,0);
  return now.getTime() - then.getTime();
}

function _getRadialCount(lay) {
  if( lay.count ) return lay.count;
  let ret = 12;
  switch( lay.content ) {
    case 'text': case 'ticks':
      if( lay.layout === 'minute' || lay.layout === 'second' ) ret = 60;
      else if( lay.layout === 'hour' )    ret = 12;
      else if( lay.layout === '24' )      ret = 24;
      else if( lay.layout === '120' )     ret = 120;
      break;
  }
  return ret;
}

function _colorToFill( col, ctx, ctl ) {
  if( isString(col) ) return col;
  else if( isPlainObject(col) ) {
    let safeExtent = col.extent.map( ex => { return _p( ex, ctl ); });
    let grd = ( col.type === 'radial' ) ?
      ctx.createRadialGradient.apply( ctx, safeExtent ) :
      ctx.createLinearGradient.apply( ctx, safeExtent );
    col.stops.forEach( el => { grd.addColorStop( el.pos, el.color ); });
    return grd;
  }
  return null;
}

function _drawRadialText(n,c,o,l) {
  c.font = l.weight.toString() + ' ' + _p(l.size, o) + 'px ' + l.family;
  c.strokeStyle = c.fillStyle = l.color;
  let fnText = isFunction(l.text) ? l.text : _getNumeralText;
  c.beginPath();
  let p = _numeralPosition( n, o, l );
  let txt = fnText(n, l);
  let metrics = c.measureText( txt );
  c.fillText( txt, p[0] - (metrics.width/2), p[1] + _p(l.size / 3, o));
}

function _drawRadialTick(n,c,o,layer) {
  let safeRadius = _p(layer.radius,o) || o.radius;
  if( layer.border ) {
    c.rect( o.center[0] - _p(layer.width / 2,o), o.center[1] - safeRadius,
            _p(layer.width,o), _p(layer.length, o) );
    c.fill(); c.stroke();
  }
  else {
    c.lineWidth = _p(layer.width,o);
    c.strokeStyle = layer.color;
    c.moveTo( o.center[0], (o.center[1] - safeRadius) );
    c.lineTo( o.center[0], (o.center[1] - safeRadius) + _p(layer.length,o) );
    c.stroke();
  }
}

function _getNumeralText(idx, lay) {
  if( isString(lay.text) ) {
    switch(lay.text) {
      case 'roman':   return ['X11','I','II','III','IV','V','VI',
                              'VII','VIII','IX','X','XI','XII'][idx];
      case 'minutes': var min = idx * 5;
                      return (min > 9 ? min : ('0' + min)).toString();
      case 'HH':      idx = idx || 12;
                      return idx < 10 ? '0' + idx : idx.toString();
      case '12':      return idx || 12;
      case '10':      return idx || 10;
      case 'NN': case '24': return idx < 10 ? '0' + idx : idx.toString();
      case '31':      var i = idx + 1;
                      return i < 10 ? '0' + i : i.toString();
      case 'months':  return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug',
                              'Sep','Oct','Nov','Dec'][idx].toUpperCase();
    }
    if( lay.text[0] === '*' ) {
      let multiple = parseInt( lay.text.substr(1), 10 );
      return (idx * multiple).toString();
    }
  }
  else if( lay.text && lay.text.length ) {
    return lay.text[idx].toString();
  }
  return idx.toString();
}

function _hourDegrees( v ) {
  return ((v[0] * 60) + v[1] + (v[2] / 60.0) + (v[3] / 60000.0)) / 2.0;
}

function _numeralPosition( val, o, lay ) {
  if( lay.orient ) return [ o.center[0], o.center[1] - _p(lay.radius,o) ];
  let rad = _p(lay.radius || 190, o);
  let deg = lay.degrees || 30;
  lay.start = lay.start || 0;
  let angle = (((lay.start || 0) + (val * deg)) - 90) * TO_RADIANS;
  return [ o.center[0] + rad * Math.cos(angle),
           o.center[1] + rad * Math.sin(angle) ];
}

/**
Parameter-massaging function for distances, widths, and other physical
measurements specified in Revolve.js themes and options.
*/
function _p( val, o ) {

  // Compute the diameter. We'll need it in a second.
  let diameter = o.radius * 2;

  // Handle incoming string parameters ("12", "10px", "12.5%", etc)
  if( isString( val )) {
    let match = /\s*(\d+\.?\d*)\s*(px|%)?/.exec(val); // regex to the rescue!
    if( match != null && match.length === 3 ) {
      let num = match[1], fnum = parseFloat(num), unit = match[2] || '';
      switch( unit.toLowerCase().trim() ){
        case 'px': return fnum;
        case '%' : return diameter * (fnum / 100);
        case ''  : val = fnum; break;
      }
    }
  }

  // If execution reaches this point, 'val' is either a normal number (45) or
  // a string containing a unitless number ("45"). Either way, we can scale it
  // unless the canvas is sized precisely to the "logical" or ideal size.
  return o.logicalSize === diameter ? val : (val / o.logicalSize) * diameter;
}

function _handleLoad( theme, cb ) {
  if( isString(theme) ) {
    return REVOLVE.themes ?
      cb( REVOLVE.themes[theme], JSON.stringify(REVOLVE.themes[theme]) ) :
      _loadThemeJSON( theme, ret => { cb( JSON.parse( ret ), ret ); });
  }
  else {
    return cb( theme, JSON.stringify(theme) );
  }
}

// Set up a document ready handler to register <canvas> elements with the
// data-revolve attribute. Without using jQuery or introducing dependencies.
// https://www.sitepoint.com/jquery-document-ready-plain-javascript/
if( typeof document !== 'undefined' ) {
  let _onDomLoaded = () => {
    document.querySelectorAll('canvas[data-revolve]').forEach( el => {
      REVOLVE[ el.dataset.revolve ]( // call REVOLVE.clock or REVOLVE.gauge
        el.getContext('2d'),
        extend( true, { }, el.dataset ) // collapse data-* onto options
      );
    });
  };
  if ( document.readyState === "complete" || (document.readyState !== "loading"
       && !document.documentElement.doScroll)) { _onDomLoaded(); }
  else { document.addEventListener("DOMContentLoaded", _onDomLoaded); }
}
//
//------------------------------------------------------------------------------
// The Revolve.js library ends here. The rest of this file contains utility
// functions in standard JavaScript.
//------------------------------------------------------------------------------

function isPlainObject( obj ) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function isFunction(fn) {
 return fn && {}.toString.call(fn) === '[object Function]';
}

function isString( obj ) {
  return typeof obj === 'string';
}

function extend() {
  let options, name, src, copy, copyIsArray, target = arguments[0] || {},
  i = 1, length = arguments.length, deep = false, clone;
  // Handle a deep copy situation
  if (typeof target === "boolean") {
    deep = target;
    // Skip the boolean and the target
    target = arguments[i] || {};
    i++;
  }
  // Handle case when target is a string or something (possible in deep copy)
  //if (typeof target !== "object" && !jQuery.isFunction(target))
  if (typeof target !== "object" && typeof target !== "function") target = {};
  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    if ((options = arguments[i]) !== null) {
      // Extend the base object
      for (name in options) {
        src = target[name]; copy = options[name];
        // Prevent never-ending loop
        if (target === copy) continue;
        // Recurse if we're merging plain objects or arrays
        if (deep && copy && (isPlainObject(copy) ||
            (copyIsArray = (copy.constructor === Array)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && (src.constructor === Array) ? src : [];
          } else {
            clone = src && isPlainObject(src) ? src : {};
          }
          // Never move original objects, clone them
          target[name] = extend(deep, clone, copy);
          // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  // Return the modified object
  return target;
}

return REVOLVE; // Return the module object
}));
