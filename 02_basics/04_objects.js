// const tinderUser = new Object() // singleton declare

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.email = "faizan@google.com"
tinderUser.isLoggedIn = false

// console.log(tinderUser)
const regularUser = {
       email: "someone@gmail.com",
       fullname: {
                userfullname:{
                             firstname : "Faizan",
                             lastname  : "Hussain"
                }
       }
}

// console.log(regularUser)
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a",2: "b",3: "c"}
const obj2 = {4: "d",5: "e",6: "f"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2) // empty target hai uske andar source yani dono jayenge

const obj3 = {...obj1,...obj2} // more use spread and we genrally use spread

// console.log(obj3)

// most use data bas se jo value aayegi below basic example
// it is array of objects
const users = [
    {
        id: 1,
        email: "faizan@amazon.com"
    },
     {
        id: 2,
        email: "faizan@google.com"
    }
]

users[1].email

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn")) // property check usme yeh available hai ya nahi


const course = {
      coursename: "JS learning course",
      price: "999",
      courseInstructor: "Hitesh"
}

// course.constructor iski jagah niche woh use karenge easy hai
const {courseInstructor: instructor} = course // yaha ham iski rename kar sakte hai

console.log(instructor)

// JSON hai yeh 
// {
//     name: "faizan",
//     coursename: "JavaScript learning",
//     courseprice: "free"

// } 


// esa bhi aata hai json array 
// [
//     {},
//     {},
//     {}
// ] ] 