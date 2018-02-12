//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);

//var HeaderTitle = document.getElementById('header-title');
//console.log(HeaderTitle);
//HeaderTitle.textContent = 'Hello';
//HeaderTitle.innerText = 'Good People';

//var Items = document.getElementsByClassName('list-group-item');
//console.log(Items);
//console.log(Items[0]);
//Items[0].textContent = 'Hai Juan';
//Items[0].style.fontWeight = 'bold';
//Items[0].style.backgroundColor = 'red';
//Items[0].style.color = '#fff';

//for (var i = 0; i < Items.length; i++){
	//Items[i].style.backgroundColor = '#f4f4f4'; 
//}

//getelementbytag
//var li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[0]);
//li[0].textContent = 'Hai Juan';
//li[0].style.fontWeight = 'bold';
//Items[0].style.backgroundColor = 'red';
//Items[0].style.color = '#fff';

//for (var i = 0; i < li.length; i++){
	//li[i].style.backgroundColor = '#f4f4f4'; 
//}

//QuerySelector
//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px #ccc';

//var input = document.querySelector('input');
//input.value = 'Holla Juan';

//var submit = document.querySelector('input[type="submit"]');
//submit.value = "Kirim"

//var item = document.querySelector('.list-group-item');
//item.style.color = 'red';

//var lastItem = document.querySelector
//('.list-group-item:last-child');
//lastItem.style.color = 'blue';

//var secondItem = document.querySelector
//('.list-group-item:nth-child(2)');
//secondItem.style.color = 'coral';

//query selector all//
//var titles = document.querySelectorAll('.title');

//console.log('titles');
//titles[0].textContent = 'Hello';

//var odd = document.querySelectorAll('li:nth-child(odd)');
//for(var i = 0; i < odd.length; i++){
	//odd[i].style.backgroundColor = 'gray';
//}

//var even = document.querySelectorAll('li:nth-child(even)');
//for(var i = 0; i < even.length; i++){
	//even[i].style.backgroundColor = 'coral';
//}

// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
//itemList.parentNode.parentNode.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.parentElement.parentElement.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentElement.parentElement.parentElement);

// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'coral';
// firstchild
// console.log(itemList.firstChild);
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Juan Valerian Delima';

// lastchild
// console.log(itemList.firstChild);
//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Juan Valerian Delima';

//nextSibling
// console.log(itemList.nextSibling);
//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//createElement

//create a Div

// var newDiv = document.createElement('div');
// add a class
// newDiv.className = 'hello';
// add a id
// newDiv.id = 'Hello_ID';
// add a ttr
// newDiv.setAttribute('title','hello');

//create text node
// var newDivText = document.createTextNode('hello world');

// add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);

// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1)

// var button = document.getElementById('button').addEventListener
// ('click', buttonClick);
// function buttonClick(e){
	// console.log('button clicked');
	// document.getElementById('header-title').textContent = 'changed';
	// document.querySelector('#main').style.backgroundColor = '#f4f4f4';
	// console.log(e.target);
	// console.log(e.target.id);
	// console.log(e.target.className);
	// console.log(e.target.classList);

	// var output = document.getElementById("output");
	// output.innerHTML = '<h3>'+e.target.id+'</h3>';


	// console.log(e.type)


	// console.log(e.clientX)
	// console.log(e.clientY)

	// console.log(e.offsetX);
	// console.log(e.offsetY);

	// console.log(e.altKey);
	// console.log(e.ctrlKey);
	// console.log(e.shiftKey);
// }

// var button = document.getElementById('button');
// var box = document.getElementById('box');
//button.addEventListener('click', runEvent)
//button.addEventListener('dblclick', runEvent)
//button.addEventListener('mousedown', runEvent)
//button.addEventListener('mouseup', runEvent)
// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)
// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)
// box.addEventListener('mousemove', runEvent)

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('input', runEvent);
// select.addEventListener('change', runEvent)
// select.addEventListener('input', runEvent)
// form.addEventListener('submit', runEvent)

// function runEvent(e){
// 	e.preventDefault();
// 	console.log('Event Type:'+e.type);
	// console.log(e.target.value);
	// document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
	// output.innerHTML = '<h3>MouseX:'+e.offsetX+'</h3><h3>MouseY:'+e.offsetY+'</h3>';

	// document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
// }