var seconds = 00;
var tens = 00;

var appendtens = document.getElementById("tens");
var appendseconds = document.getElementById("seconds");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval;
function startTimer() {
  tens++;
  if (tens < 9) {
    appendtens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendtens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendseconds.innerHTML = "0" + seconds;
    tens = 0;
    appendtens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendseconds.innerHTML = seconds;
  }
}
buttonStart.onclick = function () {
  interval = setInterval(startTimer);
};
buttonStop.onclick = function () {
  clearInterval(interval);
};
buttonReset.onclick = function () {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  appendseconds.innerHTML = seconds;
  appendtens.innerHTML = tens;
};
