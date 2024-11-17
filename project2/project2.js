let timerInterval;
let totalSeconds = 0;

function updateClock() {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    document.getElementById('currentTime').textContent = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
    const inputTime = document.getElementById('inputTime').value;
    const [inputHours, inputMinutes, inputSeconds] = inputTime.split(':').map(Number);

    totalSeconds = inputHours * 3600 + inputMinutes * 60 + inputSeconds;

    if (timerInterval) return;
    timerInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("Time's up!");
            return;
        }
        totalSeconds--;
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');
        document.getElementById('timer').textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}
function resetTimer() {
    stopTimer();
    totalSeconds = 0;
    document.getElementById('timer').textContent = '00:00:00';
}
setInterval(updateClock, 1000);