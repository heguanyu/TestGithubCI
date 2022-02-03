fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## iOS

### ios build_dependencies

```sh
[bundle exec] fastlane ios build_dependencies
```

Pulls dependencies

### ios gen_apple_doc

```sh
[bundle exec] fastlane ios gen_apple_doc
```

Generate Apple doc

### ios lints

```sh
[bundle exec] fastlane ios lints
```



### ios tests

```sh
[bundle exec] fastlane ios tests
```



### ios push_cocoapods

```sh
[bundle exec] fastlane ios push_cocoapods
```

Push version to cocoapods

### ios xcframework

```sh
[bundle exec] fastlane ios xcframework
```

Create binary frameworks with the `xcframework` format under the `build/` folder.

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
