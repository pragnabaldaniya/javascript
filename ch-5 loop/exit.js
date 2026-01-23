console.log("Exit cantrol loop");
document.write(`<h2>Exit cantrol loop</h2>`)

// Do while loop
document.write("1. Do while loop<br>");

let i = 1;
let n = +prompt("Enter any number : ");

do {
    document.write(`${i} `);
    i++;
} while (i < n);


