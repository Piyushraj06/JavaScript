//falsy value
//false, 0, -0, BigInt 0n, "",null,undefined,NaN

//truthy value
// "0", 'false', " "., [], {},function(){}


//Nullish Coalescing Operator(??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1);
