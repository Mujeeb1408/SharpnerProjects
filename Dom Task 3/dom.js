// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)

// Changing the title
document.title = "Changed the Title";


// Get element by id
var headerTitle = document.getElementById('header-title');
console.log(headerTitle)
// headerTitle.innerHTML = 'Hello';
// headerTitle.textContent = 'bye';

// headerTitle.style.borderBottom = 'solid 3px #100'
var mainheader = document.getElementById('main-header');
mainheader.style.borderBottom = 'solid 3px #100';
mainheader.style.borderTop = 'solid 3px #100';
mainheader.style.borderRight = 'solid 3px red';
mainheader.style.borderLeft = 'solid 3px red';

//GETELEMENTSNYCLASSNAME
// var additem = document.getElementsByClassName('title');
// additem[0].style.color = 'green';
// additem[0].style.fontWeight = 'bold';

var item = document.getElementsByClassName('list-group-item');
item[0].style.color = 'red';
item[1].innerHTML = "Hello"
item[2].style.backgroundColor = 'black';
item[2].style.color = 'white';