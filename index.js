// console.log("JS connected");

// // to get the element from DOM you can use "getElementById"
// let theCatDiv = document.getElementById("cat");

// console.log(theCatDiv);

// //to add text to DOM use "innerHTML"
// theCatDiv.innerHTML = "I'm a cat."

// //set the HTML content of "otherElement" to "I'm a cat"
// let theMouseDiv = document.getElementsByClassName("mouse")

// console.log(theMouseDiv)

// theMouseDiv.innerHTML = "I'm a mouse.";

// theMouseDiv.innerHTML = theCatDiv.innerHTML

// let miceArray = [...theMouseDiv];

// console.log(miceArray);

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