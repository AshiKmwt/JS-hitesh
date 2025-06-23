const user = {
    username:"ashika",
    fee:999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);      // this: current context/current values ko refer karta hai
                                                                  //                   |
                                                                 //                    v
                                                                  //      means kiske baare me baat ho rahi hai
        console.log(this);                                                          
    }
}

// user.welcomeMsg()
// user.username = "hitesh"
// user.welcomeMsg()

console.log(this);


function chai(){
    let username = "hitesh"
    console.log(this.username);  //you can't do like this as in Objects
    
}

chai()



const chai2 = function () {
     let username = "hitesh"
    console.log(this.username); 
    
}
chai2()








//Arrow Function


const chai3 = () => {
     let username = "hitesh"
    console.log(this); 
    
}

chai3()



const ArrowFxn = (num1,num2) => {
    return num1 +num2
}

console.log(ArrowFxn(5,6))






const ArrowFxn2 = (num1,num2) =>  num1 +num2     //Implicit Return :no need to write return keyword as it is of one line


console.log(ArrowFxn2(5,6))





const ArrowFxn3 = (num1,num2) => ( num1 +num2  ) 

console.log(ArrowFxn3(5,6))



const ArrowFxn4 = (num1,num2) =>( {obj:"hitesh"})

console.log(ArrowFxn4())







