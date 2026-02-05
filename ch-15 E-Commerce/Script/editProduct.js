let allProducts = JSON.parse(localStorage.getItem('products') || "[]");
let editIndex = Number(localStorage.getItem('editId'));


const product = allProducts.find((element) => element.p_id === editid);


const p_name = document.getElementById('p_name');
const p_price = document.getElementById('p_price');
const p_stock = document.getElementById('p_stock');
const p_image = document.getElementById('p_image');
const p_desc = document.getElementById('p_desc');

p_name.value = product.p_name;
p_price.value = product.p_price;
p_stock.value = product.p_stock;
p_image.value = product.p_image;
p_desc.value = product.p_desc;

function onFormSubmit(event) {
    event.preventDefault();

    const editProduct = {
        p_id: editId,
        p_name: p_name.value,
        p_price: p_price.value,
        p_stock: p_stock.value,
        p_image: p_image.value,
        p_desc: p_desc.value,
    }

    console.log(editProduct);

    allProducts = allProducts.map((element) => {
        if (element.p_id === editId) {
            return editProduct;
        } else {
            return element;
        }
    });

    localStorage.setItem('products', JSON.stringify(allProducts));

    localStorage.removeItem('editId');
    window.location.href = "adminProducts.html";
}