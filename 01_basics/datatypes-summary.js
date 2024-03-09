/*

    title         Primitive
    
    notes       7 typess : String, Number, Boolean, null, undefined, Symbol, BigInt


    title         Reference (Non Primitive)

    notes       Array, Object, Function

    ?           Is Javascript Dynamic Typed Language Or Static Typed Language?
    >           Javascript is Dynamic Typed Language (No need to specify data type).
*/


const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail

const id  = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 1238752481278213123n

const heros = ["Hulk", "Thor", "Captain America"]
let myObj = {
    name: "Umang",
    age : 21
}

const myFunction = function() {
    console.log("Hello World");
}

// console.log(typeof heros);







// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* 
    title       Stack (Primitive), Heap (Non-Primitive)
*/

let name = "Umang"
let anotherName = name
anotherName = "Aman"


// console.log(name);
// console.log(anotherName);

let userOne = {
    name: "Umang",
    age: 21
}

let userTwo = userOne

userTwo.name = "Aman"

console.log(userOne);
console.log(userTwo);