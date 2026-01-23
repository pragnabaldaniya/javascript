console.log("Parent-Child_Property...");

const parent = document.querySelector('.parent');
console.log(parent);

// children property
parent.children[1].style.color = 'red';

// html to array convert fir for Each se style apply

const allchild = Array.from(parent.children);
console.log(allchild);

// for Each me style
allchild.forEach((child) => {
    child.style.color = 'darkred';
    child.style.fontSize = '40px';
    child.style.margin = '10px';
});

// pacific koy ek childe ne style mate
// console.log(parent.firstElementChild);

const firstchild = document.querySelector('.num');
console.log(firstchild);
firstchild.style.color = 'green';
firstchild.style.fontSize = '50px';

// ek child se dusre child ko style ki property

console.log(firstchild.nextSibling.nextSibling);


