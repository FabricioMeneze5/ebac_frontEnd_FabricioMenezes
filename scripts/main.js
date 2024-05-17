$(document).ready(function() {
    const errorMessage = $('.errorMessage');
    const avatar = $('#avatar');
    const name = $('.profile-name');
    const user = $('#user-name');
    const reposit = $('#reposit');
    const followers = $('#followers');
    const following = $('#following');
    const profileLink = $('#profile-link');

    fetch("https://api.github.com/users/FabricioMeneze5")
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
    .catch(function(erro) {
        errorMessage.css("display", "block");
    })
    .finally(function() {
        console.log("fim");
    })
})