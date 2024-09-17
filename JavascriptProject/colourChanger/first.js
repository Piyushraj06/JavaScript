const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(event){
        console.log(event.target);
        if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'red'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'pink'){
            body.style.backgroundColor = 'pink'
        }
        //event.target.id = uss color ko target kr rha hai ek example pink jaise
    });
});