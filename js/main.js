const login_button = document.getElementById('login');
const home_button = document.getElementById('home');

login_button.addEventListener("click", function(event) {
    location.href = 'login.html';
});

home_button.addEventListener("click", function(event) {
    location.href = 'index.html';
});

