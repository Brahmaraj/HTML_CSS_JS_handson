
// values = [9,10,11,12];
// function add(...args){
//     let sum=0
//     for(let i=0;i<arguments.length;i++){
//         sum += arguments[i]
//     }
//     console.log(sum)
//     return sum;
// }
// function multiply(...args){ //rest parameters for variable arity
//     let mul = 1;
//     for(let i=0;i<arguments.length;i++){
//         mul = mul * arguments[i];
//         console.log(mul);
//     }
//     console.log(mul);
//     return mul;
// };
// function sub(...args){
//     let result = 1;
//     for(let i=0;i<arguments.length;i++){
//         result-=arguments[i]
//     }
//     return result;
// };  
// let operation = new Promise((resolve,reject)=>{
//     resolve(add(5,6,7,8));  
//     reject(`This didn't work`)
// })
// operation.then((result)=>{
//     return multiply(result,...values);  //spread operator to provide comma separated values
// }).then((result)=>{
//     console.log(sub(result,...values));
// }).catch(err =>{
//     console.log(err);
// })


// **********************************************************************************************************

// Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7

// let operation = new Promise((resolve,reject)=>{
//     resolve(value);
//     re
// });
// function value(){
//     let a = 0;
//     a++;
//     return setTimeout(console.log(a),a+0000);
    
// }
// operation.then((val)=> {
//     val();
//     return val;
// }).then((val)=> {
//     val();
//     return val;
// }).then((val)=>{
//     val();
//     return val;
// })
// **************
var obj1 = {
    name:"Brahma",
    age:21,
    gender:"male"
}

var savedobj = JSON.stringify(obj1)

window.localStorage.setItem("object",savedobj);