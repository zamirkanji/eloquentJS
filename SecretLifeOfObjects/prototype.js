
let empty = {};
console.log(empty.toString); //from prototype
// → function toString(){…}
console.log(empty.toString());
// → [object Object]

console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null

//create an object with a specific prototype
let protoRabbit = {
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  };
  let killerRabbit = Object.create(protoRabbit);
  killerRabbit.type = "killer";
  killerRabbit.speak("SKREEEE!");
  // → The killer rabbit says 'SKREEEE!'

function Particle() {
    this.x = 100;
    this.y = 90;
}

//put show in prototype so they both point to here when they need this function
Particle.prototype.show = function () {
    point(this.x, this.y);
}

let p = new Particle(); //new object - shows JS that Particle is a constructor Function
let p2 = new Particle();
p2.x++;

console.log(p.hasOwnProperty("show")); //shows that show() function is in the prototype

// class Vector {
//     constructor(x, y, z) {
//         this.x = 5;
//         this.y = 10;
//         this.z = 8;
//     }

//     protoMethod() {
//         console.log("This is a prototype method in a class constructor");
//     }
// }

// let v = new Vector();

// Vector.prototype.double = function () {
//     this.x *= 2;
//     this.y *= 2;
//     this.z *= 2;
// }

// console.log(v.double());


// v.protoMethod();
// v.getPrototypeOf();

