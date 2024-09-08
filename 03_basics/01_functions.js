function syaMyName(){
    console.log("P");
    console.log("I");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}
//function call
syaMyName()

function addTwoNumbers(number1, number2){//num1,num2 bracket me parameter
    console.log(number1 + number2);
}

addTwoNumbers(3 , "4")// 3, 4 jo pass ho rha hai wo argument

function loginUserMessage(username){
    return `${username} just login`
}
console.log(loginUserMessage("Piyush"));
console.log(loginUserMessage());

// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(200,400,600));

// Rest ya spread operator 
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600));


// object ka function

const user = {
    username: "Piyush",
    shirtPrice: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.shirtPrice}`);
}

handleObject(user)

//Arrays
const myArray = [200,400,500]

function returnSecondArray(getArray){
    return getArray[1]
}
console.log(returnSecondArray(myArray));
