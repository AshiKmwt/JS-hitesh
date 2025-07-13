// const score = 555;
// console.log(score );

// const bal = new Number (10000)  //new object me define kar raha hu, number type ka ,so it's a new way to store values as js objects.
// console.log(bal);

// console.log(bal.toString());
// console.log(bal.toString().length);


// // let cnvrtstr = String(bal)
// // console.log (typeof cnvrtstr)


// console.log(bal.toFixed(2));    //mainly used in e-commerece app, decimal ke baad kitne value dikhana chahte hai clients ko ,
// console.log(bal.toFixed(1));


// const otherNum = 125.8567
// console.log(otherNum.toPrecision(4));



// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //India



// note- Prototypes are properties and methods (hidden)




//+++++++++++++++++++++++  Maths  ++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));  //-ve +ve me convert ho jata hai lekin +ve +ve hi rhta hai

console.log(Math.round(5.6));        //round off the value
console.log(Math.ceil(4.2));        //ceiling (upar hoti hai), so Top Value
console.log(Math.floor(4.9));       //Floor(neeche hota hai), so Lower Value

console.log(Math.min(5,2,6,7));
console.log(Math.max(5,2,6,7));


console.log(Math.random());  //value always in b/w 0-1
console.log(Math.random()*10); 
console.log((Math.random()*10) + 1);  //guarantees the value will not be zero //min value will be 1


const min = 10;
const max = 20;

console.log(Math.floor(Math.random()* (max-min +1))+ min)
console.log(Math.floor(Math.random() * (max - min + 1))+ min);















