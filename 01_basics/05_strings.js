const name = "faizan"
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`Hello My name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Faizan")

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)

console.log(gameName.toUpperCase())

console.log(gameName.charAt(3))
console.log(gameName.indexOf("i"))

const newString = gameName.substr(0,4)
console.log(newString)

const anotherString = gameName.slice(-5,4)
console.log(anotherString);

const newStringOne = "    Faizan    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https/faizan.com/faizan%06hussain"
console.log(url.replace("%06","-"))
console.log(url.includes("faizan")) // string me hai ya nahi check karna

const namestring = new String("Faizan-hussain-bin-abid")
console.log(namestring.split("-"))
