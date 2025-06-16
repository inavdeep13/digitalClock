const time = document.getElementById('time');
const timeFormat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
});

const showTime = () => {
    let date = new Date();

    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    hr = hr < 10 ? `${hr}` : hr;
    mins = mins < 10 ? `${mins}` : mins;
    secs = secs < 10 ? `${secs}` : secs;

    time.innerHTML = `${hr} : ${mins} : ${secs}` ;

    timeFormat.innerHTML = hr > 12 ? "PM" : "AM";
}