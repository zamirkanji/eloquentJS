// let protoRabbit = {
//     speak(line) {
//       console.log(`The ${this.type} rabbit says '${line}'`);
//     }
//   };

//   //Object.create to create an obj with a specific prototype
//   let killerRabbit = Object.create(protoRabbit);

//   killerRabbit.type = "killer";
//   killerRabbit.speak("SKREEEE!");


//   function makeRabbit(type) {
//     let rabbit = Object.create(protoRabbit);
//     rabbit.type = type;
//     return rabbit;
//   }


//   function Rabbit(type) {
//     this.type = type;
//   }
//   Rabbit.prototype.speak = function(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   };
  
//   let weirdRabbit = new Rabbit("weird");

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

