//Exercises 

//1. Minimum
const min = (a, b) => {
    return Math.min(a, b);
}
console.log(min(0, 10)); // 0
console.log(min(0, -10)); // -10

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
console.log(isEven(50)); // true
console.log(isEven(75)); // false
console.log(isEven(-1)); // false

//3. Bean Counting 
const countBs = function (str) {
    let result = 0;
    for (i = 0; i < str.length; i++) {
        // console.log(str[i], i);
        if (str[i] === "B") {
            result++;
            // console.log(result);
        } else {
            // console.log("Not 'B'");
            // return;
        }
    }
    return result;
    // console.log(str.indexOf("B"));
    // console.log(str[0]);
}

function countChar(str, c) {
    let result = 0;
    console.log(c);
    for (i = 0; i < str.length; i++) {
        if (str[i] === c) {
            result++;
        } else {

        }
    }
    return result;
}

console.log(countBs("BBC")); // 2
console.log(countChar("kakkerlak", "k")); // 4