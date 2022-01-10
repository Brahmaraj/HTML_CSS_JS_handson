$('#dicebutton').click( function roll(){
    var a = Math.random()*10;
    console.log(Math.round(a));
    if(a>6){
        roll();
    }
})