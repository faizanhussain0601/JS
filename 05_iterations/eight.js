const myNums = [1,2,3]

const myTotal = myNums.reduce(function(acc,currval){
        //  console.log(`acc: ${acc} and currval: ${currval}`)
          return acc+currval
},0)

const myTotal2 = myNums.reduce( (acc,currval)=> acc+currval,0)
//  console.log(myTotal2)

const shoppingCart = [
           {
             itemName: "JS Course",
             price: 2999
           },
           {
             itemName: "py Course",
             price: 999
           },
           {
             itemName: "Mobile dev Course",
             price: 3999
           },
           {
             itemName: "Data science Course",
             price: 12999
           }
]

const priceToPay = shoppingCart.reduce((acc,items)=> acc+items.price,0)

console.log(priceToPay)