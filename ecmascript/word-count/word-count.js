const incrementOrSetCounter = (object, key) => {
  object[key] = object.hasOwnProperty(key) ? object[key] + 1 : 1;
  return object;
};

export default class {
  count(sentence) {
    const words = sentence.toLowerCase().trim().split(/[\s]+/);
    return words.reduce(incrementOrSetCounter, {});
  }
}
