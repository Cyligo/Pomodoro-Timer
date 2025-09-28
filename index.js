const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval = null;
let timeLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerEl.innerHTML = formattedTime;
    document.title = formattedTime;
}

function startTimer() {
    // Verificar se o intervalo tem algum valor
    if (interval) {
        return;
    }

    interval = setInterval(() => {
        timeLeft--
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            interval = null;
            alert("Tempo acabou, Descanse!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    clearInterval(interval);
    interval = null;
    timeLeft = 1500;
    updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
updateTimer(); // Exibir o tempo assim que a página carregar