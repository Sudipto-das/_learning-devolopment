var seconds = 00;
var miliseconds = 00;
var show_seconds = document.getElementById('sec');
var show_miliseconds = document.getElementById('milisec');
// var btnstart = document.getElementById('_start');
// var btnstop = document.getElementById('_stop');
// var btnreset = document.getElementById('_reset');
var interval;
document.getElementById('_start').addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});
document.getElementById('_stop').addEventListener('click', () => {
    clearInterval(interval);
});
document.getElementById('_reset').addEventListener('click', () => {
    clearInterval(interval);
    seconds = "00";
    miliseconds = "00";
    show_miliseconds.innerHTML = miliseconds;
    show_seconds.innerHTML = seconds;
});

function startTimer() {
    miliseconds++;

    if (miliseconds <= 9) {
        show_miliseconds.innerHTML = "0" + miliseconds;
    }

    if (miliseconds > 9) {
        show_miliseconds.innerHTML = miliseconds;
    }

    if (miliseconds > 99) {
        console.log("seconds");
        seconds++;
        show_seconds.innerHTML = "0" + seconds;
        miliseconds = 0;
        show_miliseconds.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        show_seconds.innerHTML = seconds;
    }

}
