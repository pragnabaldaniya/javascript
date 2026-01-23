console.log("Events...");

const submitBtn = document.getElementById("btn_submit");
const Btn2 = document.getElementById("btn-dbl");

const box = document.querySelector('.box');


submitBtn.addEventListener('click', function () {
    alert("Btn is second time clickedd...")
});


Btn2.addEventListener('dblclick', () => {
    alert("Btn is second time clickedd...");
});


// mousedown thi long press event...
box.addEventListener('mousedown', () => {
    box.style.backgroundColor = 'red';
});

// mouseup thi long press bandh 
box.addEventListener('mouseup', () => {
    box.style.backgroundColor = 'pink';
});

// mouseover thi aero jate hi hover
box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'brown';
});

// mouseout thi aero out
box.addEventListener('mouseout', () => {
    box.style.backgroundColor = 'orange';
});

const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const reset = document.querySelector('.reset');
const qty = document.querySelector('#qty');

// increment
increment.addEventListener('click', () => {
    let num = Number(qty.innerText);
    num += 1;
    qty.innerText = num;
});
// decrement
decrement.addEventListener('click', () => {
    let num = Number(qty.innerText);
    if (num > 1) {
        num -= 1;
        qty.innerText = num;
    }
});
// reset
reset.addEventListener('click', () => {
    qty.innerText = 0;
});

