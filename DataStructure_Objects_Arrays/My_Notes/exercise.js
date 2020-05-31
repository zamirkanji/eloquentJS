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
// console.log(range(1, 25, 3));
//sum of range of numbers - rangeOf is an array returned from range()
function sum(rangeOf) {
	let total = 0;
	for (let num of rangeOf) {
		total += num;
	}
	return total;
}
// console.log(sum(range(1, 25, 3)));

// REVERSING AN ARRAY
function reverseArray (...array) {
    let newReverse = [];
    newReverse.push(array.reverse());
    // console.log(array);
    return newReverse;
}
let reverseFunc = reverseArray("A", "B", "C");
// console.log(reverseFunc);

//WITHOUT REVERSE - creates new array
function reverseArrayNew (array) {
	let newArray = [];
	for (const element of array) {
		newArray.unshift(element);
	}
	return newArray;
}
console.log(reverseArrayNew(["A", "B", "C"]));

//Modifies same array
let arrayValue = [1, 2, 3, 4, 5];

// const reverseArrayInPlace = (arrayValue) => {
// 	console.log(arrayValue);
// 	for (let e of arrayValue) {
// 		console.log(e);
// 	}
	
// }
reverseArrayInPlace(arrayValue);
console.log(arrayValue);


//REST parameter takes all function call arguments  and puts them into an array 
function example (...restExample) {
	return restExample;
}
let rest = example(1, 3);
console.log(rest); // [1, 3]

//SPREAD  operator takes already array and uses it as a function call argument and spreads it out as each value 
function exampleSpread (one, two, three, four = 10) {
	console.log(one, two, three, four); // 1, 4, 8, 12
	// return [...spread * 2];
}
let spreadArray = [1, 4, 8, 12];
exampleSpread(...spreadArray);

//takes array turns into into seperate arguments and then back to array (Rest) and then returns array * 2
function exampleSpread_Rest (...spread) {
	console.log(spread);
	const mapSpread = spread.map(x => {
		return x * 2;
	})
	// console.log(mapSpread);
	return mapSpread;
}
let spreadArray_Rest = [1, 4, 8, 12];
const doubleValue = exampleSpread_Rest(...spreadArray_Rest);
console.log(doubleValue);
