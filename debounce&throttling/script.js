count=1;
const expensive = () => {
    console.log(count++);
};
const betterExpensive = throttle(expensive,3000);

const debounceCalled = debounce(expensive,2000);

window.addEventListener('resize',debounceCalled);

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