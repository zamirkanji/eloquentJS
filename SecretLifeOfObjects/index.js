//Encapsulation


//Methods - properties that hold function values 
let rabbit = {};
rabbit.speak = function (line) {
  console.log(`The rabbit says ${line}`);
}
rabbit.speak("Hello");
console.log(rabbit);

//This - extra parameter that is passed in a different way
function speak(line) {
  return `The ${this.type} rabbit says ${line}`;
}
let whiteRabbit = {
  type: "White",
  speak
};
let hungryRabbit = {
  type: "Hungry",
  speak
};

console.log(whiteRabbit.speak("Black Lives Matter"));
console.log(hungryRabbit.speak("I'm getting real hungry!"));

//Use call() that takes THIS value as its first argument and treats further arguments as normal parameters
//It can be used to invoke (call) a method with an owner object as an argument (parameter).
//With call(), an object can use a method belonging to another object.
speak.call(whiteRabbit, "This is cool!");

var person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName: "John",
  lastName: "Doe"
}
var person2 = {
  firstName: "Mary",
  lastName: "Doe"
}
console.log(person.fullName.call(person1));  // Will return "John Doe"
console.log(person.fullName.call(person2));  // Will return "John Doe"

var personTwo = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country + ", " + this.age;
  }
}
var person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 45
}
console.log(personTwo.fullName.call(person1, "Oslo", "Norway"));

//THIS and Arrow Functions
function normalize() {
  return this.coords.map(n => n / this.length);
}
const divide = normalize.call(
  {
    coords: [0, 2, 3],
    length: 5
  }
);
console.log(divide); // → [0, 0.4, 0.6]

PROTOTYPES

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};

//Object.create to create an obj with a specific prototype
let killerRabbit = Object.create(protoRabbit);

killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");


function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}


function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");

//Rabbit Example - ES6
class Rabbit {
  constructor(type) {
    this.type = type;
    this.methodExample = function () {
      console.log("Normal Method that is assigned to every object created with this... not in prototype");
    }
  }
  protoMethod(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

blackRabbit.methodExample();
killerRabbit.protoMethod("I am going to kill you!"); //speak() is in prototype
console.log(killerRabbit);
console.log(blackRabbit);

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth); // → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth); // → long, sharp, and bloody
console.log(blackRabbit.teeth); // → small
console.log(Rabbit.prototype.teeth); // → small