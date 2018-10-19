'use strict';

var _romanNumerals = require('./roman-numerals');

var _romanNumerals2 = _interopRequireDefault(_romanNumerals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('toRoman()', function () {
  it('converts 1', function () {
    return expect((0, _romanNumerals2.default)(1)).toEqual('I');
  });
  it('converts 2', function () {
    return expect((0, _romanNumerals2.default)(2)).toEqual('II');
  });
  it('converts 3', function () {
    return expect((0, _romanNumerals2.default)(3)).toEqual('III');
  });
  it('converts 4', function () {
    return expect((0, _romanNumerals2.default)(4)).toEqual('IV');
  });
  it('converts 5', function () {
    return expect((0, _romanNumerals2.default)(5)).toEqual('V');
  });
  it('converts 6', function () {
    return expect((0, _romanNumerals2.default)(6)).toEqual('VI');
  });
  xit('converts 9', function () {
    return expect((0, _romanNumerals2.default)(9)).toEqual('IX');
  });
  xit('converts 27', function () {
    return expect((0, _romanNumerals2.default)(27)).toEqual('XXVII');
  });
  xit('converts 48', function () {
    return expect((0, _romanNumerals2.default)(48)).toEqual('XLVIII');
  });
  xit('converts 59', function () {
    return expect((0, _romanNumerals2.default)(59)).toEqual('LIX');
  });
  xit('converts 93', function () {
    return expect((0, _romanNumerals2.default)(93)).toEqual('XCIII');
  });
  xit('converts 141', function () {
    return expect((0, _romanNumerals2.default)(141)).toEqual('CXLI');
  });
  xit('converts 163', function () {
    return expect((0, _romanNumerals2.default)(163)).toEqual('CLXIII');
  });
  xit('converts 402', function () {
    return expect((0, _romanNumerals2.default)(402)).toEqual('CDII');
  });
  xit('converts 575', function () {
    return expect((0, _romanNumerals2.default)(575)).toEqual('DLXXV');
  });
  xit('converts 911', function () {
    return expect((0, _romanNumerals2.default)(911)).toEqual('CMXI');
  });
  xit('converts 1024', function () {
    return expect((0, _romanNumerals2.default)(1024)).toEqual('MXXIV');
  });
  xit('converts 3000', function () {
    return expect((0, _romanNumerals2.default)(3000)).toEqual('MMM');
  });
});