// Javascript can interact with the HTML because when a webpage is loaded it creates a Document Object Model with this Javascript can interact with HTML
// Node JS is not a browser environment, its a server enironment

var time = Math.random();

var red = document.querySelector('#meteor-cont');

console.log(red)
red.style.setProperty('--random_top', 10 +'%');
