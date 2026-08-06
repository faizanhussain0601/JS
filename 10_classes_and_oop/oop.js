const user = {
    username:"Faizan",
    loginCount: 8,
    signedIn: true,
     
    getUserDetails: function(){
        // console.log("Got user details from databases")
        // console.log(`Username: ${this.username}`)   
        // console.log(this)
    }
} 

// console.log(user.getUserDetails())

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting  = function(){
        console.log(`Welcome ${this.username}`)
    }
     
    return this
}

const UserOne = new User('Ali',12,true)
const UserTwo = new User('Chicken',11,false)
console.log(UserOne)
console.log(UserTwo)

// step 1 new object create
// step 2 because of new keyword constructor create hota hai
// argument leta hai sab or de deta hai
// step 3 this keyword ke andar sare argument jo likhe hai
// inject hojate hai matlab add hojate hai