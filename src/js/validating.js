'use strict';
window.addEventListener('load', () => {
    let forms = document.getElementsByClassName('needs-validation');
    let validation = Array.prototype.filter.call(forms, (form) => {
        
        form.addEventListener('submit', (e) => {
            if(form.checkValidity() === false) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated')
        }, false)
    })
}, false)

function validateEmail(email) {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
}

function validatePhoneNumber(phoneNumber) {
    const regex = /^(?:\(\d{3}\)\s?|\d{3}[-.\s]?)\d{3}[-.\s]?\d{4}$/;
    return regex.test(phoneNumber);
}