//array  

//Data Structure means aap data ko rakh kese rahe ho

const myArr = [0,1,2,3,4,5]
const Heros = ["shaktiman","naagraj"]

console.log(myArr[5]);     //indexing of Array

//shallow copy = heap    deep copy = stack

const myArr2 = new Array(1,2,3,4)

//Array Methods

myArr.push(6)
myArr.push(7)
myArr.pop()          //piche se

myArr.unshift(9)
myArr.shift()        //aage se

console.log(myArr.includes(10));
console.log(myArr.indexOf(9));   //hai hi nahi kyuki toh it will give -1,kyuki js doesn't know
console.log(myArr.indexOf(5));


const newArr = myArr.join();  //binds the Array and convert it into String


console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//slice and Splice

console.log("A", myArr);

const a = myArr.slice(1,3);  //slice doesn't manipulate the original array

console.log(a);
console.log("B", myArr);

const b = myArr.splice(1,3)   //splice manipulates the original array

console.log(b)
console.log("C", myArr);  







