//Exercises 

//1. Minimum
const min = (a, b) => {
    return Math.min(a, b);
}


console.log(min(0, 10));
console.log(min(0, -10));


//2. Recursion - func calls itself
function isEven(n) {
    if (n % 2 === 0) {
        return true;
    } else if (n % 2 === 1) {
        return false;
    } else {
        return console.log(isEven(Math.abs(n - 2)));
        // console.log(isEven(n - 2)) max call stack size exceeded
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));