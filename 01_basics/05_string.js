const name = "piyush"
const repoCount = 50

console.log(name + repoCount +" value");

//use this convention

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('piyush')

console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4) //negative positive sb le lega or whi se count krega char
console.log(anotherString);

const newStringOne = "         Piyush           "
console.log(newStringOne.trim());

const url = "https://piyush.com/piyush%20raj"
console.log(url.replace('%20','-'));
console.log(url.includes('piyush'));