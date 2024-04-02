// What does the following code return/print?
// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); //  ?
// console.log(yearNeptuneDiscovered); //  ?

// PLANETS: 8,
//  YEAR DISCOVERED: 1846

// Q2
// What does the following code return/print?
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // ?   {YEARNEPTUNEDISCOVERED, YEARMARSDISCOVERED}

// Q3
// What does the following code return/print?
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?  ALEJANDRO, PURPLE
  getUserData({firstName: "Melissa"}) // ? MELISSA, GREEN
  getUserData({}) // ? UNDEFINED, GREEN

// Q4
// What does the following code return/print?
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ? MAYA
console.log(second); // ? MARISA
console.log(third); // ? CHI

// Q5
// What does the following code return/print?
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // ? "RAINDROPS ON ROSES"
  console.log(whiskers); // ? "WHISKERS ON KITTENS"
  console.log(aFewOfMyFavoriteThings); // ? "Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"
  
// Q6 
// What does the following code return/print?
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ? 20, 10, 30

// VARIABLES TO OBJECT PROPERTIES
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

// var a = obj.numbers.a;
// var b = obj.numbers.b;
// ES2015 VERSION

let {numbers:{a,b}} = obj;
//  OR
// const {a,b} = obj.numbers

// ARRAY SWAP
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// ES2015 VERSION
let nums = [3,4];
[nums[0], nums[1]] = [nums[1], nums[0]]

// RACE RESULTS

const raceResults = ([first, second, third, ...rest]) =>{
  return {
    first,
    second,
    third,
    'runners': [...rest]
  };
};

