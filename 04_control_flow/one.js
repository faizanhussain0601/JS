// if 

// const isUserloggedin = true
// const temperature = 41

// if(temperature === 41){
//         console.log('less than 50')
// }
// else{
//     console.log('Temperature is greater than 50')
// }

// console.log("Execute")

// < , > , <= , >= , == , != , === , !==

// const score = 200 

// if(score>100){
//     const power = "fly"
//     console.log(`User Power : ${power}`)  // yeh isi scope me hoga kyunki const let functional
// }                                            scope me rehte hai

// const balance = 1000

// // if(balance>500) console.log("test1") , console.log("test2"); // Implicit way of if else not 
// //                                                                 preferable and also not readable

// if(balance<500){
//     console.log("less than 500")
// }
// else if(balance<750){
//     console.log("less than 750")
// }
// else if(balance<900){
//     console.log("less than 900")
// }
// else{
//      console.log("less than 1200")
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

if(userLoggedIn && debitcard){
      console.log("Allow to shopping")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User log in")
}
