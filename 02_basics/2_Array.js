const marvelheros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvelheros.push(dc_heros)

// console.log(marvelheros);
// console.log(marvelheros[3][0]);

const allheros = marvelheros.concat(dc_heros)   //returns a new array

// console.log(allheros);

const all_newheros = [...marvelheros, ...dc_heros]    //spread operator = kaanch ka glass liya ,usko gira dia, toh vo spread ho gaya

// console.log(all_newheros)

const anotherArr = [1,2,3,[4,5,6,7],7, [6,7,[4,5]]]
console.log(anotherArr)

const realArr = anotherArr.flat(Infinity)
console.log(realArr);




// while data scraping from webpages, we get data in diff format ,so we can convert that data in array as-

console.log(Array.isArray("ashika"))
console.log(Array.from("ashika"))
console.log(Array.from({name:"ashika"}))  //Interesting[]


let score1 =100
let score2 =200
let score3 = 300

console.log(Array.of(score1,score2,score3));




