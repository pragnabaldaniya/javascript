/**
 *  Array : 
 *          Collection of multiple values of the different datatype.....
 * 
 *  Syntax :
 *          let arrayName = [element];
 *          let array = new Array(element);
 * 
 * Array Function : 
 * 
 *  1. push()    : array.push(); => add new element last position
 *  2. pop()     : array.pop(); => remove element last
 *  3. unshift() : array.unshift(); => add new element first position
 *  4. shift()   : array.shift(); => remove element first
 * 
 */

console.log("Hey Array !!");

let array = [10, 20, 30, 40, 50, "Hello", false, [1, 2, 3], 22.30];
//           0   1   2   3   4    5       6       7         8

console.log("Array Length is : ", array.length);

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


array.push(100);
console.log("Push : ", array);

array.pop();
console.log("pop : ", array);

array.unshift(45);
console.log("unshift : ", array);

array.shift();
console.log("shift : ", array);


