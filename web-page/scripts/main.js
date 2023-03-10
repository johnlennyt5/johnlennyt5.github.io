

// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === '"C:/Users/Toshiba/Desktop/JohnlennyCodingFolder/web-page/web-projects/test-site/images/kobe.jpg"') {
    myImage.setAttribute ('src','"C:/Users/Toshiba/Desktop/JohnlennyCodingFolder/web-page/web-projects/test-site/images/kobe2.jpg"');
  } else {
    myImage.setAttribute ('src','"C:/Users/Toshiba/Desktop/JohnlennyCodingFolder/web-page/web-projects/test-site/images/kobe.jpg"');
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
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Kobe is number 1, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}