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

console.log(typeof anotherId);