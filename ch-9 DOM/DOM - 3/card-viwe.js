console.log("card-viwe....");

let productDiv = document.getElementById("product");
let pricePerItem = 1499;
let count = 1;

// card
let card = document.createElement('div');
card.className = "card";

// img
let img = document.createElement('img');
img.src = "images/watch.jpg";
img.style.width = "100%";
img.style.height = "240px";
img.style.borderRadius = "8px";

// title
let title = document.createElement('h3');
title.innerText = " Women Watches";


// Price
let price = document.createElement("p");
price.className = "price";
price.innerText = `Price: ₹${pricePerItem}`;

// Quantity box
let qtyBox = document.createElement("div");
qtyBox.className = "qty-box";

// decrement
let decrement = document.createElement("button");
decrement.innerText = "-";
decrement.className = "decrement";

// qty
let qty = document.createElement("span");
qty.innerText = count;
qty.style.fontWeight = "bold";


// increment
let increment = document.createElement("button");
increment.innerText = "+";
increment.className = "increment";

// Total
let total = document.createElement("p");
total.className = "total";
total.innerText = `Total: ₹${pricePerItem}`;

// Message
let msg = document.createElement("p");
msg.className = "msg";

// Add to Cart
let cartBtn = document.createElement("button")
cartBtn.innerText = "Add to Cart";
cartBtn.className = "add-cart";

// Logic
increment.onclick = () => {
    count++;
    qty.innerText = count;
    total.innerText = `Total: ₹${count * pricePerItem}`;
};

decrement.onclick = () => {
    if (count > 1) {
        count--;
        qty.innerText = count;
        total.innerText = `Total: ₹${count * pricePerItem}`;
    }
};

cartBtn.onclick = () => {
    msg.innerText = `${count} item(s) added to cart 🛒`;
};


// Append

qtyBox.appendChild(decrement);
qtyBox.appendChild(qty);
qtyBox.appendChild(increment);

card.appendChild(img);
card.appendChild(title);
card.appendChild(price);
card.appendChild(qtyBox);
card.appendChild(total);
card.appendChild(cartBtn);
card.appendChild(msg);


productDiv.appendChild(card);


