////////////////////////////////////////////////////////////////////////
// https://www.youtube.com/watch?v=PuOGBacTYAY&list=PLedShyskP4x-OsGdBEZ6m5tmr5qxpWn6D&index=7&t=1131s

const text = ['Freelance web developer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === text.length) { count = 0; }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;
  // if (letter.length === currentText.length) {
  //   count++;
  //   index = 0;
  // }
  setTimeout(type, 100);
}());

////////////////////////////////////////////////////////////////////////
// show/ hide content to right of menu on button click 
// (for desktop-size screens)
var divs = ["projects", "skills", "about", "contact"];
var visibleDivId = null;
var styles

function toggleVisibility(divId) {
  if (visibleDivId === divId) {
    visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
  var i, divId, div;
  for (i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if (visibleDivId === divId) {
      div.style.cssText = `
      display: block;
      // transition-duration: 2s;
      // transition-property: width;
      // transition-timing-function: ease-out;
      `;
      // div.style.cssText = `
      // margin-left: 200px;
      // transition-duration: 2s;
      // transition-property: width;
      // transition-timing-function: ease-out;
      // `;
      
    } else {
      // div.style.marginLeft = "-5000px";
      div.style.display = "none";
    }
  }
}

////////////////////////////////////////////////////////////////////////
// if all sections are hidden (per the above), apply 'bouncy' class/
// animation to nav-link items








////////////////////////////////////////////////////////////////////////
// carousel where margin between images is enough to push section off screen
// opacity 0 -> opacity 100

// margin: -1000;
// margin: 0

// show/hide content below menu item
// (for mobile-size screens)

