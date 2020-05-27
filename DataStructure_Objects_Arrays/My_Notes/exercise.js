// THE SUM OF A RANGE
function range(a, b, c) {
	let array = [];
	if (c) {
		for (let count = a; count <= b; count += c) {
			array.push(count);
		}
	} else if (!c) {
		for (let count = a; count <= b; count++) {
			array.push(count);
		}
	}
	return array;
}
console.log(range(1, 25, 3));
//sum of range of numbers - rangeOf is an array returned from range()
function sum(rangeOf) {
	let total = 0;
	for (let num of rangeOf) {
		total += num;
	}
	return total;
}
console.log(sum(range(1, 25, 3)));

// REVERSING AN ARRAY
function reverseArray (...array) {
    let newReverse = [];
    newReverse.push(array.reverse());
    console.log(array);
    return newReverse;
}
let reverseFunc = reverseArray("A", "B", "C");
console.log(reverseFunc);

function reverseArrayNew (array) {
    
}
console.log(reverseArrayNew(["A", "B", "C"]));



const reverseArrayInPlace = function (...array) {

}