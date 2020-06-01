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
function sing (callback) {
    console.log("la la la la");
    if (callback instanceof Function) {
      callback();
    }
}
function meow() {
    console.log("meow meow");
}
sing();
sing(meow);
// pass in anonymous function 
sing(function() {console.log("meow meow");});

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
    return m => m > n;
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
noisy(Math.min)(3, 2, 1);

//Functions that provide new types of control flow
function unless (test, then) {
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
//Filtering Arrays
// function filter (array, test) {
//     let passed = [];
//     for (let element of array) {
//         if (test(element)) { //if SCRIPTS.living = true, then push that to passed array
//             passed.push(element);
//         }
//     }
//     return passed;
// }
// console.log(filter(SCRIPTS, script => script.living));

// console.log(SCRIPTS.filter(s => s.direction == "ttb"));
console.log(SCRIPTS.filter(function (s) {
    return s.direction == "ttb";
}))

//MAP - The map method transforms an array by applying a function to all of its elements and building a new array from the returned values.
// The new array will have the same length as the input array, but its content will have been mapped to a new form by the function.
let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(rtlScripts);
console.log(rtlScripts.map(s => s.name)); // returns the "name" property of all the filtered objects with "direction" property of "rtl"

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
console.log(numbers.reduce((a, b) => a + b));

console.log(numbers.reduce((a, b) => {
    return a * b;
}));

//Find the script with the most Characters
function characterCount (script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}
console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));