console.log("appendchild_property...");

// Way 1
const li = document.createElement('li');

li.innerText = "Baroda";
console.log(li); // <li>Baroda</li>

// queryselector thi append ui browser ma
const city = document.querySelector('.city');
console.log(city);
city.appendChild(li);


// Function way 2
function createLiTag(city) {
    const li = document.createElement('li');
    li.innerText = city;
    document.querySelector('.city').appendChild(li);
}
// function call
createLiTag("Rajkot");



// Way 3 ye best way memory optimize hota he
function createNewLiTag(city) {
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(city));

    document.querySelector('.city').appendChild(li);
}
// function call
createNewLiTag("Navsari");


// pecific koy child remove karva mate
const secondLi = document.querySelector("li:nth-child(2)");
secondLi.remove();