var a = [[01,02,03],2,3,4,5,6];
var b = [...a];
var [c,d,...e] = a;
b.shift();
b.shift();
console.log(b);
console.log(a);
console.log(c);
console.log(d);
console.log(e);

var obj1 = {
    name:"Brahma",
    age:21
}
//object destructuring deep copy
var {name, age} = obj1;
console.log(name);
name = "chandler";
console.log(name)
console.log(obj1.name);

const {name:new_name, age:new_age} = obj1;
console.log(new_name);
console.log(new_age);