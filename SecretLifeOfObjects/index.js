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
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  var person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  console.log(person.fullName.call(person1));  // Will return "John Doe"
  console.log(person.fullName.call(person2));  // Will return "John Doe"

  var personTwo = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + ", " + city + ", " + country + ", " + this.age;
    }
  }
  var person1 = {
    firstName:"John",
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

//PROTOTYPES