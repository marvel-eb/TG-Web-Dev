//////////////////////////////////////////////////////////////////////////
//==== STOPWATCH ====


//==== Defining Controle Buttons 
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");

//==== Defining  Timeing ( minutes, seconds, milliseconds)
let minutes = seconds = millisecond = 0;
let ms = '';
let s = '';
let m = '';
let time = 0;

//== Time Display Container
let timeContainer = document.getElementById("swatch-timer")

//=== Start button
startButton.onclick = function () {
  timer();
  startButton.disabled = true;
  pauseButton.disabled = false;
  resetButton.disabled = false; //true
}


//=== Pause / Stop Button
pauseButton.onclick = function () {
  clearInterval(time);
  startButton.disabled = false; //true
  pauseButton.disabled = true;
  resetButton.disabled = false;
}

//=== Reset  Button
resetButton.onclick = function () {
  minutes = seconds = millisecond = 0;
  document.getElementById("swatch-timer").innerHTML = '00:00:00'
  startButton.disabled = false;
  pauseButton.disabled = false; //true
  resetButton.disabled = true;
}

//=== Timing function

function timer() {
  // Assignment operation, store the timer in the global scope variable
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
    if (minutes == 60) {
      hour++;
      minutes = 0;
    }


    //=== If  time is  < 0,  then zero padding operation
    if (millisecond < 10) {
      ms = '0' + millisecond;
    } else {
      ms = millisecond;
    }
    if (seconds < 10) {
      s = '0' + seconds;
    } else {
      s = seconds;
    }
    if (minutes < 10) {
      m = '0' + minutes;
    } else {
      m = minutes;
    }

    //=== Print the string (time) into the div container - HTML

    document.getElementById("swatch-timer").innerHTML = `${m}:${s}:${ms}`;
  }, 10);
}

// End of Scripting //
