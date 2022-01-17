count=1;
const expensive = () => {
    console.log(count++);
};
const betterExpensive = throttle(expensive,3000);

const debounceCalled = debounce(expensive,2000);

//window.addEventListener('resize',debounceCalled);

//throttling(doesn't even enter function till delay is passed after event straight away ignores next event till the specified delay)
function throttle (func,limit){
    let flag = true;
    return function () {
        let context = this,
        args = arguments;
        if(flag){
            func.apply(context,args);
            flag = false;
            setTimeout(() => {
                flag=true;    //after the specified limit the flag will be set to true till that it won't be able to go inside this function as it'll be false
            },limit);
        }
    }
}


//debouncing(enters the function and refreshes the timer on every event)
function debounce(func,delay){
    let timer;
    return function (){
    let context = this,
    args = arguments;
        clearTimeout(timer);//to refresh timer so that on consecutive clicks it'll refresh and add the delay again
        timer = setTimeout(() => {
            func.apply(context,args);
        },delay);
    }
}
//************************************************************** */
// //expensive function
// function search(){
//     args = [...arguments];
//     console.log("This is Inside ");
//     args.forEach(element => {
//       console.log(element);  
//     });
    
// }

// //calling throttle and debounce function and attaching this to button on click
// const throttleCalled = throttle(search,2000);

// const debounceCalled = debounce(search,1000);

// //debouning to reduce the overhead,network calls if api and stuff are used.
// //polyfill for debounce
// //used in search, don't do anything while user drags and drops,concerned with final state
// //debouncing a save function in autosave function
// //resize event handler,to not make axios calls until user stops typing
// //AUTOCOMPLETE in search
// function debounce(func,delay){
//     let timer;
//     return function(){
//             let context = this,
//             args = arguments;
//             clearTimeout(timer);
//             timer = setTimeout(()=>{
//                 func.apply(context,args); // can also do func.call(context,...args);
//             }, delay)
//             }
// }


// //throttle function to reduce the overhead,network calls if api and stuff are used
// //polyfill for throttle
// //throttle on button so user can't spam
// //throttle a mousemove/touchmove event handler
// //throttling an API call
// //GAMING on fire button
// function throttle(func,limit){
//     let flag = true;
//     return function () {
//         let context = this;
//         let args = arguments;
//         if(flag){
//             func.apply(context,args);
//             flag = false;
//             setTimeout(()=>{
//                 flag = true;
//             }, limit)
//         }
//     }
// }

// new Worker(console.table(["apple","banana","kiwi"]));
