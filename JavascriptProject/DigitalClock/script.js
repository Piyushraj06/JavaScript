//const clock = document.querySelector('#clock');//#clock - id h

// isko aise bhi likh sakte hai
const clock = document.getElementById('clock');

setInterval(function(){
    let date = new Date()
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000)
