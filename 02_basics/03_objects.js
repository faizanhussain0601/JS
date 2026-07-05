// singleton

// objects literals

const mysym = Symbol("key1") // symbol declare

const JsUser = {
    name: "Faizan",
    "full name": "Faizan Hussain",
    age: 18,
    [mysym]: "mykey1", // symbol declare in symbol data type
    location: "Indore",
    email: "Faizan@google.com",
    isLoggedIn: false,
    LastLogindays: ["Monday","Tuesday"]
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser[mysym]);

JsUser.email = "Faizan@amazon.com" 
console.log(JsUser.email)

// Object.freeze(JsUser) // ab kuch change nahi hoga freeze

JsUser.email = "Faizan@chat.com"
console.log(JsUser.email)

console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())



