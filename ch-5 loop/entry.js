console.log("Entry cntrol loop");
/*
    Reverse : num = 459
        output : 954
*/

document.write("<h2>Entry cantrol loop</h2><br>")
document.write("<h4>1. while loop</h4>");
let num = +prompt("Enter any Number : ");
let reverse = 0;

document.writeln(`<h2>Number : ${num} </h2>`);

while (num !== 0) {
    let reminder = num % 10;
    reverse = reverse * 10 + reminder;
    num = Math.floor(num / 10);
}

document.write(`<h2>reverse : ${reverse}</h2>`);



// for loop
console.log("2.For loop");

let n = +prompt("How many numbers do you need ? ");

let a = 0, b = 1;

    console.log(a);
    console.log(b);

for (let i = 1; i <= n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}



