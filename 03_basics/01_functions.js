function sayMyname (){

console.log("F")
console.log("A")
console.log("I")
console.log("Z")
console.log("A")
console.log("N")
}

// sayMyname();

// function addTwoNumber(number1,number2){
//     console.log(number1+number2)
// }

function addTwoNumber(number1,number2){
    //    let result = number1+number2
    //    return result
          return number1 + number2
}

const result = addTwoNumber(5,5)

// console.log(result)

function LoginUserMeesage(username){
    if(!username){
        console.log("Please enter username")
        return 
    }
    return `${username} Just logged in`
}

// console.log(LoginUserMeesage(""))
