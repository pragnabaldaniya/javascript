console.log("Document Object Model By Class...");

const heading = document.getElementsByClassName("heading");
console.log("class : ", heading[0].className);

// style
heading[0].style.backgroundColor = '#c799e6ff';
heading[0].style.padding = '10px';
heading[0].style.borderRadius = '15px';
heading[0].style.textAlign = "center";
heading[0].style.margin = "20px auto";



heading[1].style.fontSize = '20px';
heading[1].style.fontWeight = "500";
heading[1].style.color = "#504e4eff";
heading[1].style.lineHeight = "1.7";
heading[1].style.backgroundColor = "#e5d7f7ff";
heading[1].style.padding = "15px";
heading[1].style.borderRadius = "12px";