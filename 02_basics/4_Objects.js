//Objects can be declare in two ways:
           //1.Literals
           //2.Constructor

const tinderUser = new Object           //Singleton Object /Constructor
// const tinderUser = {}                //Non-Singleton Object /Literals

tinderUser.id = "12345ab"
tinderUser.name = "ashika"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regUser = {
    email:"ashikakmwt@gmail.com",
    fullname:{
         username:{
            firstname:"ashika",
            lastname:"kumawat"
         }
    }
}

console.log(regUser.fullname.username.firstname);




