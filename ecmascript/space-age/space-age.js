const timeTable = {
  onEarth:   1,
  onMercury: 0.2408467,
  onVenus:   0.61519726,
  onMars:    1.8808158,
  onJupiter: 11.862615,
  onSaturn:  29.447498,
  onUranus:  84.016846,
  onNeptune: 164.79132
};

const createMethod = (key, seconds) => () => +(seconds / (timeTable[key] * 31557600)).toFixed(2);

class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;

    Object.keys(timeTable).forEach(key => {
      this[key] = createMethod(key, this.seconds);
    });
  }
}

export default SpaceAge;
