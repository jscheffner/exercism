'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var flatten = function flatten(array) {
  var _ref;

  return (_ref = []).concat.apply(_ref, _toConsumableArray(array));
};
var sortString = function sortString(string) {
  return [].concat(_toConsumableArray(string)).sort().join('');
};

var isAnagram = function isAnagram(word, candidate) {
  var lowerCaseWord = word.toLowerCase();
  var lowerCaseCandidate = candidate.toLowerCase();
  var areIdentical = lowerCaseWord === lowerCaseCandidate;
  return sortString(lowerCaseWord) === sortString(lowerCaseCandidate) && !areIdentical;
};

var _default = (function () {
  function _default(word) {
    _classCallCheck(this, _default);

    this.word = word;
  }

  _createClass(_default, [{
    key: 'matches',
    value: function matches() {
      var _this = this;

      for (var _len = arguments.length, candidates = Array(_len), _key = 0; _key < _len; _key++) {
        candidates[_key] = arguments[_key];
      }

      return flatten(candidates).filter(function (candidate) {
        return isAnagram(candidate, _this.word);
      });
    }
  }]);

  return _default;
})();

exports['default'] = _default;
module.exports = exports['default'];