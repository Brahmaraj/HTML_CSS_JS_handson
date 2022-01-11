function updateData(){
fetch("https://cdn.jsdelivr.net/gh/apilayer/restcountries@3dc0fb110cd97bce9ddf27b3e8e1f7fbe115dc3c/src/main/resources/countriesV2.json")
.then((response)=> response.json())
.then((data)=> localStorage.setItem("weatherdata",JSON.stringify(data)));
}

setInterval(updateData(), 10000);

// var a = 5;
// var b = a;
// a = a - 3;
// console.log(b);
// console.log(a);





// var a = 10;

// function add (){
//     function sub (){
//         console.log(a);
//     }
//     return sub;
// }

// add()();