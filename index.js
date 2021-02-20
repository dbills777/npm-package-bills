const planetValues = require('./data');

const weightOnPlanet = (planetName, weight) => {
  const searched = planetValues.planetValues.find((planet) => planet.name == planetName);
  return `On ${planetName} You Would Weigh ${searched.multiplier * weight} lbs`;
};
const distanceFromEarth = (planetName) => {
  const searched = planetValues.planetValues.find((planet) => planet.name == planetName);
  return `${planetName} is ${searched.distance.toLocaleString()} miles from Earth`;
};
const distanceFromTwoPlanets = (planetA, planetB) => {
  const a = planetValues.planetValues.find((planet) => planet.name == planetA);
  const b = planetValues.planetValues.find((planet) => planet.name == planetB);
  return `${planetA} is ${Math.abs(a.distance - b.distance).toLocaleString()} miles from ${planetB}`;
};
const listAllPlanets = () => {
  return (allPlanets = planetValues.planetValues.map((planet) => planet.name));
};
const planetsByGravity = () => {
  return (gravitySort = planetValues.planetValues.sort((a, b) => b.multiplier - a.multiplier))
}
console.log(weightOnPlanet('jupiter', 100));
console.log(distanceFromEarth('mars'));
console.log(distanceFromTwoPlanets('mars', 'jupiter'));
console.log(listAllPlanets());
console.log(planetsByGravity());
