var heading = document.querySelector('h1');
heading.textContent = 'Hello world!';

// document.querySelector('html').onclick = function() {
// 	alert('Don\'t touch me!');
// }

var image = document.querySelector('img');
image.onclick = function() {
	var src = image.getAttribute('src');
	if (src === 'images/16.jpg') {
		image.setAttribute('src', 'images/16-1.jpg');
	}
	else {
		image.setAttribute('src', 'images/16.jpg');
	}
}

var button = document.querySelector('button');
button.onclick = setUserName;
function setUserName() {
	var name = prompt('Please, enter your name');
	setName(name)
}
function setName(name) {
	if (name == null) return;
	localStorage.setItem('name', name);
	heading.innerHTML = "Hello, " + name;
}

if (!localStorage.getItem('name')) {
	setUserName();
}
else {
	setName(localStorage.getItem('name'));
}