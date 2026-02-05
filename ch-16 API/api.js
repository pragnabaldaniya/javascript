const productsAPI = "https://dummyjson.com/products";

const productsView = document.getElementById("products");
const categoryView = document.getElementById("category");

let allProducts = [];
let currentCategory = "All";

productsView.innerHTML = "";
categoryView.innerHTML = "";


async function fetchAllProducts() {
    try {

        productsView.innerHTML = `<div style="display:flex; justify-content:center; align-items:center; height:300px;">
            <img src="images/loading1.gif" width="200" />
        </div>`
        // "<img src='images/loding-gif.gif' width='20'/>";

        setTimeout(async () => {
            const res = await fetch(productsAPI);

            if (res.status === 200) {

                const allData = await res.json();

                allProducts = allData.products;

                productsView.innerHTML = "";
                randerAllProductsInUI();
            }
        }, 2000);
    } catch (error) {
        console.log("ERROR : ", error);
    }
}

function randerAllProductsInUI() {

    let filterProducts = [...allProducts];

    if (currentCategory !== 'All') {
        filterProducts = allProducts.filter((product) => product.category === currentCategory);
    }

    productsView.innerHTML = "";
    categoryView.innerHTML = "";

    categoryDisplay();

    filterProducts.forEach((product) => {
        productsView.innerHTML += ` <div class="col">
                <div class="card">
                    <img src=${product.thumbnail}
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">Category : ${product.category}</p>
                        <button class="btn btn-success">Price : $${product.price}</button>
                    </div>
                </div>
            </div>`;
    })
}


function categoryDisplay() {
    let allCategories = allProducts.map((product) => product.category);

    console.log(allCategories);

    allCategories = new Set(allCategories);

    allCategories = [...allCategories];

    allCategories.unshift("All");

    console.log(allCategories);

    allCategories.forEach((category) => {
        categoryView.innerHTML += `<div class="col m-2">
                <button class="btn btn-success" onclick="getCategory('${category}')">${category[0].toUpperCase() + category.slice(1)}</button>
            </div>`
    })
}

function getCategory(value) {

    currentCategory = value;

    console.log(currentCategory);

    randerAllProductsInUI();

}




fetchAllProducts();