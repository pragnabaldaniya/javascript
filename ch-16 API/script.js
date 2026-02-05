const productsAPI = "https://dummyjson.com/products";

fetchAllProducts();

function fetchAllProducts() {
    // API call => fetch() method

    // GET, POST, PUT, PATCH, DELETE
    fetch(productsAPI).then((res) => {
        console.log("STATUS : ", res.status);
        console.log("RESPONSE : ", res);

        return res.json();

    }).then((data) => {
        console.log("FINAL DATA : ", data);
        console.log("FINAL DATA Products: ", data.products);

        randerAllProductsInUI(data.products);
    }).catch((err) => {
        console.error("ERROR : ", err);
    });

}

function randerAllProductsInUI(allProducts) {

    const productsView = document.getElementById("products");

    productsView.innerHTML = "";

    allProducts.forEach((product) => {
        productsView.innerHTML += ` <div class="col">
                <div class="card">
                    <img src=${product.thumbnail}
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <button class="btn btn-success">Price : $${product.price}</button>
                    </div>
                </div>
            </div>`;
    })
}

const firstPromise = new Promise((resolve) => {
    setTimeout(function () {
        console.log("My First Promise Call...");
        resolve();
    }, 1000);
});

firstPromise.then(() => {
    console.log("Then running...");
});


const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("My Second Promise is call..");
        let isLogin = true;

        if (isLogin) {
            resolve({
                username: "SJaynesh",
                email: "rw5.jaynesh.pc@gmail.com",
                password: "123456"
            });
        } else {
            reject("ERROR : Something went wrong...");
        }
    }, 1000)
});

secondPromise.then((res) => {
    console.log("Second Then is running");
    console.log(res);

    return res.username;
}).then((username) => {
    console.log(username);

    return username.length;
}).then((len) => {
    console.log("Username Length : ", len);
}).catch((error) => {
    console.error(error);
});


function myAgePromise(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve({ age: age, vote: "You can VOTE" });
        } else {
            reject({ age: age, vote: "You cannot VOTE 😡" });
        }
    })
}

function Demo() {
    console.log("Demo Function");
    return 25;
}

let num = Demo();


// myAgePromise(5).then(res => {
//     console.log("RESPONSE : ", res);
// }).catch(error => {
//     console.log("ERROR : ", error);
// }).finally(() => {
//     console.log("Finally...");
// });



//  async function promiseFunctionUse () {
//     const res = await myAgePromise(25);

//     console.log(res);

// }

const promiseFunctionUse = async () => {
    try {
        const res = await myAgePromise(15);

        console.log(res);
    } catch (error) {
        console.log("ERROR : ", error);
    }
}


promiseFunctionUse();