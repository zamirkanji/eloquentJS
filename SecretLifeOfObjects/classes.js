

//ES6 CLASS NOTATION
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
  }
}

let wiz1 = new Wizard("Zamir", "Dark Elf", this.fire, "fire");
let knight1 = new Knight("Rob", "Viking", ["Ground pound"], "Earth", "Sword", 6);

console.log(wiz1);
wiz1.summary();
wiz1.outputRace();

console.log(knight1);
knight1.outputRace(); //both wiz1 and knight1 have this prop - both point at the same prototype