

let allProducts = JSON.parse(localStorage.getItem('products') || "[]");
let addToCartProducts = JSON.parse(localStorage.getItem('addToCart') || "[]");

console.log("products:", allProducts);

let filterProducts = [...allProducts];

const tbody = document.getElementById('tbody');




viweProduct();

function viweProduct(products = allProducts) {
    tbody.innerHTML = "";

    products.forEach((product, index) => {
        tbody.innerHTML += `<tr>
                        <th scope="row">${index + 1}</th>
                        <td>${product.p_name}</td>
                        <td>${product.p_price}</td>
                        <td>${product.p_stock}</td>
                        <td>
                           ${product.p_desc}
                        </td>
                        <td><img src=${product.p_image}
                                alt="" width="70" height="80"></td>
                        <td>
                            <button class="btn btn-warning" onclick="editProduct(${index})">Edit</button>
                        </td>
                        <td>
                            <button class="btn btn-danger" onclick="deleteProduct(${index})" >Delete</button>
                        </td>
                    </tr>`;

    });

}
// delete product logic
function deleteProduct(index) {
    alert("Deleted..." + index);

    allProducts.splice(index, 1);

    localStorage.setItem("products", JSON.stringify(allProducts));

    viweProduct();
}


// Edit Product logic
function editProduct(index) {
    localStorage.setItem("editIndex", index);
    window.location.href = "editProduct.html"; // direct edit page ma java mate
}


