console.log("User Input");

// User Input New Function Prompt (string massage)

let myName = prompt("Enter your Name : ");

let age = Number.parseInt(prompt("Enter your Age : "));

let salary = prompt("Enter your salary : ");
salary = Number(salary);// type conversation

let phone = +prompt("Enter your phone number : ");

console.log(`My name is : ${myName}`);
console.log(`My age is : ${age}`);
console.log(`My salary is : ${salary}`);

console.log(`My package : ${salary * 12}`);

console.log(`Phone Number : ${phone}`);



console.log(typeof myName, typeof age, typeof salary, typeof phone);

/* Type casting(conversation)

String to Number

1. Number function
2. parseInt()
3. parseFloat()
4. +

*/










