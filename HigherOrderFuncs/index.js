//Abstraction


//Abstracting Repetition
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
repeat(5, console.log);

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);

//Higher-Order Functions - Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. 
//Abstract over actions, not just values
function sing(callback) {
    console.log("la la la la");
    if (callback instanceof Function) {
        callback();
    }
}
function meow() {
    console.log("meow meow");
}
sing();
sing(meow); //using the return of function meow as a callback to function sing
// pass in anonymous function 
sing(function () { console.log("meow meow"); });

// function that returns another function
function multiplier(factor) {
    return function (x) {
        return x * factor; //factor is able to be used because of Closure
    }
}

//arrow function 
const arrowMultiplier = (factor) => {
    return x => x * factor;
}
let doubler = multiplier(2); //doubler is now a function that returns x * 2
let tripler = arrowMultiplier(3);
console.log(doubler);
console.log(doubler(4)); // 8
console.log(tripler(3)); // 9

//Functions that create new functions
function greaterThan(n) {
    return function (m) {
        return m > n;
    }
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // true

//Functions that change other functions
function noisy(f) {
    //anon function that takes args with f and returns it - and runs everytime noisy() is called 
    return function (...args) { //rest parameter - turns args into an array
        console.log("Calling with", args);
        let result = f(...args);
        console.log("Called with", args, "Returned", result);
        return result;
    }
}
noisy(Math.min)(3, 2, 1); // 1 - Basically saying Math.min([3, 2, 1])

//Functions that provide new types of control flow
function unless(test, then) {
    if (!test) then();
}
repeat(3, n => {
    unless(n % 2 === 1, () => { //if test(!n % 2 === 1) then it is even
        console.log(n, "Is even");
    })
})

//For Each
let arrayLetters = ["A", "B"];
arrayLetters.forEach(l => {
    console.log(l);
}) // A B

//Script Data Set - higher order func data processing

// FILTER - 
function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) { //if SCRIPTS.living = true, then push that to passed array
            passed.push(element);
        }
    }
    return passed;
}
console.log(filter(SCRIPTS, script => script.living)); // all scripts with the "living" property that is true

console.log(SCRIPTS.filter(function (s) {
    return s.direction == "ttb";
}))
console.log(SCRIPTS.filter(s => s.direction == "ttb")); // arrow

//FILTER - example
let filterArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filterArray.filter(f => {
    return f >= 5;
}))

//MAP - The map method transforms an array by applying a function to all of its elements and building a new array from the returned values.
// The new array will have the same length as the input array, but its content will have been mapped to a new form by the function.
let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(rtlScripts);
console.log(rtlScripts.map(s => s.name)); // returns the "name" property of all the filtered objects with "direction" property of "rtl"

//MAP - higher order example example
let numbersMap = [4, 8, 16, 32];
console.log(numbersMap.map(x => {
    return x * 2;
}))

// MAP - example
function mapMultiplier(arr) {
    return (mult) => {
        arr.map(a => {
            return a * mult;
        })
    }
}
console.log(mapMultiplier(numbersMap));

//REDUCE - builds a value by repeatedly taking a single element from the array and combining it with the current value.
// When summing numbers, you’d start with the number zero and, for each element, add that to the sum.
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));  // → 10

// If your array contains at least one element, you are allowed to leave off the start argument. 
// The method will take the first element of the array as its start value and start reducing at the second element.
let numbers = [1, 2, 3, 4];
console.log(numbers.reduce((a, b) => a + b)); // adds up all numbers in "numbers" array

console.log(numbers.reduce((a, b) => {
    return a * b;
}));

//Find the script with the most Characters
function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}
console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));

//Find the avg year of origin for living and dead scripts in SCRIPTS
function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
    SCRIPTS.filter(s => s.living).map(s => s.year)))); //returns all living scripts and their years and uses that as argument to average()
// → 1165
console.log(Math.round(average(
    SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 204

//Without higher order - as one big loop 
let total = 0, count = 0;
for (let script of SCRIPTS) {
    if (script.living) {
        total += script.year;
        count++;
    }
}
console.log(Math.round(total / count));
// → 1165

//SOME - tests whether at least one element in the array passes the test implemented by the provided function - returns boolean
const arrayEven = [33, 4, 7, 27, 91, 433];
const even = (e) => e % 2 === 0;
console.log(arrayEven.some(even)); //true (one of the elements in the array is even)

const arrayOdd = [1, 3, 5, 7];
console.log(arrayOdd.some(function (arr) {
    return arr % 2 === 0;
})); // false (no element in the array is even)

//FIND INDEX - shows position of first element in array that passes the test implemented by the provided function
const arrayFindIndex = [4, 8, 12, 17, 19];
const odd = (element) => element % 2 === 1;
console.log(arrayFindIndex.findIndex(odd)); //3 (17)

//INDEX OF 
console.log(arrayFindIndex.indexOf(12)); //2 

//STRINGS AND CHARACTER CODES -  
// str.charCodeAt(index) - good for UTF-8  (0 - 65535 or 0xFFFF)
// str.codePointAt(index) - better for UTF-16 (0 - 1114111 or 0x10FFFF)
let emojis = "😆😀😂🍔🔥❤"; //each emoji is 2 characters
let str = "ab🔥C"; // 5 (fire emoji is 2)

console.log(str.length); //5
console.log(
  str.charAt(0),
  str.charAt(1),
  str.charAt(2),
  str.charAt(3),
  str.charAt(4)
);

let cs = str.charCodeAt(0);
console.log(cs, cs.toString(16));

let cca = emojis.charCodeAt(0);
let cpa = emojis.codePointAt(0);
console.log(cca, cpa, cca.toString(16), cpa.toString(16));

//go back from code to character
let char3 = String.fromCharCode(cs);
console.log(char3);
let char1 = String.fromCharCode(cca);
let char2 = String.fromCodePoint(cpa);
console.log(char1, char2);
