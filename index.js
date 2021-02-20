const planetValues = require('./data');

const weightOnPlanet = (planetName, weight) => {
  const searched = planetValues.planetValues.find((planet) => planet.name == planetName);
  return `On ${planetName} You Would Weigh ${searched.multiplier * weight} lbs`;
};
const distanceFromEarth = (planetName) => {
  const searched = planetValues.planetValues.find((planet) => planet.name == planetName);
  return `${planetName} is ${searched.distance.toLocaleString()} miles from Earth`;
};
const distanceFromEarth = (planetName) => {
  const searched = planetValues.planetValues.find((planet) => planet.name == planetName);
  return `${planetName} is ${searched.distance.toLocaleString()} miles from Earth`;
};

console.log(weightOnPlanet('jupiter', 100));
console.log(distanceFromEarth('mars'));