# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning][semver].

## [7.0.0] - 2016-01-12
### Changed
- Moved to a major release because of the introduction of
  [modify-babel-preset], which requires the installation
  of [babel-preset-es2015] in order to modify it.

## 6.2.1 - 2016-01-12 [YANKED]
### Added
- Added some explanation to the README about installing babel-preset-es2015.

## 6.2.0 - 2016-01-12 [YANKED]
### Changed
- Moved to [modify-babel-preset], introducing a new
  peerDependency on babel-preset-es2015. (This should have been a major
  release.)

## [6.1.4] - 2015-12-23
### Fixed
- Corrected the way that the 'loose' option is passed. Before, it wasn't being
  correctly activated.

## 6.1.3 - 2015-11-08
- Forked from [babel-preset-es2015]

[babel-preset-es2015]: https://www.npmjs.com/package/babel-preset-es2015
[modify-babel-preset]: https://github.com/developit/modify-babel-preset
[semver]: http://semver.org/
[7.0.0]: https://github.com/bkonkle/babel-preset-es2015-loose/releases/tag/v7.0.0
[6.1.4]: https://github.com/bkonkle/babel-preset-es2015-loose/releases/tag/v6.1.4
