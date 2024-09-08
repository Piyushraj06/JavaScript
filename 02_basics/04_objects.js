const tinderUser = new Object() // singleton object
const tinderUser1 = {} // Non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Piyush"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
console.log(tinderUser1);

// Nested Object
const regularUser = {
    email: "Piyush@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Piyush",
            lastname: "Raj"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign(obj1,obj2)
const obj3 = { ...obj1, ...obj2}// spread operator
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));