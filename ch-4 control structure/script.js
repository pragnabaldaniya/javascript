console.log("Conditional Statement");

/*
    1) If Statement :
        syntax : if(condition)

    2) If-Else Statement
        syntax : if(condition){
            }
            else{
                }

    3)Ladder Statement :
        syntax : if(condition1){
            }
            else if(condition2){
            }
            else if(condition3){
            }
            else{
                }

    4) Nasted If-Else Statement :
        syntax :if(condition){
                    if(conition){} 
                    else{}
                }
            else{
                }
    
    5) Ternary Operator
        syntax : (condition) ? True statement
                             : False statement 

*/

let age = +prompt("Enter your age : ");

if (age == "") {
    console.log("Age is empty string");
}
else if (age > 100) {
    console.log("Invalid Person...🤧");

}
else if (age != null) {
    console.log(`Age : ${age}`);
}
else {
    console.log("Invalid Value");
}

// ternary oprator

(age >= 18) ? console.log(`${age} you can vote !!`)
    : console.log(`${age} you cannot vote !!`);




let num = +prompt("Enter any number : ");

if (num % 2 === 0) {
    console.log(`${num} is even...`);
}
else {
    console.log(`${num} is odd...`);
}

