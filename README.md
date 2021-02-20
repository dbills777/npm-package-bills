# DGM-3780 NPM

### Performs calculation and display of planet weight and distance measurements:

<br>

## Getting started

install the packing using:

```
npm i @npm-package-bills
```

Import Module:

```
const planets = require('npm-package-bills')
```
Example:
```
    weightOnPlanet('jupiter', 100)
    distanceFromEarth('mars')
    distanceFromTwoPlanets('mars', 'jupiter')
    listAllPlanets()
    planetsByGravity()
```

<br>

## Methods

#### 1) Weight:

---

```
const weightOnPlanet = (planetName, weight) => {
  const searched = planetValues.find((planet) => planet.name == planetName);
  return `On ${planetName} You Would Weigh ${searched.multiplier * weight} lbs`;
};

```

<br>

#### 2) Distance from earth:

---

```
const distanceFromEarth = (planetName) => {
  const searched = planetValues.find((planet) => planet.name == planetName);
  return `${planetName} is ${searched.distance.toLocaleString()} miles from Earth`;
};

```

<br>

#### 3) Distance between 2 planets:

---

```
const distanceFromTwoPlanets = (planetA, planetB) => {
  const a = planetValues.find((planet) => planet.name == planetA);
  const b = planetValues.find((planet) => planet.name == planetB);
  return `${planetA} is ${Math.abs(a.distance - b.distance).toLocaleString()} miles from ${planetB}`;
};

```

<br>

#### 4) List of all planets:

---

```
const listAllPlanets = () => {
  return (allPlanets = planetValues.map((planet) => planet.name));
};

```

<br>

#### 5) List of all planets sorted by Gravity:

---

```
const planetsByGravity = () => {
  return (gravitySort = planetValues.sort((a, b) => b.multiplier - a.multiplier));
};

```

<br>

#### 5) Base Data:

---

```
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

```

<br>
