const username = document.getElementById('username');

document.getElementById('addBtn').addEventListener('click', () => {
    console.log(username.value);

    if (username.value != "") {
        localStorage.setItem('name', username.value);

        location.reload();
    }
});

window.addEventListener('load', () => {
    const username = localStorage.getItem('name');

    document.getElementById('user').innerText = username;
});