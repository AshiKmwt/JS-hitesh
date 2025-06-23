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



//Nested Scope

function one(){
    const man = "hitesh"
    
    function two(){
        const website = "yt"
        console.log(man);
        console.log(website);
    }


    two()
    
}

one()




if(true){
    const man = "hitu"

    if(man ==="hitu"){
        const web = "Youtube"
        console.log(man + web);
    }
    // console.log(web);
    
}

// console.log(man);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++  Interesting  ++++++++++++++++++++++++++++++++++++++++++++++++

console.log(add_one(5))

function add_one(num){
    return num + 1

}

add_two(5)

const add_two = function (num) {
    return num + 2
    
}

        
