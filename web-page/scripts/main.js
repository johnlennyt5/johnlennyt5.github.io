
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'https://upload.wikimedia.org/wikipedia/commons/5/56/Kobe_Bryant_2014.jpg') {
    myImage.setAttribute ('src','https://www.foodista.com/sites/default/files/styles/featured/public/field/image/kobe%20bryant_0.jpg');
  } else {
    myImage.setAttribute ('src','https://upload.wikimedia.org/wikipedia/commons/5/56/Kobe_Bryant_2014.jpg');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Kobe is Number 1, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Kobe is Number 1, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

