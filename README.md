# babel-preset-es2015-loose

> Babel preset for all es2015 plugins, with loose mode enabled where available.

## Install

```sh
$ npm install --save-dev babel-preset-es2015-loose
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["es2015-loose"]
}
```

### Via CLI

```sh
$ babel script.js --presets es2015-loose
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["es2015-loose"]
});
```
