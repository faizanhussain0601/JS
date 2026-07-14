// const coding = ["js","ruby","java","c++"]

// const values = coding.forEach((items)=>{
//         console.log(items)
//         return items

// })

// console.log(values)

const myNums = [1,2,3,,4,5,6,7,8,9,10]

const newNums = myNums.filter((nums)=>{
    return nums > 4
})

const newNums2 = []

myNums.forEach((nums)=>{
          if(nums>4){
            newNums2.push(nums);
          }
})

console.log(newNums2)