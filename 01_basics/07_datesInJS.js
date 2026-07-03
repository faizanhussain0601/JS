// Dates

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myCreatedDate = new Date(2026 , 5+1, 3)
let myCreatedDate1 = new Date(2026 , 5+1, 3, 8, 30)
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate1.toLocaleDateString())

let myCreatedDate2 = new Date("03-07-2026")
console.log(myCreatedDate2.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate2.getTime()) // compare always in milli second

console.log(Math.floor(Date.now()/1000))  // convert milli second into seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

// important
newDate.toLocaleString("default",{
    weekday: "long",
})