const isDivisibleBy = (divisor, dividend) => dividend % divisor === 0;

const isLeapYear =
  year => isDivisibleBy(4, year) && (!isDivisibleBy(100, year) || isDivisibleBy(400, year));

module.exports = isLeapYear;
