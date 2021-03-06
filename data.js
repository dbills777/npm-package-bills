const planetValues = [
  {
    name: 'earth',
    multiplier: 1,
    distance: 0,
  },
  {
    name: 'mercury',
    multiplier: 0.378,
    distance: 91691000,
  },
  {
    name: 'venus',
    multiplier: 0.907,
    distance: 41400000,
  },
  {
    name: 'mars',
    multiplier: 0.116,
    distance: 78340000,
  },
  {
    name: 'jupiter',
    multiplier: 2.528,
    distance: 628730000,
  },
  {
    name: 'saturn',
    multiplier: 1.064,
    distance: 1275000000,
  },
  {
    name: 'uranus',
    multiplier: 0.889,
    distance: 272395000,
  },
  {
    name: 'neptune',
    multiplier: 1.125,
    distance: 4351400000,
  },
  {
    name: 'pluto',
    multiplier: 0.067,
    distance: 7500000000,
  },
];
module.exports = {
  intro: () => {
    console.log(`Things to try:
    weightOnPlanet('jupiter', 100)
    distanceFromEarth('mars')
    distanceFromTwoPlanets('mars', 'jupiter')
    listAllPlanets()
    planetsByGravity()  `);
  },
  planetValues,
};
