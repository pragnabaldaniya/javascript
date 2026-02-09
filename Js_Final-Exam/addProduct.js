// array ya object me convart
let allProducts = JSON.parse(localStorage.getItem('products') || "[]"); 

function onFormSubmit(event) {
    event.preventDefault();

    const p_name = document.getElementById('p_name').value;
    const p_price = document.getElementById('p_price').value;
    const p_stock = document.getElementById('p_stock').value;
    const p_image = document.getElementById('p_image').value;
    const p_desc = document.getElementById('p_desc').value;

    // object
    const product = {
        p_id: Date.now(),
        p_name,
        p_price,
        p_stock,
        p_image,
        p_desc
    };

    console.log(product);
    allProducts.push(product);

    // object to convart json string...
    // JSON.stringify(product)

    // localstorage ma stor...
    localStorage.setItem('products', JSON.stringify(allProducts));

}
