//for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greeting = "hello world!"

for (const greet of greeting) {
    console.log(greet);
}

//maps ==> only unique values
//agr hum ek hi values ko 2 baar add krnge toh ek hi baar aaega output.

const map = new Map()

map.set('IN', 'INDIA')
map.set('RUS', 'RUSSIA')
map.set('FR', 'FRANCE')
map.set('USA', 'UNITED STATE OF AMERICA')
map.set('IN', 'INDIA')

console.log(map);


