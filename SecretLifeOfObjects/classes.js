//ES6 CLASS NOTATION

//Wizard/Knight Example
class Wizard {
  constructor(name, race, ultimate, type) {
    this.name = name;
    this.race = race;
    this.ultimate = {
      ice: "Ice Shatter",
      fire: "Arsoney",
      earth: "Ground pound",
      water: "Water Tornado"
    };
    this.type = type;

    this.strength = {
      extraBuff: 5,
      extraStrength: 2.3
    }
    this.summary = function () {
      console.log(`My name is ${this.name} and I am a ${this.race}... My type is ${this.type} and my ultimate is ${this.ultimate}`);
    }
  }
  //Prototype Method
  outputName() {
    console.log(`Hello, my name is ${this.name} and I am a Wizard!`);
  }
}

Wizard.prototype.outputRace = function () {
  console.log(`I am a ${this.race}`);
}

class Knight extends Wizard {
  constructor(name, race, ultimate, type, weapon, height) {
    super(name, race, ultimate, type);
    this.weapon = weapon;
    this.height = height;
    this.strength = {
      extraBuff: 10,
      extraStrength: 4.5
    }
  }
}

let wiz1 = new Wizard("Zamir", "Dark Elf", this.fire, "fire");
let knight1 = new Knight("Rob", "Viking", ["Ground pound"], "Earth", "Sword", 6);

console.log(wiz1);
wiz1.summary();
wiz1.outputRace();

console.log(knight1);
knight1.outputRace(); //both wiz1 and knight1 have this prop - both point at the same prototype


//Rectangle/Area Example
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

// //Prototype Methods
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Rectangle(10, 10);

// console.log(square.area); // 100
// console.log(square);


//DCODE CLASSES Follow Along 
//Class -> Structure of Object being created
//Instance Properties: what they have
// - name
// - age
// - height
//Instance Method: what they do (use instance properties to acheive their result)
// - talk
// - run
// - jump

class Rectangle {
  //setup your object
  constructor(_width, _height, _color = "blue") {
    console.log("The Rectangle is being Created");
    //"this" refers to the object being created by Rectangle class
    // this.width = 5;
    // this.height = 10;
    // this.color = "blue";
    this.width = _width;
    this.height = _height;
    this.color = _color;
  }

  getArea() {
    return this.width * this.height;
  }

  printDescription() {
    console.log(`I am a rectangle of ${this.width} x ${this.height}, and I am ${this.color}`);
  }
}

//Instance properties/methods are unique to each obj
let myRectangle1 = new Rectangle(5, 3);
let myRectangle2 = new Rectangle(10, 5, "red");
console.log(myRectangle1, myRectangle2);
console.log(myRectangle1.getArea(), myRectangle2.getArea());
myRectangle2.printDescription();

//Getters and Setters - define methods on class and used as if they are properties
class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
    this.numberOfRequestsForArea = 0;
  }
  //making a function a property - get the area of each object
  get area() {
    this.numberOfRequestsForArea++; //everytime we request a call to get area, it will go up 1
    return this.width * this.height;
  }
  //can change the area() func property value - passed in the area parameter - value can be set to something else
  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }

  get add() {
    let five = 5;
    return this.plus() + 5;
  }

  plus() {
    return this.width + this.height;
  }
}


let square1 = new Square(4);
console.log(square1);

console.log(square1.area);
square1.area = 25; //used as a property
// console.log(square1.width, square1.height);
console.log(square1.area);

console.log(square1.area);
console.log(square1.area);
console.log(square1.numberOfRequestsForArea);

console.log(square1.add);
console.log(square1.area + square1.add);

//Static Method - method which is defined on class but not part of the new object that is created
class SquareStatic {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }

  static equals(a, b) {
    return a.width * a.height === b.width * b.height ? true : false;
  }

  static isValidDimensions(width, height) {
    return width === height ? true : false;
  }
}

let square2 = new SquareStatic(8);
let square3 = new SquareStatic(10);
// console.log(square2);
console.log(SquareStatic.equals(square2, square3)); //false
console.log(SquareStatic.isValidDimensions(6, 6)); //true

//Inheritance - Extends - creates child class using parent (general) class - takes its features and adds to it
class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  describe() {
    console.log(`I am ${this.name} and I am ${this.age} years old`);
  }
}

class Programmer extends Person {
  constructor(_name, _age, _yearsOfExperience) {
    super(_name, _age);

    //custom behavior of "Programmer"
    this.yearsOE = _yearsOfExperience;
  }

  code() {
    console.log(`${this.name} is coding`); //only programmers can use this method - but all programmers can use Person methods
  }
}

let person1 = new Person("Jeff", 45);
let programmer1 = new Programmer("Dom", 56, 12);
console.log(person1, programmer1);
programmer1.code();
programmer1.describe();

//using Programmer to create new Objects inside an array
const programmers = [
  new Programmer("Dom", 56, 12),
  new Programmer("Jeff", 24, 4),
  new Programmer("Zamir", 26, .5)
]

console.log(programmers);

function developSoftware(programmers) {
  //Develop software
  for (let p of programmers) {
    p.code();
  }
}
developSoftware(programmers);


function outputAge(programmers) {
  let agesAll = [];
  for (let obj of programmers) {
    //for each object, output age
    agesAll.push(obj.age);

    // for (let property in obj) {
    //   const ages = obj[property].age;
    //   return agesAll.push(ages);
    // }
  }
  return agesAll;
}
console.log(outputAge(programmers));

//Polymorphism - redefine a method of a derived child class of a parent class 
class Animal {
  constructor(_nameOfAnimal) {
    this.name = _nameOfAnimal;
  }

  makeSound() {
    console.log(`Generic Animal Sound!`);
  }

}

const a1 = new Animal("Kai");
a1.makeSound();

class Dog extends Animal {
  constructor(_nameOfAnimal) {
    super(_nameOfAnimal);
  }
  //Overriding method from parent class is polymorphism 
  makeSound() {
    super.makeSound(); //uses parent version of this same method
    console.log(`I am a dog, my name is ${this.name} and I go Woof Woof!`);
  }
}

const a2 = new Dog("Sadie");
a2.makeSound();








// let string = new String("Hello");
// console.log(typeof string); //object 
// console.log(string);
// console.log(string.split(""));

let things = new Map();

const myFunc = () => '🍕';

things.set('🚗', 'Car');
things.set('🏠', 'House');
things.set('✈️', 'Airplane');
things.set(myFunc, '😄 Key is a function!');

things.size; // 4

things.has('🚗'); // true

things.has(myFunc) // true
things.has(() => '🍕'); // false, not the same reference
things.get(myFunc); // '😄 Key is a function!'

things.delete('✈️');
things.has('✈️'); // false

things.clear();
things.size; // 0

// setting key-value pairs is chainable
things.set('🔧', 'Wrench')
  .set('🎸', 'Guitar')
  .set('🕹', 'Joystick');

const myMap = new Map();

// Even another map can be a key
things.set(myMap, 'Oh gosh!');
things.size; // 4
things.get(myMap); // 'Oh gosh!'