console.log("Ladder or Nasted statement");

let a = +prompt("Enter A First Number : ");
let b = +prompt("Enter B Second Number : ");
let c = +prompt("Enter C Third Number : ");

if (a === b && a === c && b === c) {
    console.log("All are equal...");
} else if (a === b && a === c && b === c) {
    console.log("Both are equal...");

}
else {
    if (a > b) {
        if (a > c) {
            console.log(`A = ${a} is Maximum...`);
        } else {
            console.log(`C = ${c} is Maximum...`);
        }
    } else {
        if (a > c) {
            console.log(`B = ${b} is Maximum...`);
        } else {
            console.log(`C = ${c} is Maximum...`);
        }
    }
}