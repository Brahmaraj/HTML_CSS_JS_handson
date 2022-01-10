Function.prototype.myBind = function (...args) {
    let obj = this;
    params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0],[...params,...args2]);
    }
}

let nameobj = {
    firstname:"Brahma",
    lastname:"Rathod",
}
// | 

let printName =function (hometown, state, country) {
        console.log(this.firstname + " "+ this.lastname +" from " + hometown + " , " + state+ " "+ country );
    };


printName.call(nameobj, "Mumbai","Maharashtra");
let name2 = {
    firstname:"Akshay",
    lastname:"Saini"
}
arr = ["Mumbai1", "Maharashtra1"]
printName.apply(name2, arr);

let newPrintName = printName.myBind(nameobj);
newPrintName(...arr, "India");

