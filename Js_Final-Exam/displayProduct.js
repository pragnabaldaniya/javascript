const allProducts = JSON.parse(localStorage.getItem('products')) || [];
let addToCartProducts = JSON.parse(localStorage.getItem('addToCart')) || [];

const card = document.getElementById('card');
viewAllProducts();

function viewAllProducts() {


    card.innerHTML = "";

    allProducts.forEach((product) => {
        const addedInCart = addToCartProducts.some(
            item => item.p_id === product.p_id
        );

        card.innerHTML += `
        <div class="col-3 d-flex">
      
            <div class="card m-2 w-100">
                <img src="${product.p_image}" class="card-img-top product-img">
                <div class="card-body">
                    <h5 class="fw-bold">${product.p_name}</h5>
                    <p>${product.p_desc}</p>
                    <p class="text-success fw-bold">₹ ${product.p_price}</p>
                    <button class="btn ${addedInCart ? 'btn-danger' : 'btn-success'}"
                        onclick="toggleCart(${product.p_id})">
                        ${addedInCart ? "Remove Cart" : "Add To Cart"}
                    </button>
                </div>
            </div>
        </div>`;
    });
}

