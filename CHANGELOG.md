# Changelog

All notable changes to the "Trim Indent" extension will be documented in this file.

The format is based on [Common Changelog](https://common-changelog.org/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

[1.2.1]: https://github.com/PaulRBerg/trim-indent/releases/tag/v1.2.1
[1.2.0]: https://github.com/PaulRBerg/trim-indent/releases/tag/v1.2.0
[1.1.0]: https://github.com/PaulRBerg/trim-indent/releases/tag/v1.1.0
[1.0.2]: https://github.com/PaulRBerg/trim-indent/releases/tag/v1.0.2
[1.0.1]: https://github.com/PaulRBerg/trim-indent/releases/tag/v1.0.1
[1.0.0]: https://github.com/PaulRBerg/trim-indent/releases/tag/v1.0.0

## [1.2.1] - 2026-03-18

### Changed

- Update `README.md` only

## [1.2.0] - 2026-03-18

### Changed

- Rename "Copy Trimmed" command to "Trim Indent and Copy"

## [1.1.0] - 2026-03-18

### Added

- Copy Trimmed command: trims indent in memory and copies to clipboard without modifying the editor buffer

## [1.0.2] - 2026-03-18

### Changed

- Fix Biome lint issues (block statements, top-level regex)
- Remove `publish.yml` GitHub workflow

## [1.0.1] - 2026-03-18

### Changed

- Include README and CHANGELOG in published extension

## [1.0.0] - 2026-03-18

### Added

- Trim Indent command to remove common leading whitespace from selection
- Support for both spaces and tabs
- Friendly message when no text is selected
