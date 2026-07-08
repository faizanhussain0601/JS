const user = {
    username: "Faizan",
    Price: 299,

    WelcomeMessage: function(){
        console.log(`${this.username} , Welcome to Website`)
        console.log(this)  
    }
}

// user.WelcomeMessage()           hamene in teeno me context seekha ki kab kiya rahega context
                                // jaise hamne object username badla toh agle context me woh hi dikha hame or yeh sirf objects me hi hota hai
// user.username = "Ali khan"
// user.WelcomeMessage()
// console.log(this)              // or isko run karne par empty node me dikhata hai leki
                              //  ham isse agar browser me run karenge toh window function or uski property aayegi

// function chai(){
//     let username  = "Faizan"   
//     console.log(this.username)  // undefined aayega yeh sirf objects me kaam karta hai
// }

// chai()

const chai = () => {
    let username  = "Faizan"   
    console.log(this.username)  // this also works in arrow function
}

// chai()

const addTwo = (num1,num2) =>{
     return num1+num2      // explicitly return
}

// console.log(addTwo(6,6))

const addTwo2 = (num1,num2) => (num1 + num2)     // Implicitly  return
 
const addTwo3 = (num1,num2) => ({username:"Faiza"}) // arrow function me object ese return hota hai

console.log(addTwo3(6,6))