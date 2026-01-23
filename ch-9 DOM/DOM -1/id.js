console.log("Document Object Model");

const title = document.getElementById("title");
const text = document.getElementById("text");

console.log("ID : ", title.id);
// console.log("class :", title.className);


title.idName = `${title.idName} mytitle`;
console.log("ID : ", title.id);

// title.setAttribute('id', `${title.idName} myTitle`);

// style
title.style.backgroundColor = '#99c1e6ff';
title.style.padding = '10px';
title.style.borderRadius = '15px';
title.style.textAlign = "center";
title.style.margin = "20px auto";


text.style.fontSize = '20px';
text.style.fontWeight = "500";
text.style.color = "#504e4eff";
text.style.lineHeight = "1.7";
text.style.backgroundColor = "#e8f4ff";
text.style.padding = "15px";
text.style.borderRadius = "12px";