console.log("Create_New_Element...");

const myDiv = document.createElement('div');
console.log(myDiv);

myDiv.className = "first";
myDiv.id = "second";

myDiv.innerText = " Hello JavaScript";

document.body.appendChild(myDiv);

myDiv.style.background = "lightblue";
myDiv.style.color = 'brown';
myDiv.style.fontSize = '25px';
myDiv.style.textAlign = 'center';
myDiv.style.padding = "10px";


