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

### ios prepareOtherDocs

```sh
[bundle exec] fastlane ios prepareOtherDocs
```

Generate tag history from git

### ios p

```sh
[bundle exec] fastlane ios p
```

Playground

### ios gen_web_ui_to_docs

```sh
[bundle exec] fastlane ios gen_web_ui_to_docs
```

Generate Apple doc and push to the public repo

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



### ios b

```sh
[bundle exec] fastlane ios b
```

Just build

### ios create_release

```sh
[bundle exec] fastlane ios create_release
```

Create a release based on change log

### ios xcframework

```sh
[bundle exec] fastlane ios xcframework
```

Create binary frameworks with the `xcframework` format under the `build/` folder.

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
