var test = require('tape')
var es2015 = require('babel-preset-es2015')
var es2015Loose = require('../index')

var LOOSE = {loose: true}

var PREFIX = 'transform-es2015-'

var SHOULD_BE_LOOSE = [
	PREFIX + 'template-literals',
	PREFIX + 'classes',
	PREFIX + 'computed-properties',
	PREFIX + 'for-of',
	PREFIX + 'spread',
	PREFIX + 'destructuring',
	PREFIX + 'modules-commonjs'
]

function getPluginEntry(name) {
	var plugin = require('babel-plugin-' + name)
	for (var loosePlugin of es2015Loose.plugins) {
		if (loosePlugin === plugin || loosePlugin[0] === plugin) {
			return loosePlugin
		}
	}
	return false
}

SHOULD_BE_LOOSE.forEach(function(name) {
	test(name, function(t) {
		t.plan(3)
		var entry = getPluginEntry(name)

		t.ok(entry, 'Entry for ' + name + ' should exist')
		t.ok(Array.isArray(entry), 'Entry for ' + name + ' should be an Array')
		t.deepEqual(entry[1], LOOSE, 'Entry for ' + name + ' should specify {loose:true}')
	})
});
