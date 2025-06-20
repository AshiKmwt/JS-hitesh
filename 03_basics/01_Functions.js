function sayMyname() {
  console.log("a");
  console.log("s");
  console.log("h");
  console.log("i");
  console.log("k");
  console.log("a");
  
}

sayMyname()        //     sayMyname = fxn ka reference    ;   () = fxn ka execution/invocation







function addTwoNum(num1,num2){              // (num1,num2) are parameters
  let result = num1 + num2
  return result                            //return ke baad kuch bhi print nahi hoga
   console.log("ashika");
   //or
  //  return num1+num2

}

const result = addTwoNum(4,5)               //(4,5) are Arguments

console.log("Result is", result);           //console is just to print and return is itself a concept




function loginUserMsg(username) {
  return `${username} just logged in`

}

console.log(loginUserMsg("ashikaKmwt"))


