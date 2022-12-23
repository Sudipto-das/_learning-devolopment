function showtime() {
    const currenttime = new Date();
    const time = `${currenttime.getHours()}:${currenttime.getMinutes()}:${currenttime.getSeconds()}`;
    document.getElementById('time').innerText = time;
}
showtime();
var interval=setInterval(showtime,1000);