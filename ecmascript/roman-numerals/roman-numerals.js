const toRoman = number => {
  let roman;
  if (number <= 3) {
    roman = 'I'.repeat(number);
  } else if (number <= 5){
    roman = 'I'.repeat(5 - number) + 'V';
  } else if (number <= 8){
    roman = 'V' + 'I'.repeat(number - 5)
  } else if (number <= 10) {
    roman = 'I'.repeat(10 - number) + 'X'
  }

  return roman;
};

module.exports = toRoman;

const lookupTable = {
  1 : 'I',
  2 : 'II'
};
