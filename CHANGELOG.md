# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## \[Unreleased]

### Added

* Added a **troubleshooting guide** (`TROUBLESHOOTING.md`) summarising common issues and work‑arounds (alignment issues, dropdown rendering, email templates, bold weight support, wkhtmltopdf integration, Flutter/React Native support and the transition to the new Unicode code point).
* Added **true bold font files** under `fonts/bold/` (including `.ttf`, `.woff`, and `.woff2`), along with separate CSS classes for the bold weight (`.icon-saudi_riyal_bold` and `.icon-saudi_riyal_bold_new`).
* Added support for the new **Saudi Riyal currency sign** (`U+20C1`) with dedicated CSS classes (`.icon-saudi_riyal_new` and `.icon-saudi_riyal_bold_new`).
* Added manual `@font-face` examples demonstrating how to integrate the font in custom projects and how to choose between `U+E900` and `U+20C1`.

### Changed

* **Directory structure:** Moved font files into `fonts/regular` and `fonts/bold` directories.
* **README:** Updated installation instructions, CSS examples, and usage documentation to reflect the new directory structure and dual code points.  Added notes on symbol alignment and guidelines for mixing fonts on mobile platforms.
* **Symbols:** Improved the glyph’s baseline alignment based on user feedback.
* **Deprecated:** The private‑use code point `U+E900` remains for backward compatibility but is now marked as legacy; new projects should migrate to `U+20C1`.

## \[1.1.0] – 2025‑09‑08

### Added

* Introduced the bold weight for the Saudi Riyal font.
* Added support for the new currency code point `U+20C1` pending inclusion in Unicode 17.

### Changed

* Adjusted the symbol’s baseline alignment.
* Updated package scripts and examples to use the new directory structure (`fonts/regular`, `fonts/bold`).

### Fixed

* Fixed the symbol not appearing in bold by adding a true bold font file.
* Fixed misalignment of the symbol relative to surrounding text.

## \[1.0.0] – 2024‑??‑??

* Initial release of the Saudi Riyal Font with a single regular weight using the private‑use code point `U+E900`.
