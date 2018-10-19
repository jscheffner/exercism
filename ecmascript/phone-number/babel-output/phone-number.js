'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var normalizeNumber = function normalizeNumber(number) {
  if (/[a-z]/.test(number)) return null;

  var onlyNumbers = number.match(/[0-9]/g).join('');
  var len = onlyNumbers.length;
  var normalized = undefined;
  if (len === 10) {
    normalized = onlyNumbers;
  } else if (len === 11 && onlyNumbers[0] === '1') {
    normalized = onlyNumbers.slice(1);
  }
  return normalized || null;
};

var _default = (function () {
  function _default(number) {
    _classCallCheck(this, _default);

    this.num = normalizeNumber(number);
  }

  _createClass(_default, [{
    key: 'number',
    value: function number() {
      return this.num;
    }
  }]);

  return _default;
})();

exports['default'] = _default;
module.exports = exports['default'];