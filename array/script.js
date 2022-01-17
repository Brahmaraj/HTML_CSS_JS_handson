let array = ["first","second","third","fourth","fifth","sixth"];
let merg1 = ["merg1_first","merg1_second","merg1_third"];
let merg2 = ["merg2_first","merg2_second","merg2_third"];

console.log(array);

console.log(array.pop());//returns the last element and array.pop() returns the last element
console.log(array);

console.log(array.shift()); // returns the first element and "returns the first element"
console.log(array);

console.log(array.unshift("first_again"));//removes the specified element and "returns the length of new array"
console.log(array);

console.log(array.push("sixth_again"));//pushes the specified element and "returns the lenght of new array"
console.log(array);

console.log(delete array[0]);//delete return boolean if the operation is completed or not but leaves the array element as undefined doesn't reduce the size or delelte the index just removes the specified element!!
console.log(array[0]);
console.log(array);

console.log(array.shift());//remove the undefined element

console.log(array.concat(merg1,merg2));//merges the array in () and concatenates it with the given array and returns a new array does'nt modifty existing array
console.log(array.concat(merg1,"value",merg2)); // we can also provide a value directly but it's better to assign it to a identifier and use that array.
console.log(array);

//array_name.splice(start_index,how many elements(count),"elements to be added in csv")
console.log(array.splice(2,2,"kiwi","lemon","apples"));//returns the removed element in array and modifies the original array and adds the value supplied after the 2nd paramater
//using splice we can remove elements and also not leave holes unlike delete where the elements are deleted but array lenght is not modified.
console.log(array);

//syntax: array_name.slice(start_index,end_index)
console.log(array.slice(1,2));//returns the array from specified start index till end index excluding end index (different than splice beacause end index matters but in splice the count matters)
//doesn't modify original array unlike splice
//console.log(array.splice(1,2));//return the array and modifies the original array
console.log(array);

console.log(array.toString())//converts arrray into string(all JS Objects have toString() method)

console.log(array.join(" - "))//simiar to toString but separates with what we provide in ("separator")

console.log(array)
console.log(array.some((ele)=>ele=='second'));//return boolean true if any one element satisfies the condition if no element satisfies the condition then returns false
console.log([5,6,7,8,8].every((ele)=>ele>5));//returns boolean value true if all elements satisfies the condition and false if any one fails to satisfy the condition 

