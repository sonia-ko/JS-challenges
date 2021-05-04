// CHALLENGE 1
// create a method to sort the arrat elements in ascending order without using the method sort:

let arr = [6, 8, 3, 1, 2];

function sortAsc(arr) {
  let changed = false;
  do {
    changed = false;
    arr.forEach((el, i) => {
      if (el > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        changes = true;
      }
    });
  } while (changed);
  console.log(arr);
}

sortAsc(arr);

// CHALLENGE2
// generate an array with the random number of elements. The elements should be numbers. Each element should be unique

function createRandomNumber(n) {
  return Math.trunc(Math.random() * 10);
}

const randomArr = new Array(createRandomNumber());

function fillArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let uniqueNumber = createRandomNumber();

    // while (arr.includes(uniqueNumber)) {
    //   uniqueNumber = createRandomNumber();
    // }

    // arr[i] = uniqueNumber;

    do {
      if (!arr.includes(uniqueNumber)) {
        arr[i] = uniqueNumber;
      } else {
        uniqueNumber = createRandomNumber();
      }
    } while (typeof arr[i] === "undefined");
  }
}

fillArray(randomArr);
console.log(randomArr);

// CHALLENGE 3
// How Much is True?
const arrTrueFalse = [true, false, true, true, true, false, true];
function countTrue(arr) {
  const num = arr.reduce((acc, el) => (el === true ? acc + 1 : acc), 0);
  return num;
}

countTrue(arrTrueFalse);
countTrue([true, false, false, true, false]);
countTrue([false, false, false, false]);
countTrue([]);

// CHALLENGE 4
// Write a function redundant that takes in a string str and returns a function that returns str.

function redundant(str) {
  return function () {
    return str;
  };
}

console.log(redundant("Hello"));

// CHALLENGE 5
//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

//addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300

function addUp(num) {
  let acc = 0;
  for (let i = 1; i <= num; i++) {
    acc = acc + i;
  }
  return acc;
}

const num = addUp(4);
// console.log(num);

// CHALLENGE 6
// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).

//ddName({}, "Brutus", 300) ➞ { Brutus: 300 }

// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }

const stolenItems = {
  piano: 500,
  guitar: 900,
};

function addName(obj, petName, value) {
  const object = { ...obj };
  object[petName] = value;
  return object;
}

// console.log(addName(stolenItems, "Brutus", 400));
// console.log(stolenItems);

// another solution addName=(o,n,v)=>(o[n]=v,o)

// CHALLENGE 7
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []

function toArray(obj) {
  return Object.entries(obj);
}

// The same but without Object.entries()
function toArray2(obj) {
  const newArr = [];
  for (const property in obj) {
    newArr.push([property, obj[property]]);
  }
  return newArr;
}

// console.log(toArray2({ shrimp: 15, tots: 12 }));
// console.log(toArray({ shrimp: 15, tots: 12 }));

// CHALLENGE 8

//Create a function that concatenates n input arrays, where n is variable.
// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
const concat = (...args) => [...args].flat(Number.MAX_VALUE);

// console.log(concat([1, 2], [3, 4]));

function concat2(...args) {
  let returnedArr = [];
  for (const el of args) {
    returnedArr.push(...el);
  }
  return returnedArr;
}
// console.log(concat2([1, 2], [3, 4]));
// console.log(concat2([1, 2, 3], [4, 5], [6, 7]));

function concat3(...args) {
  let returnedArr = [];
  for (const el of args) {
    if (!Array.isArray(el)) {
      returnedArr.push(el);
    } else {
      for (const nestedEl of el) {
        returnedArr.push(nestedEl);
      }
    }
  }
  return returnedArr;
}
// console.log(concat3([1, 2, 3], [4, 5], [6, 7]));

// CHALLENGE 9
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

function arrayOfMultiples(num, length) {
  const arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(num * i);
  }
  return arr;
}

function arrayOfMultiples2(num, length) {
  return [...Array(length)].map((_, i) => num * (i + 1));
}

// console.log(arrayOfMultiples2(7, 5));

// CHALLENGE 10

//Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:
// "Asc" returns a sorted array in ascending order.
// "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.
// Examples
// ascDesNone([4, 3, 2, 1], "Asc" ) ➞ [1, 2, 3, 4]

// ascDesNone([7, 8, 11, 66], "Des") ➞ [66, 11, 8, 7]

// ascDesNone([1, 2, 3, 4], "None") ➞ [1, 2, 3, 4]

function ascDesNone(arr, str = "None") {
  switch (str) {
    case "Asc":
      arr.sort((a, b) => a - b);
      break;
    case "Des":
      arr.sort((a, b) => b - a);
      break;
    default:
      return arr;
  }

  return arr;
}

// console.log(ascDesNone([4, 3, 2, 1], "Asc"));
// console.log(ascDesNone([7, 8, 11, 66], "Des"));
// console.log(ascDesNone([1, 5, 2, 3, 4], "None"));

// CHALLENGE 11
// Create a function that counts the integer's number of digits.

// Examples
// count(318) ➞ 3

// count(-92563) ➞ 5

// count(4666) ➞ 4

// count(-314890) ➞ 6

// count(654321) ➞ 6

// count(638476) ➞ 6
// Notes
// For an added challenge, try to solve this without using strings.
// Optionally, you can solve this via a recursive approach.
// A recursive version of this challenge can be found via this link.
function count(n) {
  return ("" + n).length;
}
// console.log(count(318));
// console.log(count(638476));

function count2(n) {
  let number = Math.abs(n);
  let counter = 1;
  let result = 0;
  do {
    result = result + 1;
    counter = counter * 10;
  } while (counter <= number);

  return result;
}

// CHALLENGE 12

// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false

function allTruthy(...arg) {
  return arg.every((val) => val);
}

// console.log(allTruthy(true, false, true));
// console.log(allTruthy(5, 4, 3, 2, 1, 0));
// console.log(allTruthy(true, true, true));

// CHALLENGE 13

// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

// If you can't find Nemo, return "I can't find Nemo :(".

// Examples
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

// findNemo("Nemo is me") ➞ "I found Nemo at 1!"

// findNemo("I Nemo am") ➞ "I found Nemo at 2!"

//! , ? . are always separated from the last word.
// Nemo will always look like Nemo, and not NeMo or other capital variations.
// Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
// If there are multiple Nemo's in the sentence, only return for the first one.

function findNemo(str) {
  let splitters = [" ", "!", "?", ",", "."];
  let currentWord = "";
  let arr = [];
  for (const symb of str) {
    if (splitters.includes(symb)) {
      if (currentWord !== "") {
        arr.push(currentWord);
        currentWord = "";
      }
    } else {
      currentWord = currentWord + symb;
    }
  }
  if (currentWord !== "") {
    arr.push(currentWord);
  }

  if (arr.includes("Nemo")) {
    return `I found Nemo at ${arr.indexOf("Nemo") + 1}!`;
  } else {
    return `I can't find Nemo :(`;
  }
}

// findNemo = a => {
//   b = a.split(" ").indexOf("Nemo") + 1
//   return b ? `I found Nemo at ${b}!` : "I can't find Nemo :("
// }

// console.log(findNemo("I Nemo am"));
// console.log(findNemo("Nemo is me"));
// console.log(findNemo("I am finding Nemo !"));
// console.log(findNemo("What am I finding???"));
// console.log(findNemo("What am I finding Nemo's???"));

// CHALLENGE  14

// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

// Examples
// testJackpot(["@", "@", "@", "@"]) ➞ true

// testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

// testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

// testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

// testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false

function testJackpot(arr) {
  return arr.every((el) => el === arr[0]);
}
// console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));
// console.log(testJackpot(["SS", "SS", "SS", "SS"]));

// CHALLENGE 15

// A man has n number of apples. If he eats a percentage p of the apples (if apples are available), his children will share the remainder of the apples. Create a function to determine the number of whole apples his children got. If his children did not get any apples, return "The children didn't get any apples".
// getNumberOfApples(10, "90%") ➞ 1
// getNumberOfApples(25, "10%") ➞ 22
// getNumberOfApples(0, "10%") ➞ "The children didn't get any apples"

const getNumberOfApples = (n, p) =>
  Math.floor(n - (n / 100) * parseInt(p)) ||
  "The children didn't get any apples";

// console.log(getNumberOfApples(10, "90%"));
// console.log(getNumberOfApples(25, "10%"));
// console.log(getNumberOfApples(0, "10%"));

// CHALLENGE 16

// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

//numbersSum([1, 2, "13", "4", "645"]) ➞ 3
// numbersSum([true, false, "123", "75"]) ➞ 0
// numbersSum([1, 2, 3, 4, 5, true]) ➞ 15

function numbersSum(arr) {
  return arr
    .filter((el) => typeof el === "number")
    .reduce((acc, el) => acc + el, 0);
}

// console.log(numbersSum([1, 2, "13", "4", "645"]));
// console.log(numbersSum([true, false, "123", "75"]));
// console.log(numbersSum([1, 2, 3, 4, 5, true]));
