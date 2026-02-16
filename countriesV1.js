const countries = [
  {
    name: "Libya",
    cities: ["Tripoli", "Benghazi", "Misrata"],
    capital: "Tripoli"
  },
  {
    name: "Algeria",
    cities: ["Algiers", "Oran", "Constantine"],
    capital: "Algiers"
  },
   {
    name: "Andorra",
    cities: ["Andorra la Vella", "Escaldes-Engordany", "Encamp"],
    capital: "Andorra la Vella"
  }
];

const letter = "A";


 /*

const filterCountries = [];

for (let country of countries) {
  if (country.name.startsWith(letter)) {
    filterCountries.push(`The capital of ${country.name} is ${country.capital}.`);
  }
}

*/

const filterCountries = countries
  .filter(country => country.name.startsWith(letter))
  .map(country => 
    `The capital of ${country.name} is ${country.capital}.`
  );

if (filterCountries.length > 0) {
  console.log(filterCountries);
} else {
  console.log(`No countries found starting with "${letter}".`);
}
