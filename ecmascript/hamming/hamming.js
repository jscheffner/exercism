const incrementIfDifferent = (counter, a, b) => counter + (a !== b);
const hamming =
  (a, b) => a.reduce((distance, element, index) => incrementIfDifferent(distance, element, b[index]), 0);

class Hamming {
  compute(a, b) {
    if (a.length !== b.length) throw new Error('DNA strands must be of equal length.');
    return hamming([...a], [...b]);
  }
}

export default Hamming;
