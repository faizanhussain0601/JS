const Useremail = "faizan@google.com"

if(Useremail){
    console.log("Got user email")
}
else{
    console.log("Dont have user email")
}

// falsy value
//  false , 0 , -0 , BigInt 0n, "", null , undefined, NaN

// truthy value
// "0", "false", " " ,[], {}, function(){}
// Note inside any string " " value is truthy

const Useremail2 = []

if(Useremail2.length ===0){
    console.log("Array is empty")
}

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
//  val1 =  5 ?? 10
//  val1 =  null ?? 10
//  val1 =  undefined ?? 10

 val1 = null ?? 10 ?? 20 

 console.log(val1)

 // Ternary Operator 

 condition ? true : false;