
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

//  in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7

let operation = new Promise((resolve,reject)=>{
        let a=1;  
        setTimeout(() => {
            resolve(console.log(a))
        }, Number(a+'000'));
});

// function value(){
    // return function(a){
    //     setTimeout(() => {
    //         console.log(a) 
    //     }, Number(a+'000'));
    // }; 
// }
operation.then((func)=> {
    //func(1)
    return func;
}).then((val)=> {
    val(2);
    return val;
}).then((val)=>{
    val(3);
    return val;
}).then((val)=>{
    val(4);
    return val;
}).then((val)=>{
    val(5);
    return val;
}).then((val)=>{
    val(6);
    return val;
}).then((val)=>{
    val(7);
})
// **************
// var obj1 = {
//     name:"Brahma",
//     age:21,
//     gender:"male"
// }

// var savedobj = JSON.stringify(obj1)

// window.localStorage.setItem("object",savedobj);