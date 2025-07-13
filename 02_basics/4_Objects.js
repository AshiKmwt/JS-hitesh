//Objects can be declare in two ways:
           //1.Literals
           //2.Constructor

const tinderUser = new Object()           //Singleton Object /Constructor
// const tinderUser = {}                //Non-Singleton Object /Literals

tinderUser.id = "12345ab"
tinderUser.name = "ashika"
tinderUser.isLoggedIn = false


console.log(tinderUser);

const regUser = {
    email:"ashikakmwt@gmail.com",
    fullname:{
         username:{
            firstname:"ashika",
            lastname:"kumawat"
         }
    }
}

console.log(regUser);

console.log(regUser.fullname.username.firstname);


const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"a",
    4:"b"
}

// const obj3 = {obj1,obj2}

const obj3 =Object.assign({}, obj1,obj2)      //(target{},source obj1,ob2 ,..etc)

const obj4 = {...obj1, ...obj2}               //spread operator

console.log(obj3);
console.log(obj4);

const users = [
    {
        id:1,
        email:"a@gamil.com"
    },
    {
        id:1,
        email:"a@gggggamil.com"
    },
    {
        id:1,
        email:"a@gamil.com"
    },
    {
        id:1,
        email:"a@gamil.com"
    },
    {
        id:1,
        email:"a@gamil.com"
    },
    {
        id:1,
        email:"a@gamil.com"
    },
]


console.log(users[1].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLogged"));






/****************************************      Destructuring of Objects      *********************************************/


const course = {
    coursename:"js in Hindi",
    price:999,
    courseInstructor:"HiteshSir"
}

// console.log(course.courseInstructor)
// console.log(course["courseInstructor"])

const{courseInstructor:teacher} = course                //destructuring
console.log(teacher);


// JSON

// {
//     "name":"ashika",
//     "coursename":"chai and js",
//     "price":"free"
// }




// [
//     {},
//     {},
//     {}
// ]












