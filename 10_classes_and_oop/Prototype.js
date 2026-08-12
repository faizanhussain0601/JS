//  let myName = "Faizan        "

//  console.log(myName.truelength) 

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log(`Spidy Power is ${this.spiderman}`)
    }
}

Object.prototype.faizan = function(){
    console.log("Faizan is present in all")
}

// myHeros.faizan()

// heroPower.faizan()
// array object sab acces kar sakte hai faizan ko 

Array.prototype.heyFaizan = function(){
    console.log(`Array ko power di hai bas`)
}

myHeros.heyFaizan()

// heroPower.heyFaizan() object me nahi chala heyFaizan
// kyunki hamne usko sirf array ke liye bnaya tha

// inheritance
const User = {
    username:"chai",
    email:"faizan@google.com"
}
const Teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailabe: false
}

const TASupport = {
    makeAsssignment: `JS Assignment`,
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax 
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "SF Er Faizan"

String.prototype.truelength = function(){
     console.log(this);
     console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.truelength()

"Faizan".truelength()
