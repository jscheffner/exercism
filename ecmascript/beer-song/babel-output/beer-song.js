'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var range = function range(start, end) {
  return [].concat(_toConsumableArray(Array(end + 1).keys())).slice(start);
};
var upperCaseFirstLetter = function upperCaseFirstLetter(sentence) {
  return sentence[0].toUpperCase() + sentence.slice(1);
};

var bottlesOfBeer = function bottlesOfBeer(index) {
  var response = undefined;
  if (index > 1) {
    response = index + ' bottles of beer';
  } else if (index === 1) {
    response = '1 bottle of beer';
  } else {
    response = 'no more bottles of beer';
  }
  return response;
};

var onTheWall = 'on the wall';
var takeDownAndPassAround = function takeDownAndPassAround(index) {
  return '\nTake ' + (index > 1 ? 'one' : 'it') + ' down and pass it around';
};
var whatToDo = function whatToDo(index) {
  return index > 0 ? takeDownAndPassAround(index) : '\nGo to the store and buy some more';
};
var updateBottles = function updateBottles(index) {
  return index > 0 ? index - 1 : 99;
};

var verse = function verse(index) {
  return upperCaseFirstLetter([bottlesOfBeer(index), onTheWall + ',', bottlesOfBeer(index) + '.' + whatToDo(index) + ',', bottlesOfBeer(updateBottles(index)), onTheWall + '.\n'].join(' '));
};

var sing = function sing() {
  var start = arguments.length <= 0 || arguments[0] === undefined ? 99 : arguments[0];
  var end = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  return range(end, start).reduceRight(function (song, i) {
    return song + '\n' + verse(i);
  }, '');
};

exports['default'] = {
  verse: verse,
  sing: sing
};
module.exports = exports['default'];