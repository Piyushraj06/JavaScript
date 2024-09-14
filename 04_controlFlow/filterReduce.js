//Filter
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

// const newNums = myNums.filter( (num) => {
//     return num > 4 // yha object bn rha hai islie return keyword use krna pdega
// })
// console.log(newNums);

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((num) => {
//     return num + 10
// })

// const newNums = myNumbers.map((num) => num * 10).map((num) => num + 1)
//                          .filter((num) => num>40)

// console.log(newNums);

    
//Reduce

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc, curVal){
//     console.log(`acc is: ${acc}, cur value is: ${curVal}`);
    
//     return acc+curVal
// },0)


const myTotal = myNums.reduce((acc, curVal) => acc+curVal,0)
console.log(myTotal);


const shoppingCart  = [
    {
        itemName: "js course",
        price: 1499
    },
    {
        itemName: "py course",
        price: 2499
    },
    {
        itemName: "java course",
        price: 3499
    },
]

const shoppingPrice = shoppingCart.reduce((acc, item) => acc + item.price,0)

console.log(shoppingPrice);
