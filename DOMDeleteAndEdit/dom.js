var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
// function for delete btn
itemList.addEventListener('click', removeItem);

// compeleting addItem function
function addItem(e) {
    e.preventDefault();
    // get input value
    var newItem = document.getElementById('item').value;
    //creating new li element
    var li = document.createElement('li');
    //adding class
    li.className = 'list-group-item';
    // Adding text node with input value
    li.appendChild(document.createTextNode(newItem));


    // creating delete button
    var delBtn = document.createElement('button');
    // adding classes to del btn
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    delBtn.appendChild(document.createTextNode('X'));
    //append del btn to li
    li.appendChild(delBtn);
    console.log(delBtn);
    //now adding new li to page/dom
    itemList.appendChild(li);

    //Each time li is added edit button is also added
    var editBtn = document.createElement('button');
    editBtn.appendChild(document.createTextNode('edit'));
    itemList.children[itemList.children.length - 1].appendChild(editBtn);

}
// function remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
// var li = document.createElement('li');
// //adding class
// li.className = 'list-group-item';
for (var i = 0; i < itemList.children.length; i++) {
    var editBtn = document.createElement('button');
    editBtn.appendChild(document.createTextNode('edit'));
    itemList.children[i].appendChild(editBtn);
}



