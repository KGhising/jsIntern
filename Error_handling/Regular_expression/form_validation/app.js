// form blur event listener
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('number').addEventListener('blur', validateNumber);
document.getElementById('btn').addEventListener('click', submit);

const errname = document.querySelector('.invalid-feedback-name');
const errzip = document.querySelector('.invalid-feedback-zip');
const erremail = document.querySelector('.invalid-feedback-email');
const errnumber = document.querySelector('.invalid-feedback-number');

// validateName functions
function validateName(){
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;

    if(!re.test(name.value)){
        name.style.border = '1px solid red';
        errname.innerHTML = `
            <p>name must be between 2 and 10</p>
        `;
    }else{
        name.style.border = '1px solid black';
    }
    setTimeout(() =>{
        errname.innerHTML = '';
    }, 3000);
}
// validateZip functions
function validateZip(){
    const zip = document.getElementById('zip');
    const re = /^[0-9]{5}(-[0-9]{4})?$/;

    if(!re.test(zip.value)){
        zip.style.border = '1px solid red';
        errzip.innerHTML = `
            <p>zip code must 5 digit</p>
        `;
    }else{
        zip.style.border = '1px solid black'; 
    }
    setTimeout(() =>{
        errzip.innerHTML = '';
    }, 3000);
}
// validateEmail functions
function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)){
        email.style.border = '1px solid red';
        erremail.innerHTML = `
            <p>Invalid Email number</p>
        `;
    }else{
        email.style.border = '1px solid black'; 
    }
    setTimeout(() =>{
        erremail.innerHTML = '';
    }, 3000);
}
// validateNumber functions
function validateNumber(){
    const number = document.getElementById('number');
    const re = /^\(?\d{3}\)?[- ]?\d{3}[- ]\d{4}$/;

    if(!re.test(number.value)){
        number.style.border = '1px solid red';
        errnumber.innerHTML = `
            <p>number must be in 555-555-5555 or 555 555 5555</p>
        `;
    }else{
        number.style.border = '1px solid black'; 
    }
    setTimeout(() =>{
        errnumber.innerHTML = '';
    }, 3000);
}

// submit
function submit(){
    name.value = '';
    zip.value = '';
    email.value = '';s
    number.value = '';
}