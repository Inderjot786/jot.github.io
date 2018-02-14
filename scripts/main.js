var image = document.querySelector('img');

image.onclick = function()
{
	var m = image.getAttribute('src');
	 if (m ===  'images/me.jpg') 
	 {
       image.setAttribute('src','images/i.jpg');
	 }
	 else
	 {
	 	image.setAttribute('src','images/me.jpg');
	 }
}

var b1 = document.querySelector('button');
var h1 = document.querySelector('h1');

function changeUser()
{
	var user = prompt('Enter your name','root');
	localStorage.setItem('name',user);
    h1.textContent = 'Welcome, ' + user;
}

if(!localStorage.getItem('name')) {
  changeUser();
} else {
  var storedName = localStorage.getItem('name');
  h1.textContent = 'Welcome, ' + storedName;
}

b1.onclick = function() {
  changeUser();
}