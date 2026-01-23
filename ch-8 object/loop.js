console.log("--loop - for in and for of--");

/*
* javascript me 2 or loop use print mate

    1. for in
    2. for of
*/

let employee = {
    id: 101,
    name: "Pragna",
    email: "pagu@gamil.com",
    salary: "75000.50",
    phone: "9824736635",
};
// parint in using for in loop

for (let key in employee) {
    console.log(key, " -> ", employee[key]);
}




// array ma bi for in and for of use thay

const array = [10, 20, 30, "Hello", true];

// for in use
console.log("--array in use for in--");
for (let index in array) {
    // console.log(index, "->", array[index]);
    console.log(index, "->", array.at(index));
}

// for of use
console.log("--array in use for of--");

for (let element of array) {
    // console.log(element);
    console.log(array.indexOf(element), "->", element);
}



