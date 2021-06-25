//////////////////////////////////////////////////////////////////////////
// STOPWATCH

// Defining  variable  BUTTON
let Start = document.querySelectorAll("button")[0];
let Pause = document.querySelectorAll("button")[1];
let Stop = document.querySelectorAll("button")[2];
let minutes = (seconds = millisecond = 0);


// Defining  variable HR/ MIN/ SEC
let ms = "";
let s = "";
let m = "";
let time = 0;

// start button
Start.onclick = function () {
  timer();
  Start.disabled = true;
  Pause.disabled = false;
  Stop.disabled = true;

};
// Pause button
Pause.onclick = function () {
  clearInterval(time);
  Start.disabled = false;
  Pause.disabled = true;
  Stop.disabled = true;

};


// Stop button

Stop.onclick = function () {
  timer();
  Start.disabled = false;
  Pause.disabled = false;
  Stop.disabled = true;

};


// Timing function
function timer() {
  // Assigning  Operation
  time = setInterval(function () {
    millisecond++;
    if (millisecond == 100) {
      seconds++;
      millisecond = 0;
    }
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    

    //  Zero padding operation
    if (millisecond < 10) {
      ms = "0" + millisecond;
    } else {
      ms = millisecond;
    }
    if (seconds < 10) {
      s = "0" + seconds;
    } else {
      s = seconds;
    }
    if (minutes < 10) {
      m = "0" + minutes;
    } else {
      m = minutes;
    }

    document.getElementById("swatch-timer").innerHTML = `${m}:${s}:${ms}`;
  }, 10);
}
