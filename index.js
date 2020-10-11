const artReleaseDay = new Date("Oct 1, 2020").getTime();


// Update the count down every 1 second
const updateTimeFn = setInterval(function() {

  var now = new Date().getTime();

  var timeRemaining = artReleaseDay - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("art-coming-soon").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (timeRemaining < 0) {
    clearInterval(updateTimeFn);
    document.getElementById("art-coming-soon").innerHTML = "";
  }
}, 1000);

// Open/Close Info Box


var allSquares = document.getElementsByClassName('square');
var closeButtons = document.getElementsByClassName('info-close');

function openInfo(e, square) {
  closeAllInfoBoxes(e);
  const infoBox = square.firstElementChild;
  infoBox.classList.add("info-open");
}

function closeInfo(e, infoBox) {
  // to prevent the main click on the square
  e.stopPropagation();
  infoBox.classList.remove("info-open");
}

function closeAllInfoBoxes(e) {
  for (var i = 0; i < allSquares.length; i++) {
    var infoBox = allSquares[i].firstElementChild;
    closeInfo(e, infoBox)
  }
}

for (var i = 0; i < allSquares.length; i++) {
  (function addEventListenersToSquares(params) {
    var square = allSquares[i];
    square.addEventListener('click', (e) => openInfo(e, square));
  })();
}

for (var i = 0; i < allSquares.length; i++) {
  (function addEventListenersToCloseIcons(params) {
    var infoBox = allSquares[i].firstElementChild;
    var xBtn = infoBox.firstElementChild;
    xBtn.addEventListener('click', (e) => closeInfo(e, infoBox))
  })();
}



// When the user clicks anywhere outside of a square, 
// close any open InfoBox
window.onclick = function(e) {
  if (e.target.classList.contains('square')) {
    return;
  }
  closeAllInfoBoxes(e);
}