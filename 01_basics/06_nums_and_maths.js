const balance = new Number(400)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));//100.0

const otherNumber = 23.6666 
// const otherNumber = 123.6666 
console.log(otherNumber.toPrecision(3));// 23.9 //124


const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // comma me change kr dega
console.log(hundreds.toLocaleString('en-IN'));//indian format me
