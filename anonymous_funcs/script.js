var iife = function (){
    return 3+4;
}();
var non_iife = function (){
    return 3+4;
};
console.log(iife);
console.log(non_iife);