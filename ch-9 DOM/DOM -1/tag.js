console.log("Document Object Model By Tag...");

const tag = document.getElementsByTagName('h1');
console.log("Tag : ", tag[0].tagName);

const tag_p = document.getElementsByTagName('p');
console.log("Tag_p : ", tag_p[0].tagName);

// style
tag[0].style.backgroundColor = "#e699aaff";
tag[0].style.padding = '10px';
tag[0].style.borderRadius = '15px';
tag[0].style.textAlign = "center";
tag[0].style.margin = "20px auto";


tag_p[0].style.fontSize = '20px';
tag_p[0].style.fontWeight = "500";
tag_p[0].style.color = "#504e4eff";
tag_p[0].style.lineHeight = "1.7";
tag_p[0].style.backgroundColor = "#f7d7e5ff";
tag_p[0].style.padding = "15px";
tag_p[0].style.borderRadius = "12px";
