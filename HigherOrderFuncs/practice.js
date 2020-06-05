const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//standard for loop
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}
//FOREACH
companies.forEach(function (company) {
    console.log("forEach method - Company Category: ", company.category);
})

//FILTER
//for loop 
let ofAge = [];
for (let a = 0; a < ages.length; a++) {
    if (ages[a] >= 21) {
        ofAge.push(ages[a]);
    }
}
console.log(ofAge);
//filter ES6 - don't need to push - will return with new array if true
const canDrinkArrow = ages.filter(age => age >= 21);
console.log(canDrinkArrow);
//Filter retail companies               //        //condition
const retailCompanies = companies.filter(comp => comp.category === "Retail");
console.log(retailCompanies);
//Get '80s companies
const companiesInEightys = companies.filter(company => {
    // if (eight.start >= 1980 && eight.start < 1990) {
    //     return true;
    // }
    return company.start >= 1980 && company.start < 1990;
})
console.log(companiesInEightys); //array
// get 80s retail companies
const retailEightys = companiesInEightys.filter(c => c.category === "Retail");
console.log(retailEightys);

//MAP
const nameOfCompanies = companies.map(e => e.name);
console.log(nameOfCompanies);
for (let name of nameOfCompanies) {
    console.log(name);
}
//time all ages by 2
function doubler(n) {
    return ages.map(a => {
        return a * n;
    });
}
let dub = doubler(2);
console.log(dub);
//filter out ages over 100
const hundred = dub.filter(age => age >= 100);
console.log(hundred);

//sort

//reduce

//for/of
