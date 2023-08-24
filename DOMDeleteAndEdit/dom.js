var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// function for delete btn
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItem);

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

    // get input value from2nd search bar
    var newItem1 = document.getElementById('item1').value;
    // Adding text node with input value
    li.appendChild(document.createTextNode(" " + newItem1));


    // creating delete button
    var delBtn = document.createElement('button');
    // adding classes to del btn
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    delBtn.appendChild(document.createTextNode('X'));
    //append del btn to li
    li.appendChild(delBtn);
    // console.log(delBtn);
    //now adding new li to page/dom
    itemList.appendChild(li);
    itemList.appendChild(li);

    //Each time li is added edit button is also added
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm float-right editBtn';
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

for (var i = 0; i < itemList.children.length; i++) {
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm float-right editBtn';
    editBtn.appendChild(document.createTextNode('edit'));
    itemList.children[i].appendChild(editBtn);
}

var ip = document.createElement('input'); // create element
ip.id = 'item1';
ip.type = 'description';
ip.className = 'form-control mr-2'; // added id,type,class
form.insertBefore(ip, form.children[1]); // inserted before submit

//fulter item function
function filterItem(e) {
    //convert to LowerCase
    var text = e.target.value.toLowerCase();
    // geting list 
    var items = itemList.getElementsByTagName('li');
    // as it is collection convert it to array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent; // for matching 1st name 
        var itemName1 = item.firstChild.nextSibling.textContent; // for matching description
        if (itemName.toLowerCase().indexOf(text) != -1 || itemName1.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

}

