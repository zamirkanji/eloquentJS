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

//add and delete properties
objectExample.hairColor = "Black";
console.log(objectExample.hairColor); //Black
delete objectExample.hairColor;
console.log(objectExample);

//Object.keys
console.log(Object.keys(objectExample)); //array of all properties and method names


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

//The WERESQUIRREL