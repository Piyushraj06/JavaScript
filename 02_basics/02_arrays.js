const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);//arary ke ander array aa gya hai yeh nhi chahte hai

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_NewHeros = [...marvel_heros,...dc_heros]
console.log(all_NewHeros); // same as conczt but we prefer this beacuse we can add multiple values with... but in concat we can add only two 

console.log(Array.isArray("Piyush"));
console.log(Array.from("Piyush"));
console.log(Array.from({name: "Piyush"}));//interesting convert ni kr paega

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

