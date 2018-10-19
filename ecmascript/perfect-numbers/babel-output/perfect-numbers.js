'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var isDivisibleBy = function isDivisibleBy(divisor, dividend) {
  return dividend % divisor === 0;
};
var rangeFromZeroTo = function rangeFromZeroTo(end) {
  return [].concat(_toConsumableArray(Array(end).keys()));
};
var factorsOf = function factorsOf(number) {
  return rangeFromZeroTo(number).filter(function (candidate) {
    return isDivisibleBy(candidate, number);
  });
};
var sumOf = function sumOf(numbers) {
  return numbers.reduce(function (a, b) {
    return a + b;
  }, 0);
};
var aliquotOf = function aliquotOf(number) {
  return sumOf(factorsOf(number));
};

var _default = (function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: 'classify',
    value: function classify(number) {
      if (number <= 0) return 'Classification is only possible for natural numbers.';

      var type = undefined;
      var aliquot = aliquotOf(number);
      if (aliquot < number) {
        type = 'deficient';
      } else if (aliquot > number) {
        type = 'abundant';
      } else {
        type = 'perfect';
      }
      return type;
    }
  }]);

  return _default;
})();

exports['default'] = _default;
module.exports = exports['default'];