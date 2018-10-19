const range = (start, end) => [...Array(end+1).keys()].slice(start);
const upperCaseFirstLetter = sentence => sentence[0].toUpperCase() + sentence.slice(1);

const bottlesOfBeer = index => {
  let response;
  if (index > 1) {
    response = index + ' bottles of beer';
  } else if (index === 1) {
    response = '1 bottle of beer';
  } else {
    response = 'no more bottles of beer';
  }
  return response;
};

const onTheWall = 'on the wall';
const takeDownAndPassAround = index => `\nTake ${index > 1 ? 'one' : 'it'} down and pass it around`;
const whatToDo = index => index > 0 ? takeDownAndPassAround(index) : '\nGo to the store and buy some more';
const updateBottles = index => index > 0 ? index - 1 : 99;

const verse = index => upperCaseFirstLetter([
    bottlesOfBeer(index),
    onTheWall + ',',
    `${bottlesOfBeer(index)}.${whatToDo(index)},`,
    bottlesOfBeer(updateBottles(index)),
    onTheWall + '.\n'
  ].join(' '));

const sing = (start=99, end=0) => range(end, start).reverse().map(verse).join('\n');

export default {
  verse: verse,
  sing: sing
};
