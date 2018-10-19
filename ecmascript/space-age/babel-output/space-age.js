"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var timeTable = {
  onEarth: 1,
  onMercury: 0.2408467,
  onVenus: 0.61519726,
  onMars: 1.8808158,
  onJupiter: 11.862615,
  onSaturn: 29.447498,
  onUranus: 84.016846,
  onNeptune: 164.79132
};

var createMethod = function createMethod(key, seconds) {
  return function () {
    return +(seconds / (timeTable[key] * 31557600)).toFixed(2);
  };
};

var SpaceAge = function SpaceAge(seconds) {
  var _this = this;

  _classCallCheck(this, SpaceAge);

  this.seconds = seconds;

  Object.keys(timeTable).forEach(function (key) {
    _this[key] = createMethod(key, _this.seconds);
  });
};

exports["default"] = SpaceAge;
module.exports = exports["default"];