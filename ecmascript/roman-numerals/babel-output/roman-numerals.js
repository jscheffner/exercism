'use strict';

var toRoman = function toRoman(number) {
  var roman = void 0;
  if (number <= 3) {
    roman = 'I'.repeat(number);
  } else if (number <= 5) {
    roman = 'I'.repeat(5 - number) + 'V';
  } else if (number <= 8) {
    roman = 'V' + 'I'.repeat(number - 5);
  } else {
    roman = 'I'.repeat(10 - number) + 'X';
  }

  return roman;
};

module.exports = toRoman;