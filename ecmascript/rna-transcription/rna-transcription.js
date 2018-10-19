const complements = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

const complementNucleotide = (rnaString, nucleotide) => {
  if (!complements[nucleotide]) throw new Error('Invalid input DNA.');
  return rnaString + complements[nucleotide];
};

export default class {
  toRna (dna) {
    return [...dna].reduce(complementNucleotide, '');
  }
}
