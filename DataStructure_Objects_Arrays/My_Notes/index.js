//array
let listOfNumbers = [2, 3, 5, 7, 11, {
    example: "Object"
}];
console.log(listOfNumbers[0], listOfNumbers[4]);
console.log(listOfNumbers.filter(function findObject(l) {
    return isNaN(l); //returns whatever is not a number
}));
console.log(listOfNumbers.find(function findObject(l) {
    return isNaN(l); //returns whatever is not a number
}));
console.log(listOfNumbers.length); //property of the array object
console.log(typeof listOfNumbers); //object
console.log(listOfNumbers.indexOf(5)); // 2
//includes method for arrays 
console.log(listOfNumbers.includes("4")); // false
console.log(listOfNumbers.includes(2)); // true

//for...of loop (looping arrays)
for (let element of listOfNumbers) {
    console.log(element); //prints out every property in the array
    // console.log(typeof element); //num, num, num, num, num, object
}

//looping over array object and grabbing name property in each obj
let objectArray = [{ name: "zam", age: 26 }, { name: "sam", age: 28 }, { name: "rob", age: 27 }, { name: "brae", age: 25 }];
console.log(typeof objectArray); // object 
function numberEvents(objectArray) {
    let names = []; // new array for all names
    for (let obj of objectArray) { //loop through array to find each object
        console.log(obj); //obj 
        // obj.name.forEach(p => {
        //     console.log(p);
        //     if (!names.includes(p)) {
        //         names.push(p);
        //     }
        // })
    }
    return names;
}
console.log(objectArray);
console.log(objectArray.length); // 4 (obj)
console.log(numberEvents(objectArray));

//split string into array, loop over every word and make the first letter OF every word uppercase
let stringExample =
    "Hello, my name is zamir. I need to make the first letter of every word uppercase";

let arraySplit = stringExample.split(" ");
// console.log(array);
// console.log(array.length);

function fLetterUpper(arraySplit) {
    for (let word of arraySplit) { // gets every word in array
        // console.log(word);
        let wordArray = word.split(" ");
        console.log(wordArray);
        for (let l of wordArray[0]) {
            console.log(l);
            // let upper = l.toUpperCase();
            // console.log(upper);

        }
    }
}

console.log(fLetterUpper(arraySplit));

//shift and unshift (kind of similar to push() and pop())
let toDoList = ["get cereal", "buy more v8", "buy steak"];
function addTask(task) {
    toDoList.push(task); // adds to back of list 
}
function finishNextTask() {
    toDoList.shift(); // takes the task off the front of the array 
}
function urgentTask(task) {
    toDoList.unshift(task) // adds task to the FRONT of the array 
}
console.log(addTask("buy milk"));
console.log(toDoList);
console.log(finishNextTask());
console.log(toDoList);
console.log(urgentTask("buy salami!"));
console.log(toDoList);

//Array Destructuring 
const arrayDest = [two, three, thirdIndex, ...restOfNums] = listOfNumbers;
console.log(two);
console.log(thirdIndex);
console.log(restOfNums);

//rest parameter (takes in any number of arguments - puts them into an array)
function max (...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) {
            result = number;
        }
    }
    return result;
}
console.log(max(5, 6, 3, 20, 69, -10)); // 69


//object - data structure
let fname = "Zamir";
let age = 26;

const objectExample = {
    color: "Blue",
    model: "S-Class AMG",
    year: 2020,
    brand: "Mercedes",
    2: "John",
    "Zamir Kanji": fname,
    age: "old", //local scope 
    objMethod: function () {
        console.log("YO!");
    }
}

console.log(objectExample.brand); //Mercedes
console.log(objectExample["brand"]); //Mercedes
console.log(objectExample[2]); //John
console.log(objectExample["Zamir Kanji"]); //Zamir
console.log(objectExample.age); //old 
console.log(objectExample["model"]); // S-Class AMG

//add and delete properties
objectExample.hairColor = "Black";
console.log(objectExample.hairColor); //Black
delete objectExample.hairColor;
console.log(objectExample);

//looping through an object itself  - bad way
for (let objKey in objectExample) {
    console.log(objKey); // all property names
    console.log(objectExample[objKey]); // and all their values
}

//objects returned as arrays and looping through them - new way
//use for..of for objects (turn to arrays first using these methods)
//Object.keys
let keys = Object.keys(objectExample);
console.log(keys); //returns array of all property and method names
for (let key of keys) {
    console.log(key); // all property names are shown 
}
//Object.values
let value = Object.values(objectExample)
console.log(value);
for (let val of value) {
    console.log(val.length); //length of every property value in objectExample
}
//Object.entries
console.log(Object.entries(objectExample));


//Method
let doh = "Doh";
console.log(typeof doh.toUpperCase); // → function
console.log(doh.toUpperCase()); // → DOH

//Method - push - pop (for array objects)
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence); // → [1, 2, 3, 4, 5]
console.log(sequence.pop()); // → 5
console.log(sequence); // → [1, 2, 3, 4]


//Object Destructuring 
let objDest = {
    name: "Zamir",
    ageTwo: 26, 
    address: {
        street: "123 st W",
        city: "Seattle"
    },
    hobbies: ["snowboarding", "music", "games"]
}
const { name, ageTwo, favoriteFood = "Chinese" } = objDest;
console.log(name);
console.log(favoriteFood); // default argument - Chinese

//Extra Example
var objArray = [
    { id: 0, name: 'Object 0', otherProp: '321' },
    { id: 1, name: 'O1', otherProp: '648' },
    { id: 2, name: 'Another Object', otherProp: '850' },
    { id: 3, name: 'Almost There', otherProp: '046' },
    { id: 4, name: 'Last Obj', otherProp: '984' }
];

function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

var obj = findObjectByKey(objArray, 'id', 3);
let objNew = objArray.find(obj => obj.id == 3);
