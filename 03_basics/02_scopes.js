// var jo hai wo block scope ko support nahi karta hai for eg:

// block scope generally har lang me {} hi hotaq hai
//loop ke ander ka block scope aur baaki bahar ka global scope
// let a = 300
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("Inner :" , a);//10
    
}

// console.log(a);//error oif loop me hai
// console.log(b);//error if loop me hai 
// console.log(c);// 30 output jb ki nahi aana chahiye yhi hai block scope

function one(){
    const username = "piyush"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()