let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = function () {
  navbar.classList.add('active')
}

document.querySelector('#closer-navbar').onclick = function () {
  navbar.classList.remove('active')
}

let loginBtn = document.querySelector('.account-form .login-btn');
let registerBtn = document.querySelector('.account-form .register-btn');
// formularios
let loginForm = document.querySelector('.account-form .login-form');
let registerForm = document.querySelector('.account-form .register-form');

registerBtn.onclick = function () {
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');

  loginForm.classList.remove('active');
  registerForm.classList.add('active');
}

loginBtn.onclick = function () {
  registerBtn.classList.remove('active');
  loginForm.classList.add('active');

  loginForm.classList.add('active');
  registerForm.classList.remove('active');
}


let accountForm = document.querySelector('.account-form');

document.querySelector('#account-btn').onclick = function () {
  accountForm.classList.add('active')
}

document.querySelector('#close-form').onclick = function () {
  accountForm.classList.remove('active')
}
