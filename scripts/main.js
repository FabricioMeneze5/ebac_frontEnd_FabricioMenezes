$(document).ready(function() {
    const endpoint = "https://api.github.com/users/FabricioMeneze5";
    const avatar = $('#avatar');
    const name = $('.profile-name');
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
        avatar.attr("src", json.avatar_url);
        name.text(json.name);
        user.text(`@${json.login}`);
        reposit.text(json.public_repos);
        followers.text(json.followers);
        following.text(json.following);
        profileLink.attr("href", json.html_url);
    })
})