const search = document.getElementById('search');
const profile = document.getElementById('profile');
const repo = document.getElementById('repo');

let userProfile = {};
let userRepos = [];

document.getElementById('searchBtn').addEventListener('click', () => {
    console.log(search.value);

    if (search.value !== "") {
        getGitHubUsersData(search.value);
    } else {
        alert("Username is required...");
    }
});


async function getGitHubUsersData(username = "flutter") {
    const basePoint = "https://api.github.com/users/";

    const userAPI = basePoint + `${username}`;
    const userRepoAPI = basePoint + `${username}/repos`;

    // // User Profile API
    // const userRes = await fetch(userAPI);
    // userProfile = await userRes.json();

    // console.log(userProfile);

    // // User Repo API
    // const userRepoRes = await fetch(userRepoAPI);
    // userRepos = await userRepoRes.json();

    // console.log(userRepos);

    const [userRes, userRepoRes] = await Promise.all([
        fetch(userAPI),
        fetch(userRepoAPI)
    ]);

    userProfile = await userRes.json();
    userRepos = await userRepoRes.json();

    console.log(userProfile);
    console.log(userRepos);

    displayProfile();
    displayRepo();

}

function displayProfile() {

    profile.innerHTML = `
        <img src= "${userProfile.avatar_url}" />
        <h2>${userProfile.name} </h2>
        <h6>${userProfile.login}</h6>
        <p>${userProfile.bio}</p>
        <hr/> <br/>
        <p>👨‍👩‍👦 ${userProfile.followers} followers . ${userProfile.following} following</p>
        <br/><br/>
        <p>🏦 ${userProfile.company}</p>
        <p>🗺 ${userProfile.location}</p>
    `;
}
function displayRepo() {
    repo.innerHTML = "<h1>User Repo</h1>";

    userRepos.forEach((data, index) => {
        repo.innerHTML += `${index + 1}
            <h3>${data.name}</h3>
            <p>${data.private ? "Private" : "Public"}</p>
            <p>Languages :${data.language}</p>
            <p>Branch :${data.default_branch}</p>
        `;
    })

}


