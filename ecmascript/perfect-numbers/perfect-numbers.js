const isDivisibleBy = (divisor, dividend) => dividend % divisor === 0;
const rangeFromZeroTo = end => [...Array(end).keys()];
const factorsOf = number => rangeFromZeroTo(number).filter(candidate => isDivisibleBy(candidate, number));
const sumOf = numbers => numbers.reduce((a, b) => a + b, 0);
const aliquotOf = number => sumOf(factorsOf(number));

export default class {
  classify (number) {
    if (number <= 0) return 'Classification is only possible for natural numbers.';

    let type;
    const aliquot = aliquotOf(number);
    if (aliquot < number) {
      type = 'deficient';
    } else if (aliquot > number) {
      type = 'abundant';
    } else {
      type = 'perfect';
    }
    return type;
  }
}
