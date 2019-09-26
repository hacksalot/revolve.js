Revolve.js Changelog
===



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
