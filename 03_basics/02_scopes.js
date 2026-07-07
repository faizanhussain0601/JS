let a = 66
const b = 70

// dont use var it is always global


if(true){       // It is local scope jo yaha likhenee woh isme hi chalega
    let a = 10
    const b = 20 
    // console.log("INNER :",a)
    // console.log("INNER :",b)
}

// console.log(a)
// console.log(b)

function one(){
    const username  = "faizan"

    function two(){
        const website = "Youtube"
        console.log(username) // yeh access karlega kyunki iske liye username upar hai global
    }
    // console.log(website) yeh access nahi kar payega scope me nahi hai

    two()
}

// one()

if(true){
    const username = "faizan"
    if(username === "faizan"){
        const website = "Linkedin"
        // console.log(username + website)
    }
    // console.log(website) yeh nahi chalega kyunki yeh ukse scope me nahi hai
}




// +++++++++++++++++++ interseting ++++++++++++++++++++++++++
addOne(5)// yeh chala kyunki isko koi host nahi kar raha hai

function addOne(num){
    return num + 1
}

// addOne(5)


// addTwo(10) yeh nahi chalega kyunki yeh hoisted hai is function const addTwo host kar raha hai

const addTwo = function(num){
    return num + 2
}

addTwo(10)
