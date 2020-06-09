//BASICS/LITERALS
const s1 = "Hello";
console.log(typeof s1.toUpperCase()); //string

const s2 = new String("Hello"); //using an String class constructor to create a new String obj
console.log(typeof s2); //object

const num = new Number(69);
console.log(num);
console.log(typeof num);

//OBJ LITERAL
const book1 = {
    title: "Book One",
    author: "John Doe", 
    year: 2013,
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
console.log(book1.getSummary());

const book2 = {
    title: "Book Two",
    author: "Jane Doe", 
    year: 2016,
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
console.log(book2.getSummary());

//all values of object (book1)
console.log(Object.values(book1));
//all "keys" of object
console.log(Object.keys(book2));




//CONSTRUCTOR FUNCTION - ES 5
function Book (title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
            return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

//Instatiate an Object
const book3 = new Book("Book of Code", "Brad Traversy", 2016);
const book4 = new Book("Frozen", "Zamir", 2020);
const book5 = new Book("Game Of Thrones", "D & D", 2011);
const book6 = new Book("Harry Potter", "JK Rowling", 1998);



//PROTOTYPES - if you dont want every new obj you make have the function/property
Book.prototype.isOld = function (...array) {
    // const allBooks = [book3, book4, book5, book6];
    // console.log(allBooks);
    const oldBooks = array.filter(book => book.year > 1993 && book.year < 2012);
    // console.log(oldBooks);
    return oldBooks;
}
//getAuthor
Book.prototype.getAuthor = function () {
    return `Written by ${this.author}`;
}
// get age of book
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old!`;
}
//Revise/Change year
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}

console.log(book3); //book obj
console.log(book4.year); //book4 year property // 2020

console.log(book5.getSummary()); //constructor method
console.log(book5.getAge()); //prototype

console.log(book5); //2011
book5.revise("1994");
console.log(book5); //1994

console.log(book5.isOld(book3, book4, book5, book6));



//INHERITANCE - ES 5
//magazine constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}
//inherit prototype
Magazine.prototype = Object.create(Book.prototype);
//instatiate magazine obj
const mag1 = new Magazine("Mag one", "Brad Trav", 2018, "March");
//use magazine constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);
console.log(mag1.getAge());



//OBJECT.CREATE
//object of protos
const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
            return `${this.title} is ${years} years old!`;
    }
}

//create obj
const bookNew1 = Object.create(bookProtos);
bookNew1.title = "Book New One";
bookNew1.author = "Sam Kook";
bookNew1.year = 2008;
console.log(bookNew1);



//ES6 - CLASSES
class BookES6 {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummaryES6() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old!`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return "Barns & Noble";
    }
}
const bookOne = new BookES6("Book New", "Jane Doe", 1996);
console.log(bookOne);
console.log(bookOne.revise(1872));
console.log(bookOne.year);

console.log(BookES6.topBookStore());

//ES6 - SUB CLASSES - Inheritance
//magazine Subclass
class MagazineES6 extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

//instatiate magazine
const magOne = new MagazineES6("Mag 1", "Zamir", 2016, "Dec");
console.log(magOne);
console.log(magOne.getSummary());






