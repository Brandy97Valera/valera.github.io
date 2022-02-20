let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'imagen/FY.JPG') {
        myImage.setAttribute('src', 'imagen/FY-2.JPG');
    }
    else {
        myImage.setAttribute('src', 'imagen/FY.JPG');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Ingrese su nombre.');
    if(!myName) {
        setUserName();
    }
    else {
        localStorage.setItem('name', 'myName');
        myHeading.textContent = 'La laguna es hermosa, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'La laguna es hermosa, '+ storedName;
}

myButton.onclick = function() {
    setUserName();
}