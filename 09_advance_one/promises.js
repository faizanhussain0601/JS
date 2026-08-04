const PromiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls,cryptography,network 
    setTimeout(function(){
      console.log('Async is completed')
      resolve()
     },1000)
})
PromiseOne.then(function(){
    console.log('Promise is completed')
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async 2 is completed')
        resolve()
    })
}).then(function(){
    console.log('Promise 2 is completed')
})

const PromiseThree = new Promise(function(resolve,reject){
     setTimeout(function(){
     resolve({username:"Faizan",email:"Faizan@amazon.com"})
     },1000)
})
PromiseThree.then(function(user){
     console.log(user)
})

const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Ali",email:"google.com"})
        } else{
          reject('ERROR: Something went wrong')
        }
        
    },1000)
})

PromiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})


const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"JavaScript",Password:"123"})
        }else{
            reject('ERROR:JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
      const response = await PromiseFive
      console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers() {
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
//     }
//     catch(error){
//        console.log("E: ",error)
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/faizanhussain0601')
 .then((response)=>{
    return response.json()
 })
 .then((data)=>{
    console.log(data)
 })
 .catch((error)=>{
    console.log(error)
 }) 