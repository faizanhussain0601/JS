// Primitive

// 7 types : strings, number(int),boolean,null,undefined
//           symbl,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 34641876401678646n

// Reference (Non Primitive)

// Array , Objects ,Functions

const heros = ["Ironman","Captain America","Dad"]

let myObj ={
    name : "Faizan",
    age : 23,
}

const myFunction =function(){
    console.log("Hello world");
}

console.log(typeof myFunction);
