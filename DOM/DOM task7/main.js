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
        var del = document.createElement('button');
        del.id = 'delete';
        del.innerText = ' delete';
        del.style.boxSizing = '100px';
        // console.log(del);
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        li.appendChild(del);

        // for removing li after delete btn is clicked
        del.addEventListener('click', deleFunc);
        var uu = document.getElementsByTagName('ul');
        function deleFunc(e) {
            userList.removeChild(li);
        }


        // //adding values to local storage
        // localStorage.setItem('name', nameInput.value);
        // localStorage.setItem('email', emailInput.value);

        // storing values in the form of object
        var myobj = {
            name: nameInput.value,
            email: emailInput.value
        };
        // converting to centarlised

        var myobj_centralised = JSON.stringify(myobj);
        // using email id as key
        localStorage.setItem(JSON.stringify(emailInput.value), myobj_centralised);

        // appending the info
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}
