const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const rootStyles = getComputedStyle(document.documentElement);

let totalSeconds = 0;
let interval;

function updateTimer() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    timer.textContent = `${hours}:${minutes}:${seconds}`;
}

start.addEventListener('click', function() {
    if (!interval) {
        interval = setInterval(function() {
            totalSeconds++;
            updateTimer();
        }, 1000);
    }

    const timerFontColor = rootStyles.getPropertyValue('--font-color');
    timer.style.color = timerFontColor;
});

pause.addEventListener('click', function(e) {
    clearInterval(interval);
    interval = null;

    const timerFontColor = rootStyles.getPropertyValue('--pause-font-color');
    timer.style.color = timerFontColor;
});

reset.addEventListener('click', function(e) {
    clearInterval(interval);
    interval = null;
    totalSeconds = 0;
    updateTimer();

    const timerFontColor = rootStyles.getPropertyValue('--font-color');
    timer.style.color = timerFontColor;
});