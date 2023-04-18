const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");
const millisecond = document.getElementById("mil");
const resetBtn = document.getElementById("reset");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

let sec = 0;
var min = 0;
var mil = 0;
let interval;

startBtn.addEventListener("click", (e) => {
  e.target.textContent = "start";
  clearInterval(interval);
  interval = setInterval(timer, 10);
});

resetBtn.addEventListener("click", () => {
  mil = 0;
  sec = 0;
  min = 0;
  millisecond.textContent = "00";
  seconds.textContent = "00";
  minutes.textContent = "00";
  clearInterval(interval);
  startBtn.textContent = "start";
});

stopBtn.addEventListener("click", function (e) {
  clearInterval(interval);
  startBtn.textContent === "start"
    ? (startBtn.textContent = "resume")
    : (startBtn.textContent = "start");
  mil < 10
    ? (millisecond.textContent = "0" + mil)
    : (millisecond.textContent = mil);
  sec < 10 ? (seconds.textContent = "0" + sec) : (seconds.textContent = sec);
  min < 10 ? (minutes.textContent = "0" + min) : (minutes.textContent = min);
});

function timer() {
  mil++;
  mil < 10
    ? (millisecond.textContent = "0" + mil)
    : (millisecond.textContent = mil);
  if (mil === 100) {
    millisecond.textContent = mil = "00";
    sec++;
    sec < 10 ? (seconds.textContent = "0" + sec) : (seconds.textContent = sec);
  } else if (sec === 60) {
    seconds.textContent = sec = "00";
    min++;
    min < 10 ? (minutes.textContent = "0" + min) : (minutes.textContent = min);
  }
  if (min === 59 && sec === 59 && mil === 99) {
    clearInterval(interval);
  }
}
