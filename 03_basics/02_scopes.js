let a = 66
const b = 70

// dont use var it is always global


if(true){       // It is local scope jo yaha likhenee woh isme hi chalega
    let a = 10
    const b = 20 
    console.log("INNER :",a)
    console.log("INNER :",b)
}

console.log(a)
console.log(b)
