// DOM= Document object model

let a=document.getElementById("one");
a.textContent="hello world";

let b=document.getElementsByClassName("two");
b[0].textContent="hello by class";

let c=document.getElementsByTagName("p");
c[0].textContent="by tag name";

let d=document.querySelector(".three");
d.textContent="for query selector";
d.style.color="red";

a.style.color="green";


