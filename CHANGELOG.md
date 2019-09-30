Revolve.js Changelog
===

## [Release v1.3.0][v1.3.0]

### Added

- Support `<canvas>` resizing via the `layout` property on the clock or gauge (not to be confused with the `layout` property on certain theme layers).

- The new [`theory`](https://revolvejs.org/themes/theory) theme illustrates the relationship between degrees, minutes/seconds, hours, and radians.

- Layers of type `radial` can now include a `radians` element (instead of `degrees`) to specify the angular change directly in radians.

- Ability to set clock pulse rate via the `pulse` value on the theme object. The clock pulse rate is mostly used to decide how often a clock "ticks" under `discrete` animation. The default value is `1000`, which means the clock will "tick" precisely once per second.

    For example, in the `decimal` clock, [the pulse is set to 864](https://github.com/hacksalot/revolve.js/blob/118e5d486777701c20b3e263f4540701b411d33d/src/themes/decimal.json#L3), causing the decimal clock to tick every 864 milliseconds or 0.864 seconds.

- Ability to set a text background color for text radials. Use the `background` property to prepaint a rectangle of the indicated color before painting the text. Useful for ensuring text is painted against a solid-color background if it happens to be positioned on top of some colored pixels.

- New example demonstrating a [resizing analog clock](examples/resize.html).

### Fixed

- Fixed inconsistent positioning via the `center` property. Setting the position of a clock or gauge via `center` should now work correctly.

- Fixed incorrect timing of decimal clock's second hand. The second hand will now tick correctly once every 0.864 seconds.

[v1.3.0]: https://github.com/hacksalot/revolve.js/releases/tag/v1.3.0

## [Release v1.2.0][v1.2.0]

### Added

- Added minified/packaged distribution sources to `dist/`, including `revolve.js`, `revolve.min.js`, `revolve.pkgd.js`, `revolve.pkgd.min.js`, `revolve-themes.js`, and `revolve-themes.min.js`.

- Reintroduced `revolve-themes.json`, a standalone JavaScript file containing all predefined themes.

### Changed

- Improved build packaging.

### Fixed

- Package registration issue.

[v1.2.0]: https://github.com/hacksalot/revolve.js/releases/tag/v1.2.0



## [Release v1.1.0][v1.1.0]

### Added

- New default theme for gauges: [`unitless`][unt].

- Pass arbitrary options with `data-[option-name]="[option-value]"` attributes on Revolve.js `<canvas>` elements. For example, switch a clock between `continuous` and `discrete` animation with `data-mode="continuous"`.

- Support for [GitHub Package Registry][gpr].

- Support for packaged builds (`revolve.pkgd.js` and `revolve.pkgd.min.js`) which include all themes. In these builds, predefined themes are embedded into the main `Revolve` object as `Revolve.themes`. For example, the `dark` theme can be accessed at `Revolve.themes.dark`.

- Usage examples in the [`/examples`][ex] folder.

- Screenshots of each theme in the [`/assets/themes`][asth] folder.

### Fixed

- Issue with auto-initialization of `<canvas data-revolve="...">` elements.

### Screenshot

![][untimg]

[v1.1.0]: https://github.com/hacksalot/revolve.js/releases/tag/v1.1.0
[unt]: https://revolvejs.org/themes/unitless
[gpr]: https://github.com/features/package-registry
[untimg]: assets/themes/unitless.png
[ex]: examples/
[asth]: assets/themes/



## [Release v1.0.0][v1.0.0]

The initial public release of [Revolve.js][r].

### Added

- **Robust on-screen rendering** of analog clocks and gauges with HTML canvas.

- **Precision alignment** and geometrical positioning of clock elements.

- **Continuous and discrete animation** with millisecond precision.

- **Custom clock and gauge axes** (for example, to implement a [pressure gauge][1]).

- **Scalable graphics** at any size or level of zoom.

- **Multiple predefined themes**, from classic office clocks to speedometers.

- **JSON-driven theming system** allows clock and gauge customization to the pixel.

- **Clean ES6 JavaScript** with a permissive MIT license and no dependencies.

- **Dedicated project website** at https://revolvejs.org.

- **Package-friendly** via Yarn and/or NPM; supports AMD, CommonJS, and browser-global approaches.

### Screenshot

![][claimg]

[v1.0.0]: https://github.com/hacksalot/revolve.js/releases/tag/v1.0.0
[r]: https://revolvejs.org
[1]: https://revolvejs.org/themes/pressure
[claimg]: assets/themes/classic.png
