// Primitive 

// 7 types : String ,Number, Boolean , null ,undefined, Symbol ,BigInt

const score = 55
const scoreValue = 55.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;
let userEmail2 = undefined

const id = Symbol("12345")
const anotherid = Symbol("12345")

console.log(id === anotherid);
console.log(id, anotherid);

const bigNumber = 543879642998647297389783n




//Reference (Non-Primitive)

//Array, Objects Functiions

const heros = ["shaktiman", "naagraj", "doga"]


let my_obj = {
    name: "ashika",
    age: 22
}


const myFunc = function(){
    console.log("hello world")
}

console.log(typeof bigNumber);

 console.log(typeof score, typeof scoreValue, typeof isLoggedIn,typeof outsideTemp,typeof  userEmail, typeof userEmail2,typeof  id, typeof anotherid, typeof bigNumber,typeof  heros,typeof  my_obj, typeof myFunc)

