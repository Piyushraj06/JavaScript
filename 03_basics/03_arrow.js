const user ={
    username: "piyush",
    price: 990,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// const chai = function(){
//     let username = "piyush"
//     console.log(this.username);
// }

// chai()

//***************************************************

//Arrow function syntax(() => {})

const chai = () => {
    let username = "piyush"
    console.log(this.username);
}

chai()

const addTwo = (num1,num2) => {
    return num1+num2;
}

console.log(addTwo(3,4));
