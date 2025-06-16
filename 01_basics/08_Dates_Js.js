//Dates
 

// 1 Jan 1970                  Any date is calculated by js from this date in miliseconds.

let myDate = new Date()        //Date Object
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

console.log(typeof myDate);

// let myCustomDate = new Date(2023,0, 23)               //month starts from 0 in JS as this is in array
//  let myCustomDate = new Date(2023, 0, 23, 5, 3, 59)
//  let myCustomDate = new Date("2023-01-14")               //here , yy-mm-dd , that's why starts from 0 
 let myCustomDate = new Date("01-14-2025")               //here , mm-dd-yy , that's why starts from 0 , in India this is mostly used
console.log(myCustomDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);               //value in miliseconds from 1 Jan,1970
console.log(myCustomDate.getTime());    //value in miliseconds from 1 Jan,1970

console.log(Math.floor(Date.now()/1000));    //to convert in seconds from ms
console.log(Math.round(Date.now()/1000));    


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);
console.log(newDate.getHours());
console.log(newDate.getTime());

console.log(`${newDate.getDate()} and the time is ${newDate.getTime()}`);

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))






