const charCode = letter => letter.charCodeAt(0);

const generateKey = (len) => {
  const randomNum = (from, to) => Math.floor(Math.random() * (to - from)) + from;
  const randomLetter = (from, to) => String.fromCharCode(randomNum(charCode(from), charCode(to)));

  return [...Array(len).keys()].map(() => randomLetter('a', 'z')).join('');
};

const shiftLetter = (letter, distance, shiftLeft) => {
  const factor = shiftLeft ? -1 : 1;
  const letterIndex = charCode(letter) - charCode('a');
  const indexes = [...Array(26).keys()];
  const shiftedIndexes = [
    ...indexes.slice(factor * distance),
    ...indexes.slice(0, factor * distance),
  ];

  return String.fromCharCode(shiftedIndexes[letterIndex] + charCode('a'));
};

const substitute = (input, key, decode = false) => [...input].map((letter, i) => {
  const distance = charCode(key[i % key.length]) - charCode('a');

  return shiftLetter(letter, distance, decode);
}).join('');

class Cipher {
  constructor(key) {
    if (!/^[a-z]+$/.test(key)) {
      throw new Error('Bad key');
    }

    this.key = key || generateKey(100);
  }

  encode(input) {
    return substitute(input, this.key);
  }

  decode(input) {
    return substitute(input, this.key, true);
  }
}

module.exports = {
  Cipher,
};
