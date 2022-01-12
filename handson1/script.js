let flag = true;
function changeName(){
    if(flag){
        flag = false
        document.querySelector('h1').innerText = "Changed Name";
    }
    else{
        flag = true;
        document.querySelector('h1').innerText = "Brahma";
    }
}