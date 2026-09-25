// 01 - Declare variables called country, continent and population and assign their values according to your own country (population in millions).

let country = "Brazil";
let continent = "South America";
let population = 220.000;

console.log(country);
console.log(continent);
console.log(population);

// 02 - Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet. Log the types of isIsland, population, country and language to the console.

let language;
let isIsland = true;

console.log(typeof country);
console.log(typeof language);
console.log(typeof population);
console.log(typeof isIsland);

// 03 - Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one). Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const. Try to change one of the changed variables now, and observe what happens.

language = 'portuguese';
// const country = 'Portugal';
// const continent = 'Europe';
// const isIsland = false;
isIsland = true;