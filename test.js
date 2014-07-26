'use strict';
var assert = require('assert');
var wordList = require('./index');

it('should return list of words', function () {
	assert(wordList.length > 1000);
});
