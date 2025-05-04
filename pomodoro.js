let timerDisplay = document.getElementById("timer");
let timerDuration = 25 * 60; // 25 минут
let timer = timerDuration;
let interval = null;

function updateDisplay() {
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
}

function startPomodoro() {
  if (interval) clearInterval(interval);

  interval = setInterval(() => {
    if (timer > 0) {
      timer--;
      updateDisplay();
    } else {
      clearInterval(interval);
      alert("Время Pomodoro закончилось! Отдохни 5 мин.");
      timer = 5 * 60; // Переключаемся на отдых
      interval = setInterval(() => {
        if (timer > 0) {
          timer--;
          updateDisplay();
        } else {
          clearInterval(interval);
          alert("Время отдыха закончилось!");
          timer = timerDuration;
          updateDisplay();
        }
      }, 1000);
    }
  }, 1000);
}

function resetPomodoro() {
  if (interval) clearInterval(interval);
  timer = timerDuration;
  updateDisplay();
}

// Инициализация при загрузке
updateDisplay();
