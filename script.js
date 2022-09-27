const form = document.getElementById('form')
const input = document.getElementById('input');
const emailWrap = document.querySelector('.email-wrap');
const errorMsg = document.querySelector('.err-msg');  

const red = () => {
    emailWrap.classList.add('email-wrap-error');
        errorMsg.style.display = 'block';
}

const green = () => {
    emailWrap.classList.remove('email-wrap-error');
        errorMsg.style.display = 'none';
}

input.addEventListener('keypress',(e) =>{
    // e.preventDefault();
    console.log('zebi');
    const email = input.value;
    const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if(!regex.test(email)) red();
    else green();
})

form.onsubmit = e => e.preventDefault();