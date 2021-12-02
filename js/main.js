const login_nav_button = document.getElementById('login');
const home_nav_button = document.getElementById('home');
const register_nav_button = document.getElementById('register');

login_nav_button.addEventListener("click", function(event) {
    location.href = 'login.html';
});

home_nav_button.addEventListener("click", function(event) {
    location.href = 'index.html';
});

register_nav_button.addEventListener("click", function(event) {
    location.href = 'register.html';
});

