"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var incrementOrSetCounter = function incrementOrSetCounter(object, key) {
  object[key] = object.hasOwnProperty(key) ? object[key] + 1 : 1;
  return object;
};

var _default = (function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: "count",
    value: function count(sentence) {
      var words = sentence.toLowerCase().trim().split(/[\s]+/);
      return words.reduce(incrementOrSetCounter, {});
    }
  }]);

  return _default;
})();

exports["default"] = _default;
module.exports = exports["default"];