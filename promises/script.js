
values = [9,10,11,12];
function add(...args){
    let sum=0
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i]
    }
    console.log(sum)
    return sum;
}
function multiply(...args){ //rest parameters for variable arity
    let mul = 1;
    for(let i=0;i<arguments.length;i++){
        mul = mul * arguments[i];
        console.log(mul);
    }
    console.log(mul);
    return mul;
};
function sub(...args){
    let result = 1;
    for(let i=0;i<arguments.length;i++){
        result-=arguments[i]
    }
    return result;
};  
let operation = new Promise((resolve,reject)=>{
    resolve(add(5,6,7,8));  
    reject(`This didn't work`)
})
operation.then((result)=>{
    return multiply(result,...values);//spread operator to provide comma separated values
}).then((result)=>{
    console.log(sub(result,...values));
}).catch(err =>{
    console.log(err);
})