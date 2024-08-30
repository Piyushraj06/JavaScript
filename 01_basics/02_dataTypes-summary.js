//Primitive

//7 types: String Number Boolean null undefined symbol BigInt

// Reference types or Non-Primitive
//Array, Objects, Functions
const heros = ["Bob","Tony","doga"];

let myObj = {
    name: "Piyush",
    age: 22
}

const myFunction =  function(){
    console.log("hello");
}
 
//Symbols

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);



// Stack(Primitive) , Heap(Non-Primitive)
let myYtname = "Aspa"
