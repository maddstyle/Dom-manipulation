console.log("JS connected");

// to get the element from DOM you can use "getElementById"
let theCatDiv = document.getElementById("cat");

console.log(theCatDiv);

//to add text to DOM use "innerHTML"
theCatDiv.innerHTML = "I'm a cat."

//set the HTML content of "otherElement" to "I'm a cat"
let theMouseDiv = document.getElementsByClassName("mouse")

console.log(theMouseDiv)

theMouseDiv.innerHTML = "I'm a mouse.";

theMouseDiv.innerHTML = theCatDiv.innerHTML

let miceArray = [...theMouseDiv];

console.log(miceArray);

let elements = document.getElementsByTagName(name);

let divs = document.getElementsByTagName('div');
console.log(divs); // <== [div#cat, div.mouse, div.mouse, div.mouse]

let theFirstFoundElem = document.querySelector(selectors);

let firstMouse = document.querySelector('.mouse');
let firstDiv = document.querySelector('div');
 
 
console.log(firstMouse); // <== <div class="mouse"></div>
console.log(firstDiv);
// <== <div id="cat" style="background-color: red; border: 2px solid green; font-size: 50px; margin-top: 30px; padding-bottom: 30px;">I'm a cat</div>

let elementList = document.querySelectorAll(selectors);

let allDivs = document.querySelectorAll(".mouse, #cat");
 
console.log(allDivs); // <== NodeList(4) [div#cat, div.mouse, div.mouse, div.mouse]

let mouse1 = document.querySelector(".mouse");
console.log(mouse1.className); // <== mouse

let el = document.getElementById('item');
 
if (el.className === 'active'){
  el.className = 'inactive';
} else {
  el.className = 'active';
}

// get the id of "element"
let idStr = element.id;
 
// set the id of "otherElement"
otherElement.id = "some-value";

// theCatDiv.style.backgroundColor = "red";
// theCatDiv.style.border          = "2px green solid";
// theCatDiv.style.fontSize        = "50px";
// theCatDiv.style.marginTop       = "30px";
// theCatDiv.style.paddingBottom   = "30px";



// Generates a random color in hexadecimal (ie. #62b9cc)
function generateRandomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function changeColor() {
  var discoBoxes = document.getElementsByClassName("disco-box");
  for (i=0; i<discoBoxes.length; i++) {
    discoBoxes[i].style.backgroundColor = generateRandomColor();
  }
}

setInterval(changeColor, 500)