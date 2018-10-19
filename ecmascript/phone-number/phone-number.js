const normalizeNumber = number => {
  if (/[a-z]/.test(number)) return null;

  const onlyNumbers = number.match(/[0-9]/g).join('');
  const len = onlyNumbers.length;

  if (len === 10) {
    return onlyNumbers;
  } else if (len === 11 && onlyNumbers[0] === '1') {
    return onlyNumbers.slice(1);
  } else {
    return null;
  }
};

export default class {
  constructor (number) {
    this.num = normalizeNumber(number);
  }
  number () {
    return this.num;
  }
}
