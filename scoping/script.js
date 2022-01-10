var normal = 42;
function printThis(){
    console.log(normal);
}
//var arrow1 = () => console.log(normal);
// function lexicalScope(){
//     var normal = 54;
//     printThis();
//     arrow1();
//     {
//         printThis();
//     }
// }
//printThis();
// lexicalScope();
// function outerFunc(){
//     console.log(normal);
//     function innerFunc(){
//         var normal = 54;
//         console.log(normal);
//         printThis();
//         function innerMostFunc(){
//             //outerFunc()()();
//             //var normal = 99;
//             console.log(normal);
//         }
//         return innerMostFunc;
//     };
//     return innerFunc;
// };
// outerFunc()()();
// //outerFunc().innerFunc();

// var arr = [1,2,3,4,5,6,7,8,9,10];
// function sliceArr(arr_obj){
//     console.log(arr_obj.some( ele => ele%3==0));
//     console.log(arr_obj.every( ele => ele%3==0));
// }
// sliceArr(arr);