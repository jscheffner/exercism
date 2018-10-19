export default class {
  constructor(sentence) {
    this.sentence = sentence;
  }
  isPangram () {
    const letters = this.sentence.toLowerCase().match(/[a-z]/g);
    return new Set(letters).size === 26;
  }
}
