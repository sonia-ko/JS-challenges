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

console.log(arrayOfMultiples2(7, 5));

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

console.log(ascDesNone([4, 3, 2, 1], "Asc"));
console.log(ascDesNone([7, 8, 11, 66], "Des"));
console.log(ascDesNone([1, 5, 2, 3, 4], "None"));
