var myForm = document.querySelector('#my-form');
var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
var msg = document.querySelector('.msg');
var userList = document.querySelector('#users');

myForm.addEventListener('submit', ONsubmit);

function ONsubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all';
        setTimeout(() => msg.remove(), 3000);
    } else {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        //adding values to local storage
        localStorage.setItem('name', nameInput.value);
        localStorage.setItem('emai', emailInput.value);
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}