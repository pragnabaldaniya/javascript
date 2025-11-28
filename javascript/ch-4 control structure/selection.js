console.log("Selection Statement");

/*
    1. Switc Statement
    -> Menu Driven Program
        syntax : 
            switch (expression)
            {
                case 1 :
                    // statement
                break;
                case 2 :
                    // statement
                break;
                default :
                    // statement
            }
*/

let choice = +prompt("Press 1 for Addition\nPress 2 for Subtraction\nPress 3 for Multiplation\nPress 4 for Divison\nPress 1 for Addition");

let a = +prompt("Enter A First number : ");
let b = +prompt("Enter B Second number : ");

switch (choice) {
    case 1:
        console.log(`${a} + ${b} = ${a + b}`);
        break;
    case 2:
        console.log(`${a} - ${b} = ${a - b}`);
        break;
    case 3:
        console.log(`${a} * ${b} = ${a * b}`);
        break;
    case 4:
        console.log(`${a} / ${b} = ${a / b}`);
        break;
    default:
        console.log("Invalid choice....");

}

