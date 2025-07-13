// Primitive 

// 7 types : String ,Number, Boolean , null ,undefined, Symbol ,BigInt

const score = 55
const scoreValue = 55.5
// console.log(typeof scoreValue);

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

//Array[], Objects{}, Functions(){}

const heros = ["shaktiman", "naagraj", "doga",5]


let my_obj = {
    name: "ashika",
    age: 22
}


const myFunc = function(){
    console.log("hello world")
}

myFunc()      //Invocation of Function


console.log(typeof bigNumber);

 console.log(typeof score, typeof scoreValue, typeof isLoggedIn,typeof outsideTemp,typeof  userEmail, typeof userEmail2,typeof  id, typeof anotherid, typeof bigNumber,typeof  heros,typeof  my_obj, typeof myFunc)





 /***************************************Stack and Heap Memory********************************* */


//  Stack(Primitive) = when we ask any value in this, we always get a copy of the original value,
//  Heap (Non-Primitive) = when we ask any value here, we always get the original value as we always change the origainal value

let myInstaName = "ashikakumawat"

let anotherName = myInstaName
anotherName = "ashikathreads"


console.log(anotherName);
console.log(myInstaName);

let user1 = {
    email:"user@gmail.com",
    upi: "user@ybl"

}

let user2 = user1

user2.email = "ashika@gmail.com"

console.log(user1.email);
console.log(user2.email);






