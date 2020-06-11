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
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

//Prototype Methods
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log(square);

