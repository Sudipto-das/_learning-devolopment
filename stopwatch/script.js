let[hours,minutes,seconds,milliseconds]=[0,0,0,0];
let timeref=document.querySelector('.timerdisply');
let my_int = null;

function displayTimer(){
    milliseconds+=10;

    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;

            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

let h = hours < 10 ? "0" + hours : hours;
let m = minutes < 10 ? "0" + minutes : minutes;
let s = seconds < 10 ? "0" + seconds : seconds;
let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
}

timeref.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;

document.getElementById('_start').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(my_int);
    }
    my_int = setInterval(displayTimer,10);
});