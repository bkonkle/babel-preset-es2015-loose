var test = require('tape'),
	es2015 = require('babel-preset-es2015'),
	es2015Loose = require('..');

var LOOSE = { loose: true };

var PREFIX = 'transform-es2015-';

var SHOULD_BE_LOOSE = [
	PREFIX+'template-literals',
	PREFIX+'classes',
	PREFIX+'computed-properties',
	PREFIX+'for-of',
	PREFIX+'spread',
	PREFIX+'destructuring',
	PREFIX+'modules-commonjs'
];

function getPluginEntry(name) {
	var plugin = require('../node_modules/babel-preset-es2015/node_modules/babel-plugin-'+name);
	for (var i=es2015Loose.plugins.length; i--; ) {
		var p = es2015Loose.plugins[i];
		if (p===plugin || p[0]===plugin) {
			return p;
		}
	}
	return false;
}


SHOULD_BE_LOOSE.forEach(function(name) {
	test(name, function(t) {
		t.plan(3);
		var entry = getPluginEntry(name);

		t.ok(entry, 'Entry for '+name+' should exist');
		t.ok(Array.isArray(entry), 'Entry for '+name+' should be an Array');
		t.deepEqual(entry[1], LOOSE, 'Entry for '+name+' should specify {loose:true}');
	});
});
