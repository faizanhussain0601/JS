// Immediately invoked function expression 

(function chai(){                  // Named iffe
    console.log(`DB CONNECTED`)
})();        // do iffe ek saath chaleyenge toh yeh semi coln lagana haii warna nahi chalenge

((name)=>{                 // un named iffe isme hamne name paramete paas kiya hai
    console.log(`DB CONNECTED TO , ${name}`)
})("faizan")                    // or iss tarah se parameter diya hai