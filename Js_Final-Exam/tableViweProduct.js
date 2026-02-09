

let allProducts = JSON.parse(localStorage.getItem('products') || "[]");

console.log("products:", allProducts);

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
                            <button class="btn " onclick="editProduct(${index})">Edit</button>
                        </td>
                        <td>
                            <button class="btn " onclick="deleteProduct(${index})" >Delete</button>
                        </td>
                    </tr>`;

    });

}
// delete product logic
function deleteProduct(index) {

    allProducts.splice(index, 1);

    localStorage.setItem("products", JSON.stringify(allProducts));

    viweProduct();
}




