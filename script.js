const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.icon-close');
var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

pass.addEventListener('input', ()=> {
    if(pass.value.length > 0){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    }
    if(pass.value.length < 5){
        str.innerHTML = "weak";
    }
    else if(pass.value.length >=6 && pass.value.length < 8 ){
        str.innerHTML = "medium";
    }
    else if(pass.value.length >= 8){
        str.innerHTML = "strong";
    }
});

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});