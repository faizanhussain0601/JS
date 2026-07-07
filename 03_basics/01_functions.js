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

function calculatoCartprice(...num1){
    return num1
}
function calculatoCartprice2(val1,val2,...num1){
    return num1
}
// console.log(calculatoCartprice2(200,300,400,2000))

const user = {
    username: "Faizan",
    Price: 400
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.Price}`)
}

// handleObject(user)
handleObject({
    username: "Sam khan",
    Price: 299
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getarray){
    return getarray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,500,700,800,1000]))