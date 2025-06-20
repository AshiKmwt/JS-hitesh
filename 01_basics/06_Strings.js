const name = "ashika";
const repo = 5;

console.log(name + repo  + "on github");  //not recommended cause outdated

//backtick

console.log(`Hello my name is ${name} and my repo Count is ${repo}`); //string interpolation

const gameName = new String("ashika-kmwt-com")
console.log(gameName);

console.log(gameName[9])
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt("7")); //have to give indexing
console.log(gameName.indexOf("a"));
console.log(gameName.indexOf("m"));

const newStr = gameName.substring(0,4)  //can't give neg values
console.log(newStr);

const anotherStr = gameName.slice(1,-4)
console.log(anotherStr);

const newStr2 = "     hitesh    "
console.log(newStr2);
console.log(newStr2.trim());

const url = "https://ashika.com/ashika%55yaymeow"

console.log(url.replace("%55", "_"));

console.log(url.includes("%55"));
console.log(url.includes("%055"));


console.log(gameName.split("-"));
console.log(gameName.split("c"));

console.log(gameName.at(-15));      //String("ashika-kmwt-com")
console.log(gameName.at(14));  

console.log(gameName.charCodeAt(2));     
console.log(gameName.codePointAt(6)); 

console.log(gameName.padEnd());
console.log(gameName.padStart());

console.log(gameName.repeat());
console.log(gameName.valueOf());
















