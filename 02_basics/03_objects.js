//Singleton

//object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "Piyush",
    "full name" : "Piyush Raj",
    [mySym]:"myKey1",
    age: 22,
    location: "motihari",
    email: "piyush@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);

jsUser.email ="piyush23@gmail.com"
//Object.freeze(jsUser) //yeh jsuser ko freeze kr dega ab kuch change ni hoga isme
jsUser.email ="piyush23@microsoft.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello Js user");
    
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
    
}
console.log(jsUser.greetingTwo());