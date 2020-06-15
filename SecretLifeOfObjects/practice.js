const button = document.getElementById("call_prompt");
const para = document.getElementById("arrayOutput");

function promptHandler() {
    let arrayPrompt = prompt("Please enter your Numbers (Seperated by commas)").split(",");
    arrayPrompt = arrayPrompt.map(Number);
    if (arrayPrompt.length === 0 || arrayPrompt === 0) {
        return [1, 2, 3];
    }
    console.log(arrayPrompt);
    return arrayPrompt;
}

let firstObject = {
    firstArray: ["B", "Z", 69, "k", 35,
        {
            type: "Object",
            onlyNums: [5, 10, 20]
        },
        420
    ],
    anotherObject: {
        anotherArray: [1, 4, 6],
        anotherFunc: function () {
            return this.anotherArray.map(x => {
                let randomNumbers = (Math.random() * 10);
                randomNumbers == 0 ? 1 : randomNumbers;
                return Math.round(x * randomNumbers);
            });
        }
    },
    firstFunction: function () {
        // return this.firstArray.filter(element => element !== (typeof "number"));
        let arrayWithoutNum = [];
        let arrayWithNum = [];
        for (let el of this.firstArray) {
            if (typeof el !== "number") {
                arrayWithoutNum.push(el);
            } else {
                arrayWithNum.push(el);
            }
        }
        console.log(arrayWithNum);
        // arrayWithNum.length >= 2 ? this.prototype.protoMethod(arrayWithNum) : arrayWithoutNum;
        return arrayWithoutNum;
    },
    arrayOperator: function (...array) {
        const combine = array
            .map(x => x * 2)
            .reduce((acc, el) => acc + el, 0);
        return combine;
    },
    //PROTOTYPE
    __proto__: {
        fname: "Zamir",
        lname: "Kanji",
        protoMethod: (x) => {
            return function (arr) {
                return arr.map(e => e * x);
            }
        }
    }
}

console.log(firstObject.anotherObject.anotherFunc());
console.log(firstObject.firstFunction());
console.log(firstObject.arrayOperator(5, 10, 20));
// console.log(firstObject.prototype.protoMethod(2)(promptHandler()));

//class constructor - in this case takes inputed array and adds creates an object using this class


button.addEventListener("click", function (e) {
    // promptHandler();
    console.log(e);
    const prototypeArray = firstObject.__proto__.protoMethod(2)(promptHandler());
    // let parse = String(prototypeArray);
    para.textContent = prototypeArray;
});


