function sayMyname() {
  console.log("a");
  console.log("s");
  console.log("h");
  console.log("i");
  console.log("k");
  console.log("a");
  
}

sayMyname()       //     sayMyname = fxn ka reference    ;   () = fxn ka execution/invocation







function addTwoNum(num1,num2){              // (num1,num2) are parameters
  let result = num1 + num2
  return result                            //return ke baad kuch bhi print nahi hoga
   console.log("ashika");
   //or
  //  return num1+num2

}

const result = addTwoNum(4,5)               //(4,5) are Arguments

console.log("Result is", result);           //console is just to print and return is itself a concept




function loginUserMsg(username ="ash") {
  if(!username){
  // if( username === undefined){
    console.log("Please enter your name");
    return
    
}
  return `${username} just logged in`

}

loginUserMsg("ashikaKmwt")      //fxn ne value return kar di as said in fxn but usne print nahi kia kyuki print ke liye nahi bola

console.log(loginUserMsg("ashikaKmwt"))
console.log(loginUserMsg());


function calCartPrice(val1,val2,...num1){          //Rest is operator , val1=200 and val2=400 chla gaya
  return num1
}

console.log(calCartPrice(200,400,500))





//Passing Objects in Functions


const user ={username:"Ram", prices:1000}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
  
}

handleObject(user)

//or

handleObject({username:"krishn", price:999})




//Passing Array in Functions

const myNewArray = [500,1000,1500,2500]

function returnSecondValue(getArray){
  return getArray[1]

}

console.log(returnSecondValue(myNewArray));
//or
console.log(returnSecondValue([500,1000,1500,2500]));







