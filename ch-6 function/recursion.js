console.log("Recursion");

// 3. Recursion : It self called

// function myFun() {
//     console.log("Hello My Fun...");

//     myFun(); // recursion
// }
// myFun();

console.log("Task_1");

function myFun(start, end) {
    if (start > end) {
        return;
    }
    console.log("Hello", start);
    start++;
    myFun(start, end);
}
myFun(1, 10); //call

// Factorial number find
console.log("Task_2 Factorial Find---");

function findFact(num) {
    if (num <= 1) {
        return 1;
    }
    else {
        return num * findFact(num - 1);
    }
}

console.log("Factorial : ", findFact(5)); // call