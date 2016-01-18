# babel-preset-es2015-loose

Babel preset that uses [modify-babel-preset] to modify [babel-preset-es2015]
and enable [loose mode] where available.

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

[babel-preset-es2015]: https://www.npmjs.com/package/babel-preset-es2015
[loose mode]: http://www.2ality.com/2015/12/babel6-loose-mode.html
[modify-babel-preset]: https://github.com/developit/modify-babel-preset
