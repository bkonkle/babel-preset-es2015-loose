# babel-preset-es2015-loose

Babel preset that modifies
[babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) to
enable loose mode where available.

## Install

Install both this preset, and the core 'babel-preset-es2015' that it modifies:

```sh
$ npm install --save-dev babel-preset-es2015-loose babel-preset-es2015
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
})
```
