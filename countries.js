const countries = {
  "Brazil": "Brasília",
  "Canada": "Ottawa",
  "China": "Beijing",
  "Denmark": "Copenhagen",
    "Albania": "Tirana",
  "Algeria": "Algiers",
  "Andorra": "Andorra la Vella",
  "Egypt": "Cairo",
  "France": "Paris",
  "Germany": "Berlin",
  "India": "New Delhi",
  "Italy": "Rome",
  "Japan": "Tokyo",
  "Kenya": "Nairobi",
  "Mexico": "Mexico City",
  "Norway": "Oslo",
  "Spain": "Madrid",
  "Sweden": "Stockholm",
  "Switzerland": "Bern",
  "Turkey": "Ankara",
  "United Kingdom": "London",
  "United States": "Washington, D.C."
};

const letter = "A";

const filterCountries = Object.keys(countries)
  .filter(country => country.startsWith(letter))
  .map(country => `The capital of ${country} is ${countries[country]}.`);

if (filterCountries.length > 0) {
  console.log(filterCountries);
} else {
  console.log(`No countries found starting with "${letter}".`);
}
