$(document).ready(function() {
    const endpoint = "https://api.github.com/users/FabricioMeneze5";
    
    const avatar = $('#avatar');
    const name = $('#name');
    const user = $('#user-name');
    const reposit = $('#reposit');
    const followers = $('#followers');
    const following = $('#following');
    const profileLink = $('#profile-link');

    fetch(endpoint)
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        user.innerText = json.login;
    })
})