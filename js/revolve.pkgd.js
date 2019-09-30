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
let themes =
{
  "classic": {
    "name": "classic",
    "layers": {
      "rim": {
        "type": "circle",
        "color": {
          "extent": [
            0,
            -256,
            0,
            256
          ],
          "stops": [
            {
              "pos": 0,
              "color": "#bdbd97"
            },
            {
              "pos": 1,
              "color": "#fffff2"
            }
          ]
        },
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 4,
        "length": 10,
        "color": "#232323",
        "layout": "minute"
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 5,
        "length": 30,
        "color": "#121212",
        "layout": "hour"
      },
      "numerals": {
        "type": "radial",
        "content": "text",
        "text": "12",
        "radius": 190,
        "weight": 300,
        "size": 60,
        "color": "black",
        "family": "Quattrocento, Impact, Helvetica, serif"
      },
      "hour": {
        "type": "arm",
        "axis": "hours",
        "width": 10,
        "length": 120,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "minute": {
        "type": "arm",
        "axis": "minutes",
        "width": 5,
        "length": 166,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "second": {
        "type": "arm",
        "axis": "seconds",
        "width": 2.5,
        "length": 216,
        "offset": 20,
        "color": "#DD2323",
        "shadowColor": "black",
        "shadow": 2
      },
      "glass": {
        "type": "circle",
        "radius": 246,
        "color": {
          "extent": [
            0,
            -256,
            0,
            256
          ],
          "stops": [
            {
              "pos": 0,
              "color": "#FFFFFF11"
            },
            {
              "pos": 0.5,
              "color": "#FFFFFF77"
            },
            {
              "pos": 0.5,
              "color": "#FFFFFF44"
            },
            {
              "pos": 1,
              "color": "#f5f5dc11"
            }
          ]
        }
      }
    }
  },
  "dark": {
    "name": "dark",
    "layers": {
      "outer_rim": {
        "type": "circle",
        "color": "#010101",
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 5,
        "length": 10,
        "color": "darkred",
        "layout": "minute"
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "radius": 250,
        "width": 14,
        "length": 30,
        "color": "red",
        "layout": "hour",
        "border": {
          "color": "darkred",
          "width": 2
        }
      },
      "rim": {
        "type": "circle",
        "color": "transparent",
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "numerals": {
        "type": "radial",
        "content": "text",
        "text": "12",
        "radius": 190,
        "weight": 300,
        "size": 40,
        "color": "#898989",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "shadowColor": "#ffffff55",
        "shadow": 10
      },
      "hour": {
        "type": "arm",
        "color": "#434343",
        "axis": "hours",
        "width": 20,
        "length": 120,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "minute": {
        "type": "arm",
        "color": "#545454",
        "axis": "minutes",
        "width": 15,
        "length": 166,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "second": {
        "type": "arm",
        "axis": "seconds",
        "width": 5,
        "length": 236,
        "offset": 20,
        "color": "#DD2323",
        "shadowColor": "black",
        "shadow": 2
      },
      "glass": {
        "type": "circle",
        "radius": 246,
        "color": {
          "extent": [
            0,
            -256,
            0,
            256
          ],
          "stops": [
            {
              "pos": 0,
              "color": "#FFFFFF11"
            },
            {
              "pos": 0.5,
              "color": "#44444433"
            },
            {
              "pos": 0.5,
              "color": "#55555522"
            },
            {
              "pos": 1,
              "color": "#f5f5dc11"
            }
          ]
        }
      }
    }
  },
  "dartboard": {
    "name": "dartboard",
    "layers": {
      "rim": {
        "type": "circle",
        "color": "black",
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "numbers": {
        "type": "radial",
        "content": "text",
        "text": [
          "20",
          "1",
          "18",
          "4",
          "13",
          "6",
          "10",
          "15",
          "2",
          "17",
          "3",
          "19",
          "7",
          "16",
          "8",
          "11",
          "14",
          "9",
          "12",
          "5"
        ],
        "count": 20,
        "color": "white",
        "weight": "bold",
        "family": "Calibri",
        "size": 30,
        "radius": 238,
        "orient": true
      },
      "odd": {
        "type": "radial",
        "content": "arcs",
        "radius": 216,
        "degrees": 18,
        "count": 20,
        "start": 9,
        "border": {
          "width": 20,
          "color": "red"
        }
      },
      "even": {
        "type": "radial",
        "content": "arcs",
        "start": 9,
        "radius": 216,
        "degrees": 18,
        "count": 20,
        "exclude": [
          0,
          2,
          4,
          6,
          8,
          10,
          12,
          14,
          16,
          18,
          20
        ],
        "border": {
          "width": 20,
          "color": "green"
        }
      },
      "black": {
        "type": "radial",
        "content": "arcs",
        "start": 9,
        "radius": 196,
        "degrees": 18,
        "count": 20,
        "border": {
          "width": 60,
          "color": "black"
        }
      },
      "white": {
        "type": "radial",
        "content": "arcs",
        "start": 9,
        "radius": 196,
        "degrees": 18,
        "count": 20,
        "exclude": [
          0,
          2,
          4,
          6,
          8,
          10,
          12,
          14,
          16,
          18,
          20
        ],
        "border": {
          "width": 60,
          "color": "white"
        }
      },
      "odd2": {
        "type": "radial",
        "content": "arcs",
        "start": 9,
        "radius": 136,
        "degrees": 18,
        "count": 20,
        "border": {
          "width": 20,
          "color": "red"
        }
      },
      "even2": {
        "type": "radial",
        "start": 9,
        "content": "arcs",
        "radius": 136,
        "degrees": 18,
        "count": 20,
        "exclude": [
          0,
          2,
          4,
          6,
          8,
          10,
          12,
          14,
          16,
          18,
          20
        ],
        "border": {
          "width": 20,
          "color": "green"
        }
      },
      "black2": {
        "type": "radial",
        "start": 9,
        "content": "arcs",
        "radius": 116,
        "degrees": 18,
        "count": 20,
        "border": {
          "width": 116,
          "color": "black"
        }
      },
      "white2": {
        "type": "radial",
        "start": 9,
        "content": "arcs",
        "radius": 116,
        "degrees": 18,
        "count": 20,
        "exclude": [
          0,
          2,
          4,
          6,
          8,
          10,
          12,
          14,
          16,
          18,
          20
        ],
        "border": {
          "width": 116,
          "color": "white"
        }
      },
      "inner": {
        "type": "circle",
        "color": "green",
        "radius": 30
      },
      "bullseye": {
        "type": "circle",
        "color": "red",
        "radius": 10
      }
    }
  },
  "decimal": {
    "name": "decimal",
    "pulse": 864,
    "axes": {
      "HOUR10": {
        "name": "hour10",
        "pointA": {
          "angle": 0,
          "value": 0
        },
        "pointB": {
          "angle": 360,
          "value": 86400000,
          "comment": "24 * 60 * 60 * 1000"
        }
      },
      "MINUTE100": {
        "name": "minute100",
        "pointA": {
          "angle": 0,
          "value": 0
        },
        "pointB": {
          "angle": 360,
          "value": 8640000,
          "comment": "2.4 * 60 * 60 * 1000"
        }
      },
      "SECOND100": {
        "name": "second100",
        "pointA": {
          "angle": 0,
          "value": 0
        },
        "pointB": {
          "angle": 360,
          "value": 86400,
          "comment": ".024 * 60 * 60 * 1000"
        }
      }
    },
    "layers": {
      "rim": {
        "type": "circle",
        "color": "beige",
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 4,
        "length": 10,
        "color": "#660000",
        "count": 100,
        "exclude": [
          5,
          15,
          25,
          35,
          45,
          55,
          65,
          75,
          85,
          95
        ]
      },
      "medium": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 4,
        "length": 20,
        "color": "#232323",
        "count": 100,
        "include": [
          5,
          15,
          25,
          35,
          45,
          55,
          65,
          75,
          85,
          95
        ]
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 5,
        "length": 30,
        "count": 10,
        "color": "#121212"
      },
      "numerals": {
        "type": "radial",
        "content": "text",
        "text": "10",
        "degrees": 36,
        "radius": 190,
        "weight": 300,
        "size": 60,
        "color": "black",
        "count": 10,
        "family": "Quattrocento, Impact, Helvetica, serif"
      },
      "hour": {
        "type": "arm",
        "axis": "hour10",
        "width": 10,
        "length": 120,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "minute": {
        "type": "arm",
        "axis": "minute100",
        "width": 5,
        "length": 166,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "second": {
        "type": "arm",
        "axis": "second100",
        "width": 2.5,
        "length": 216,
        "offset": 20,
        "color": "#DD2323",
        "shadowColor": "black",
        "shadow": 2
      }
    }
  },
  "elite": {
    "name": "elite",
    "layers": {
      "rim": {
        "type": "circle",
        "color": "beige",
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 5,
        "length": 10,
        "color": "#9A9A9A",
        "layout": "minute"
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 15,
        "length": 30,
        "color": "#ABABAB",
        "layout": "hour"
      },
      "numerals": {
        "type": "radial",
        "content": "text",
        "radius": 190,
        "orient": true,
        "weight": 300,
        "size": 40,
        "color": "#232323",
        "text": "roman",
        "family": "Six Caps, Oswald, Calibri, Impact, sans-serif"
      },
      "face": {
        "type": "circle",
        "color": "#DD2323",
        "radius": 10,
        "border": {
          "width": 5,
          "color": "#DD2323"
        }
      },
      "second": {
        "type": "arm",
        "axis": "seconds",
        "width": 5,
        "length": 236,
        "offset": -8,
        "color": "#DD2323",
        "layers": [
          {
            "type": "path",
            "points": [
              {
                "x": -0.5,
                "y": -235
              },
              {
                "x": -3,
                "y": 65
              },
              {
                "x": 3,
                "y": 65
              },
              {
                "x": 0.5,
                "y": -235
              }
            ]
          }
        ]
      },
      "hour": {
        "type": "arm",
        "axis": "hours",
        "color": "#121212",
        "width": 10,
        "length": 120,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2,
        "layers": [
          {
            "type": "path",
            "points": [
              {
                "x": -3.5,
                "y": -120
              },
              {
                "x": -5,
                "y": 45
              },
              {
                "x": 5,
                "y": 45
              },
              {
                "x": 3.5,
                "y": -120
              }
            ]
          }
        ]
      },
      "minute": {
        "type": "arm",
        "axis": "minutes",
        "color": "#121212",
        "width": 5,
        "length": 166,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2,
        "layers": [
          {
            "type": "path",
            "points": [
              {
                "x": -1.5,
                "y": -165
              },
              {
                "x": -3,
                "y": 65
              },
              {
                "x": 3,
                "y": 65
              },
              {
                "x": 1.5,
                "y": -165
              }
            ]
          }
        ]
      }
    }
  },
  "informatic": {
    "name": "informatic",
    "axes": {
      "REV24": {
        "name": "MPH",
        "pointA": {
          "angle": 180,
          "value": 0
        },
        "pointB": {
          "angle": 540,
          "value": 86400000,
          "comment": "24 * 60 * 60 * 1000"
        }
      }
    },
    "layers": {
      "rim": {
        "type": "circle",
        "color": "#121212",
        "border": {
          "width": 6,
          "color": "black"
        }
      },
      "work": {
        "type": "circle",
        "color": "#0c52eb",
        "radius": 250
      },
      "work2": {
        "type": "sector",
        "color2": "#0c52eb",
        "color": "orange",
        "from": 270,
        "to": 105,
        "radius": 250
      },
      "rim2": {
        "type": "circle",
        "color": "#121212",
        "radius": 246
      },
      "minorTicks": {
        "type": "radial",
        "content": "ticks",
        "radius": 250,
        "width": 2,
        "length": 10,
        "color": "darkgray",
        "layout": 96
      },
      "majorTicks": {
        "type": "radial",
        "content": "ticks",
        "radius": 250,
        "width": 14,
        "length": 20,
        "color": "gray",
        "layout": "24"
      },
      "majorHours": {
        "type": "radial",
        "content": "text",
        "text": "24",
        "start": 180,
        "include": [
          0,
          6,
          12,
          18
        ],
        "orient": true,
        "count": 24,
        "radius": 200,
        "weight": 300,
        "size": 50,
        "color": "#787878",
        "family": "Oswald, Calibri, Impact, sans-serif"
      },
      "minorHours": {
        "type": "radial",
        "content": "text",
        "text": "24",
        "start": 180,
        "exclude": [
          0,
          6,
          12,
          18
        ],
        "orient": true,
        "count": 24,
        "radius": 202,
        "weight": 300,
        "size": 30,
        "color": "#565656",
        "family": "Oswald, Calibri, Impact, sans-serif"
      },
      "minutes": {
        "type": "radial",
        "content": "text",
        "text": "minutes",
        "orient": true,
        "radius": 166,
        "weight": 300,
        "size": 16,
        "color": "#9a9a9a",
        "family": "Oswald, Calibri, Impact, sans-serif"
      },
      "minor3": {
        "type": "radial",
        "content": "ticks",
        "radius": 172,
        "width": 4,
        "length": 10,
        "color": "gray",
        "layout": "minute",
        "exclude": [
          0,
          5,
          10,
          15,
          20,
          25,
          30,
          35,
          40,
          45,
          50,
          55
        ]
      },
      "minor2": {
        "type": "radial",
        "content": "ticks",
        "radius": 158,
        "width": 4,
        "length": 5,
        "color": "#DD2323",
        "layout": "minute"
      },
      "events": {
        "type": "events",
        "radius": [
          150,
          79
        ],
        "width": 10
      },
      "hour": {
        "type": "arm",
        "start": 180,
        "axis": "REV24",
        "width": 14,
        "length": 186,
        "offset": 20,
        "color": "gray",
        "shadowColor": "black",
        "shadow": 2
      },
      "minute": {
        "type": "arm",
        "axis": "minutes",
        "width": 6,
        "length": 158,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "second": {
        "type": "arm",
        "axis": "seconds",
        "width": 4,
        "length": 148,
        "offset": 14,
        "color": "#DD2323",
        "shadowColor": "black",
        "shadow": 2
      },
      "inner2": {
        "type": "circle",
        "color": "#232323",
        "radius": 3
      },
      "glass": {
        "type": "circle",
        "radius": 246,
        "color": {
          "extent": [
            0,
            -256,
            0,
            256
          ],
          "stops": [
            {
              "pos": 0,
              "color": "#FFFFFF11"
            },
            {
              "pos": 0.5,
              "color": "#22222244"
            },
            {
              "pos": 0.5,
              "color": "#22222233"
            },
            {
              "pos": 1,
              "color": "#FFFFFF11"
            }
          ]
        }
      }
    }
  },
  "military": {
    "name": "military",
    "layers": {
      "rim": {
        "type": "circle",
        "color": "beige",
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 5,
        "length": 10,
        "color": "#232323",
        "layout": "minute",
        "exclude": [
          0,
          5,
          10,
          15,
          20,
          25,
          30,
          35,
          40,
          45,
          50,
          55
        ]
      },
      "numerals2": {
        "orient": true,
        "radius": 200,
        "type": "radial",
        "content": "text",
        "weight": 300,
        "size": 36,
        "color": "#121212",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "count": 60,
        "include": [
          0,
          5,
          10,
          15,
          20,
          25,
          30,
          35,
          40,
          45,
          50,
          55
        ],
        "text": "NN"
      },
      "minorLarge": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 10,
        "length": 20,
        "color": "#232323",
        "layout": "minute",
        "include": [
          0,
          5,
          10,
          15,
          20,
          25,
          30,
          35,
          40,
          45,
          50,
          55
        ]
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "radius": 154,
        "width": 15,
        "length": 24,
        "color": "#232323",
        "layout": "24",
        "exclude": [
          0,
          3,
          6,
          9,
          12,
          15,
          18,
          21
        ]
      },
      "numeralsLarge": {
        "type": "radial",
        "content": "text",
        "layout": "24",
        "text": "NN",
        "degrees": 15,
        "radius": 140,
        "weight": 400,
        "size": 36,
        "color": "black",
        "family": "Oswald, Calibri, Impact, 'Segoe UI', Helvetica",
        "include": [
          0,
          3,
          6,
          9,
          12,
          15,
          18,
          21
        ],
        "orient": true
      },
      "label": {
        "type": "text",
        "pos": [
          0,
          56
        ],
        "value": "$label",
        "family": "Calibri",
        "weight": 400,
        "size": 18,
        "color": "black",
        "align": "center"
      },
      "hour": {
        "type": "arm",
        "axis": "HOURS24",
        "width": 20,
        "length": 120,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "minute": {
        "type": "arm",
        "axis": "MINUTES",
        "width": 15,
        "length": 186,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "second": {
        "type": "arm",
        "axis": "SECONDS",
        "width": 5,
        "length": 236,
        "offset": 20,
        "color": "#DD2323",
        "shadowColor": "black",
        "shadow": 2
      }
    }
  },
  "office": {
    "name": "office",
    "layers": {
      "rim": {
        "type": "circle",
        "color": "beige",
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 5,
        "length": 10,
        "color": "#232323",
        "layout": "minute"
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 15,
        "length": 30,
        "color": "#232323",
        "layout": "hour"
      },
      "numerals": {
        "type": "radial",
        "content": "text",
        "text": "12",
        "radius": 190,
        "weight": 300,
        "size": 40,
        "color": "black",
        "family": "Impact, Calibri, 'Segoe UI', Helvetica"
      },
      "label": {
        "type": "text",
        "pos": [
          0,
          56
        ],
        "value": "$label",
        "family": "Calibri",
        "weight": 400,
        "size": 18,
        "color": "black",
        "align": "center"
      },
      "hour": {
        "type": "arm",
        "axis": "HOURS",
        "width": 20,
        "length": 120,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "minute": {
        "type": "arm",
        "axis": "MINUTES",
        "width": 15,
        "length": 166,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "second": {
        "type": "arm",
        "axis": "SECONDS",
        "width": 5,
        "length": 236,
        "offset": 20,
        "color": "#DD2323",
        "shadowColor": "black",
        "shadow": 2
      }
    }
  },
  "pressure": {
    "name": "pressure",
    "axes": {
      "PSI2KPA": {
        "name": "hour10",
        "pointA": {
          "angle": 225,
          "value": 0
        },
        "pointB": {
          "angle": 135,
          "value": 300
        }
      }
    },
    "layers": {
      "rim": {
        "type": "circle",
        "color": "beige",
        "border": {
          "width": 10,
          "color": "#343434"
        }
      },
      "edge": {
        "type": "circle",
        "color": "beige",
        "border": {
          "width": 2,
          "color": "#121212"
        },
        "radius": 246
      },
      "numbers": {
        "type": "radial",
        "content": "text",
        "text": [
          "0",
          "30",
          "60",
          "90",
          "120",
          "150",
          "180",
          "210",
          "240",
          "270",
          "300"
        ],
        "count": 11,
        "color": "black",
        "degrees": 27,
        "weight": "bold",
        "family": "Calibri",
        "size": 40,
        "start": 225,
        "radius": 208,
        "orient": true
      },
      "majorRimBlack": {
        "type": "arc",
        "radius": 168,
        "border": {
          "width": 2,
          "color": "black"
        },
        "start": 225,
        "degrees": 135
      },
      "majorBlack": {
        "type": "radial",
        "content": "ticks",
        "start": 225,
        "count": 11,
        "degrees": 27,
        "radius": 188,
        "color": "black",
        "width": 6,
        "length": 20
      },
      "minorBlack": {
        "type": "radial",
        "content": "ticks",
        "start": 225,
        "count": 60,
        "degrees": 4.5,
        "radius": 182,
        "color": "black",
        "width": 2,
        "length": 14,
        "exclude": [
          0,
          6,
          12,
          18,
          24,
          30,
          36,
          42,
          48,
          54,
          60
        ]
      },
      "majorRim": {
        "type": "arc",
        "radius": 163,
        "border": {
          "width": 2,
          "color": "darkred"
        },
        "start": 225,
        "degrees": 135
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "start": 225,
        "count": 11,
        "degrees": 26.10675729901423,
        "radius": 163,
        "color": "darkred",
        "width": 6,
        "length": 24
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "start": 225,
        "count": 50,
        "degrees": 5.221351459802846,
        "radius": 163,
        "color": "darkred",
        "width": 2,
        "length": 14
      },
      "numbers2": {
        "type": "radial",
        "content": "text",
        "text": [
          "0",
          "400",
          "800",
          "1200",
          "1600",
          "2000"
        ],
        "count": 6,
        "color": "darkred",
        "degrees": 52.21351459802846,
        "weight": "bold",
        "family": "Calibri",
        "size": 30,
        "start": 225,
        "radius": 113,
        "orient": false
      },
      "inner2": {
        "type": "circle",
        "color": "#232323",
        "radius": 6
      },
      "labelKPA": {
        "type": "text",
        "pos": [
          0,
          66
        ],
        "value": "kPa",
        "family": "Calibri",
        "weight": 400,
        "size": 36,
        "color": "darkred",
        "align": "center"
      },
      "labelPSI": {
        "type": "text",
        "pos": [
          0,
          106
        ],
        "value": "psi",
        "family": "Calibri",
        "weight": 400,
        "size": 36,
        "color": "black",
        "align": "center"
      },
      "labelWatermark": {
        "type": "text",
        "pos": [
          0,
          176
        ],
        "value": "$label",
        "family": "Calibri",
        "weight": "bold",
        "size": 18,
        "color": "#b9b9a7",
        "align": "center"
      },
      "pointer": {
        "type": "arm",
        "axis": "PSI2KPA",
        "width": 8,
        "length": 188,
        "offset": 20,
        "color": "#DD2323",
        "shadowColor": "black",
        "shadow": 2,
        "layers": [
          {
            "type": "path",
            "points": [
              {
                "x": -1.5,
                "y": -235
              },
              {
                "x": -5,
                "y": 65
              },
              {
                "x": 5,
                "y": 65
              },
              {
                "x": 1.5,
                "y": -235
              }
            ]
          }
        ]
      },
      "glass": {
        "type": "circle",
        "radius": 246,
        "color": {
          "extent": [
            0,
            -256,
            0,
            256
          ],
          "stops": [
            {
              "pos": 0,
              "color": "#FFFFFF11"
            },
            {
              "pos": 0.5,
              "color": "#22222244"
            },
            {
              "pos": 0.5,
              "color": "#22222233"
            },
            {
              "pos": 1,
              "color": "#FFFFFF11"
            }
          ]
        }
      }
    }
  },
  "simple": {
    "name": "simple",
    "layers": {
      "hour": {
        "type": "arm",
        "axis": "hours",
        "width": 4,
        "length": 200,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 1
      },
      "major_ticks": {
        "type": "radial",
        "content": "ticks",
        "layout": "hour",
        "color": "darkblue",
        "width": 8,
        "length": 40,
        "include": [
          0,
          3,
          6,
          9,
          12
        ]
      },
      "minor_ticks": {
        "type": "radial",
        "content": "ticks",
        "layout": "hour",
        "color": "black",
        "width": 4,
        "length": 10,
        "exclude": [
          0,
          3,
          6,
          9,
          12
        ]
      },
      "inner2": {
        "type": "circle",
        "color": "#232323",
        "radius": 6
      }
    }
  },
  "speedometer": {
    "name": "speedometer",
    "axes": {
      "MPH": {
        "name": "MPH",
        "pointA": {
          "angle": 225,
          "value": 0
        },
        "pointB": {
          "angle": 135,
          "value": 150
        }
      }
    },
    "layers": {
      "back": {
        "type": "circle",
        "color": "black",
        "radius": 256
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "start": 225,
        "count": 31,
        "degrees": 9,
        "radius": 245,
        "color": "#fff",
        "width": 4,
        "length": 40
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "start": 225,
        "count": 90,
        "degrees": 3,
        "radius": 245,
        "color": "#1ec9e8",
        "width": 6,
        "length": 20,
        "exclude": [
          0,
          3,
          6,
          9,
          12,
          15,
          18,
          21,
          24,
          27,
          30,
          33,
          36,
          39,
          42,
          45,
          48,
          51,
          54,
          57,
          60,
          63,
          66,
          69,
          72,
          75,
          78,
          81,
          84,
          87,
          90
        ]
      },
      "arm": {
        "type": "arm",
        "style": "rect",
        "offset": 0,
        "length": 180,
        "axis": "MPH",
        "color": "red",
        "width": 6
      },
      "loop": {
        "type": "circle",
        "radius": 30,
        "color": "black",
        "border": {
          "color": "red",
          "width": 6
        }
      },
      "labels": {
        "type": "radial",
        "content": "text",
        "radius": 180,
        "weight": "bold",
        "text": "*10",
        "count": 16,
        "degrees": 18,
        "start": 225,
        "orient": true,
        "family": "Calibri",
        "size": 30,
        "color": "#fff"
      }
    }
  },
  "stopwatch": {
    "name": "stopwatch",
    "layers": {
      "rim": {
        "type": "circle",
        "color": "#121212",
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "numerals2": {
        "orient": true,
        "radius": 222,
        "type": "radial",
        "content": "text",
        "weight": 300,
        "size": 18,
        "color": "#565656",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "count": 60,
        "exclude": [
          0,
          5,
          10,
          15,
          20,
          25,
          30,
          35,
          40,
          45,
          50,
          55
        ],
        "text": "NN"
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 5,
        "length": 10,
        "color": "darkgray",
        "layout": "minute"
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 15,
        "length": 30,
        "color": "gray",
        "layout": "hour"
      },
      "numerals": {
        "orient": true,
        "radius": 190,
        "type": "radial",
        "content": "text",
        "weight": 300,
        "size": 40,
        "color": "#565656",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "text": "minutes",
        "exclude": [
          0,
          3,
          6,
          9
        ]
      },
      "numerals3": {
        "content": "text",
        "orient": true,
        "radius": 180,
        "type": "radial",
        "weight": 300,
        "size": 60,
        "color": "#898989",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "text": "minutes",
        "exclude": [
          1,
          2,
          4,
          5,
          7,
          8,
          10,
          11
        ]
      },
      "second": {
        "type": "arm",
        "axis": "seconds",
        "relative": true,
        "width": 5,
        "length": 236,
        "offset": -8,
        "color": "#DD2323"
      },
      "inner2": {
        "type": "circle",
        "color": "#DD2323",
        "radius": 10,
        "border": {
          "width": 5,
          "color": "#DD2323"
        }
      },
      "minute": {
        "type": "arm",
        "axis": "minutes",
        "relative": true,
        "color": "#343434",
        "width": 5,
        "length": 216,
        "offset": 0,
        "shadowColor": "black",
        "shadow": 2
      },
      "inner3": {
        "type": "circle",
        "color": "#232323",
        "radius": 5
      }
    }
  },
  "theory": {
    "name": "theory",
    "layers": {
      "degree_ticks_major": {
        "type": "radial",
        "content": "ticks",
        "layout": "hour",
        "color": "black",
        "width": 1,
        "count": 12,
        "length": 34,
        "degrees": 30
      },
      "degree_ticks_minor": {
        "type": "radial",
        "content": "ticks",
        "layout": "hour",
        "color": "black",
        "width": 1,
        "count": 72,
        "length": 6,
        "degrees": 5,
        "exclude": [
          0,
          18,
          36,
          54
        ]
      },
      "degree_circle": {
        "type": "circle",
        "border": {
          "width": 1,
          "color": "black"
        }
      },
      "degree_numerals": {
        "orient": true,
        "radius": 242,
        "type": "radial",
        "content": "text",
        "weight": 300,
        "size": 10,
        "count": 72,
        "degrees": 5,
        "color": "#565656",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "text": "minutes",
        "background": "white"
      },
      "minute_ticks_major": {
        "type": "radial",
        "content": "ticks",
        "layout": "minute",
        "color": "black",
        "width": 1,
        "length": 34,
        "radius": 222,
        "include": [
          0,
          5,
          10,
          15,
          20,
          25,
          30,
          35,
          40,
          45,
          50,
          55
        ]
      },
      "minute_ticks_minor": {
        "type": "radial",
        "content": "ticks",
        "layout": "minute",
        "color": "black",
        "width": 1,
        "length": 6,
        "exclude": [
          0,
          5,
          10,
          15,
          20,
          25,
          30,
          35,
          40,
          45,
          50,
          55
        ],
        "radius": 222
      },
      "minute_circle": {
        "type": "circle",
        "border": {
          "width": 1,
          "color": "black"
        },
        "radius": 222
      },
      "minute_numerals": {
        "orient": true,
        "radius": 202,
        "type": "radial",
        "content": "text",
        "weight": 300,
        "size": 14,
        "color": "#565656",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "text": "minutes",
        "background": "white"
      },
      "hour24_ticks_major": {
        "type": "radial",
        "content": "ticks",
        "layout": "24",
        "color": "black",
        "width": 1,
        "radius": 188,
        "length": 34,
        "include": [
          0,
          2,
          4,
          6,
          8,
          10,
          12,
          14,
          16,
          18,
          20,
          22,
          24
        ]
      },
      "hour24_ticks_minor": {
        "type": "radial",
        "content": "ticks",
        "layout": "24",
        "color": "black",
        "width": 1,
        "radius": 188,
        "length": 10,
        "exclude": [
          0,
          2,
          4,
          6,
          8,
          10,
          12,
          14,
          16,
          18,
          20,
          22,
          24
        ]
      },
      "hour24_circle": {
        "type": "circle",
        "radius": 188,
        "border": {
          "width": 1,
          "color": "black"
        }
      },
      "hour24_numerals": {
        "orient": true,
        "radius": 168,
        "type": "radial",
        "content": "text",
        "weight": 300,
        "size": 14,
        "color": "#565656",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "layout": "24",
        "degrees": 15,
        "text": "NN",
        "background": "white"
      },
      "hour_ticks": {
        "type": "radial",
        "content": "ticks",
        "layout": "hour",
        "color": "black",
        "width": 1,
        "radius": 154,
        "length": 10
      },
      "hour_circle": {
        "type": "circle",
        "radius": 154,
        "border": {
          "width": 1,
          "color": "black"
        }
      },
      "hour_numerals": {
        "orient": true,
        "radius": 134,
        "type": "radial",
        "content": "text",
        "weight": 300,
        "size": 14,
        "color": "#565656",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "text": "12"
      },
      "radian_ticks": {
        "type": "radial",
        "content": "ticks",
        "layout": "hour",
        "color": "black",
        "width": 1,
        "count": 7,
        "radius": 120,
        "length": 10,
        "radians": 1
      },
      "radian_circle": {
        "type": "circle",
        "radius": 120,
        "border": {
          "width": 1,
          "color": "black"
        }
      },
      "radian_numerals": {
        "orient": true,
        "radius": 100,
        "type": "radial",
        "content": "text",
        "weight": 300,
        "size": 14,
        "count": 7,
        "color": "#565656",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "text": [
          "0rad",
          "1rad",
          "2rad",
          "3rad",
          "4rad",
          "5rad",
          "6rad"
        ],
        "radians": 1
      }
    }
  },
  "unitless": {
    "name": "unitless",
    "axes": {
      "TEN": {
        "name": "TEN",
        "pointA": {
          "angle": 225,
          "value": 0
        },
        "pointB": {
          "angle": 135,
          "value": 10
        }
      }
    },
    "layers": {
      "major_ticks": {
        "type": "radial",
        "content": "ticks",
        "layout": "hour",
        "color": "#343434",
        "width": 8,
        "degrees": 27,
        "length": 40,
        "include": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
        ],
        "start": 225
      },
      "major_circle": {
        "type": "arc",
        "radius": 226,
        "border": {
          "width": 10,
          "color": "#343434"
        },
        "start": 225,
        "degrees": 135
      },
      "pointer": {
        "type": "arm",
        "axis": "TEN",
        "color": "#DD2323",
        "layers": [
          {
            "type": "path",
            "points": [
              {
                "x": -2,
                "y": -212
              },
              {
                "x": -5,
                "y": 65
              },
              {
                "x": 5,
                "y": 65
              },
              {
                "x": 2,
                "y": -212
              }
            ]
          }
        ]
      },
      "pin": {
        "type": "circle",
        "radius": 26,
        "color": "white",
        "border": {
          "color": "#DD2323",
          "width": 6
        }
      }
    }
  },
  "uptown": {
    "name": "uptown",
    "layers": {
      "rim": {
        "type": "circle",
        "color": "#fff4ab",
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "centroid": {
        "type": "circle",
        "color": "#fff",
        "radius": 216,
        "border": {
          "width": 1,
          "color": "#343434"
        }
      },
      "centroid2": {
        "type": "circle",
        "color": "beige",
        "radius": 145,
        "border": {
          "width": 1,
          "color": "#343434"
        }
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 5,
        "length": 10,
        "color": "#676767",
        "layout": "minute"
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 10,
        "length": 30,
        "color": "#454545",
        "layout": "hour"
      },
      "numerals": {
        "type": "radial",
        "content": "text",
        "radius": 175,
        "orient": true,
        "weight": 300,
        "size": 60,
        "color": "#232323",
        "text": "roman",
        "family": "Six Caps, Oswald, Calibri, Impact, sans-serif"
      },
      "hour": {
        "type": "arm",
        "axis": "hours",
        "color": "#121212",
        "width": 6,
        "length": 120,
        "offset": 20,
        "layers": [
          {
            "type": "rect",
            "bounds": [
              -3,
              -145,
              6,
              165
            ]
          },
          {
            "type": "rect",
            "bounds": [
              -7,
              -145,
              14,
              40
            ]
          },
          {
            "type": "rect",
            "bounds": [
              -9,
              20,
              18,
              40
            ]
          }
        ]
      },
      "minute": {
        "type": "arm",
        "axis": "minutes",
        "color": "#121212",
        "width": 5,
        "length": 216,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2,
        "layers": [
          {
            "type": "rect",
            "bounds": [
              -2,
              -216,
              4,
              266
            ]
          },
          {
            "type": "rect",
            "bounds": [
              -4,
              -216,
              8,
              30
            ]
          },
          {
            "type": "rect",
            "bounds": [
              -5,
              20,
              10,
              40
            ]
          }
        ]
      }
    }
  }
}
;
return themes;
}));
/**
The Revolve.js library
@file index.js
@version 1.3.0
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
      label: 'Revolve.js | v1.3.0',
      mode: 'discrete',
      layout: 'auto',
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
    if( this.ctx.canvas.width != this.ctx.canvas.clientWidth || // Note [^1]
        this.ctx.canvas.height != this.ctx.canvas.clientHeight ) {
      this.resize( this.ctx.canvas.clientWidth, this.ctx.canvas.clientHeight );
    }
    let th = this.theme;
    th.layers && Object.keys(th.layers).forEach( (k) => {
      CanvasRenderer[ th.layers[k].type ](this.ctx,this,th.layers[k]);
    }, this);
  }

  resize( w, h ) {
    this.ctx.canvas.width = w;
    this.ctx.canvas.height = h;
    if( this.layout === 'auto' ) {
      this.radius = Math.min(w, h) / 2;
    }
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
    this.timer = setInterval( (() => {
      let msince = _milliSinceMidnight();
      if( this.mode === 'continuous' ) {
        this.safeValue = msince;
        this.render();
      }
      else {
        let pulse = this.theme.pulse || 1000;
        let curVal = Math.floor(msince / pulse) * pulse;
        if ( curVal !== this.safeValue ) { // render when second has changed
          this.safeValue = curVal;
          this.render();
        }
      }
    }).bind(this), this.interval || 1000/24.0);
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
    let degreesPer = (lay.degrees || lay.radians) || (360.0 / safeCount);
    for( let n = 0; n < safeCount; n++ ) {
      if( (lay.exclude && lay.exclude.includes(n) ) ||
          (lay.include && !lay.include.includes(n) ) )
        continue;
      ctx.resetTransform();
      ctx.translate( ctx.canvas.width / 2, ctx.canvas.height / 2 );
      ctx.translate( ctl.center[0], ctl.center[1] );
      if( lay.orient || (lay.content !== "text") ) {
        let rotAngle = (n * degreesPer) + (lay.start || 0) + timeRotation;
        let rotRadians = lay.radians ? n * lay.radians : TO_RADIANS * rotAngle;
        ctx.rotate( rotRadians );
      }
      ctx.translate( -ctl.center[0], -ctl.center[1] );
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
    ctx.translate( ctl.center[0], ctl.center[1] );
    ctx.rotate( TO_RADIANS * ax.toAngle( finVal ) );
    ctx.translate( -ctl.center[0], -ctl.center[1] );

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
  ctx.translate( ctx.canvas.width / 2, ctx.canvas.height / 2 );
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
  if( l.background ) {
    c.fillStyle = l.background;
    c.fillRect( p[0] - (metrics.width/2),
                (p[1] + _p(l.size / 3, o)) - _p(l.size, o),
                metrics.width, _p(l.size + 2, o) );
    c.fillStyle = l.color;
  }
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

// [1] Check if the size of the <canvas> has changed before rendering. If it has
// changed, make sure the internal canvas image dims are set to the new value.
// https://stackoverflow.com/q/2588181
//
// Note:
//
//    - this.ctx.canvas.width contains the canvas width as defined at creation
//      time. This will either be the value of the "width" property on the
//      <canvas> element, or 300 if no width is specified.
//
//    - WHEN THE CANVAS IS STRETCHED, this.ctx.canvas.width|height are NOT
//      updated even though the size of the canvas WINDOW *IS*. This leads to
//      stretching of the canvas image.
//
