const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const error = document.getElementById('error');

// function displayData(event){
//     console.log(event);
//     event.preventDefault();
// }

form.addEventListener('submit', (event)=>{
    let message = [];
    if(name.value==null || name.value=='Name'){
        message.push("Name can't be Name");
    }
    else if(password.value.length<=6){
        message.push("Password must be greater than 6 characters");
    }
    if(message.length>0){
        event.preventDefault();
        error.innerText = message.join(', ');
    }
})