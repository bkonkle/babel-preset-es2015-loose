# babel-preset-es2015-loose

>## Deprecation warning

>This project is deprecated for users of Babel v6.13+. It will still be maintained for users of earlier Babel versions. 👍

>The preset that this project is based on, [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages/babel-preset-es2015), now supports setting the "loose" option directly. After updating to `babel-preset-es2015` v6.13.0 or higher, you can remove `'es2015-loose'` from your list of presets and instead use the `'es2015` preset this way:

>```{
  presets: [
    ["es2015", {"loose": true}]
  ]
}```

Babel preset that uses [modify-babel-preset] to modify [babel-preset-es2015]
and enable [loose mode] where available.

## Install

Install both this preset, and the core 'babel-preset-es2015' that it modifies:

```sh
$ npm install --save-dev babel-preset-es2015-loose babel-preset-es2015
```

Why do you need to install both? The idea is that `babel-preset-es2015-loose`
will always be up to date because it will always use the version of
`babel-preset-2015` that you have installed. If you don't want to update to
the latest Babel release - you don't have to. Just pin `babel-preset-2015` to
the version you need.

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
