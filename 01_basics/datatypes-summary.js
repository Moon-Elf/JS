// Primitive

// 7 types :  String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 123.32
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 32456789024091840n

// Refrence (Non primitive)

// Arrays, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doda"];

let myObj = {
    name: "Umang",
    age: 20
}

const myFunction = function () {
    console.log("Hello World");
}

// console.log(typeof anotherId);



// +++++++++++++++++++++++++++++++++++++++++++++
let myname = "umangmaurya"
let anothername = myname
anothername = "amansingh"
// console.log(myname);
// console.log(anothername);

let userOne = {
    email: "user@mail.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "user@google.com"

console.log(userOne.email);
console.log(userTwo.email);