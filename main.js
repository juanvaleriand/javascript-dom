var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')

//form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItem);
//add item
function addItem(e) {
	e.preventDefault();

	// get input value 
	var newItem = document.getElementById('item').value;

	//create new li element
	var li = document.createElement('li');

	//add class
	li.className = 'list-group-item';
	console.log(li);

	//add text node with input value
	li.appendChild(document.createTextNode(newItem));

	//create del button element
	var deleteBtn = document.createElement('button');

	//add class
	deleteBtn.className = 'btn btn-danger btn-sm delete';
	deleteBtn.style.float = 'right';
	//appent text node
	deleteBtn.appendChild(document.createTextNode('X'));

	//append button to li
	li.appendChild(deleteBtn);

	itemList.appendChild(li)
}
//remove Item
function removeItem(e){
	if (e.target.classList.contains('delete')) {
		if (confirm('are you sure?')) {
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

//filter items
function filterItem(e){
	//convert text to lower case
	var text = e.target.value.toLowerCase();
	var items = itemList.getElementsByTagName('li');
	//console.log(items);
	//Convert to an array
	Array.from(items).forEach(function(item){
		var itemName = item.firstChild.textContent;
		if (itemName.toLowerCase().indexOf(text) != -1) {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
}