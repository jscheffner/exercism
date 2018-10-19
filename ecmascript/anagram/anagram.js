const flatten = array => [].concat(...array);
const sortString = string => [...string].sort().join('');

const isAnagram = (word, candidate) => {
  const lowerCaseWord = word.toLowerCase();
  const lowerCaseCandidate = candidate.toLowerCase();
  const areIdentical = lowerCaseWord === lowerCaseCandidate;

  return sortString(lowerCaseWord) === sortString(lowerCaseCandidate) && !areIdentical;
};

export default class {
  constructor (word) {
    this.word = word;
  }
  matches (...candidates) {
    return flatten(candidates).filter(candidate => isAnagram(candidate, this.word));
  }
}
