console.log("Query SelectorAll....");

let title = document.querySelectorAll('h3');
console.log(title);


title.forEach((tag) => {
    console.log(tag.innerText);
    tag.style.color = 'green';
    tag.style.fontSize = '26px';
});

// node list to array convert...new variabal k bina

title = Array.from(title);
console.log(title);

