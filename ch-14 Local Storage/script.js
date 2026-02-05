/*
1. Fetch Data:
    localStorage.getItem(key);   to return value

2. Insert / Add Data :
    localStorage.setItem(key, value);

3. Delete :
    localStorage.removeItem(key);
 */

localStorage.setItem('name', 'Pragna Ahir');
localStorage.setItem('age', 23);

const myName = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(myName);
console.log(age);

localStorage.setItem('name', "Pagu");

localStorage.removeItem('name');

localStorage.clear();