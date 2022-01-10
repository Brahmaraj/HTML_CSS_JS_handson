var new_ele = document.createElement('li');
new_ele.className = "li-class";
new_ele.id = "list6";
new_ele.innerHTML = "Sixth Element";

var ul_par = document.querySelector("#unordered-list");

ul_par.appendChild(new_ele);

console.log(new_ele);