'use strict';
var fs = require('fs');
var got = require('got');
var url = 'https://raw.github.com/atebits/Words/master/Words/en.txt';

got(url, function (err, res) {
	if (err) {
		throw new Error(err);
	}
	var words = res.trim().split('\n').sort(function (a, b) {
		return a.length - b.length;
	});
	var i = -1;
	var out = {
		words: words,
		lengths: {}
	}
	var lastLength = 0;
	var len = words.length;
	while (++i < len) {
		if (words[i].length !== lastLength) {
			if (lastLength) {
			  out.lengths[lastLength] = i;
			}
			lastLength = words[i].length;
		}
	}
	fs.writeFileSync('words.json', JSON.stringify(out));
});
