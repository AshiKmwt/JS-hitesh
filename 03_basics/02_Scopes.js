// {} = scope 


// var c = 300
let a = 500;

if (true) {
    let a = 10;
    const b = 20;
// var c = 30;
console.log("Inner:", a);

}


console.log(a)
// console.log(b)
// console.log(c)             //var is globally scoped so var should be avioded as it creates conflicts