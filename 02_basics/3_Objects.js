//singleton
// Object.create


const mySymbol = Symbol("mykey1")


//object literals
const JSuser = {
    key:"value",
    name:"krishna",
   "full name":"Krishna Yadav",
    [mySymbol]:"mykey1",
    age:22,
    location:"jaipur",
    email:"krishna@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["mon","sat"]

}



//Access value of Objects

console.log(JSuser.key);
// console.log(JSuser.full name);           we can't access like this 
console.log(JSuser["full name"]);
console.log(JSuser[mySymbol]);
console.log(typeof mySymbol); 




//Change Values of Objects

JSuser.email = "ashika@gmail.com"
// Object.freeze(JSuser)              //this will freeze the object and it can't be changed after this
JSuser.email = "ashika@chatgpt.com"
console.log(JSuser);
 
JSuser.greeting = function () {
    console.log("Hello JS user");
}


JSuser.greetingTwo = function(){
    console.log(`Hello JS user,${this.age} `);
    
}
console.log(JSuser);

console.log(JSuser.greeting());
    
console.log(JSuser.greetingTwo());

    






