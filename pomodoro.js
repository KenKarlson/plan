const timerDisplay = document.getElementById("timer");
const statusDisplay = document.getElementById("status");
const countDisplay = document.getElementById("pomodoro-count");
const pauseBtn = document.querySelector(".pause-btn");
const endSound = document.getElementById("end-sound");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

let workDuration = 25 * 60; // 25 минут
let breakDuration = 5 * 60; // 5 минут
let timer = workDuration;
let interval = null;
let isBreak = false;
let pomodoroCount = parseInt(localStorage.getItem("pomodoroCount")) || 0;
let isPaused = false;

// Обновление счётчика
function updateCountDisplay() {
  countDisplay.textContent = pomodoroCount;
}

// Обновление отображения времени
function updateDisplay() {
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
}

// Воспроизведение звука
function playEndSound() {
  endSound.currentTime = 0;
  endSound.play();
}

// Начать Pomodoro
function startPomodoro() {
  if (interval || isPaused) return;

  if (!isBreak && timer === workDuration && pomodoroCount === 0) {
    statusDisplay.textContent = "Статус: Работа";
  }

  interval = setInterval(() => {
    if (timer > 0) {
      timer--;
      updateDisplay();
    } else {
      clearInterval(interval);
      playEndSound();

      if (!isBreak) {
        // Работа закончена → отдых
        isBreak = true;
        statusDisplay.textContent = "Статус: Отдых";
        timer = breakDuration;
        interval = null;
        startPomodoro(); // Автоматически запускаем отдых
      } else {
        // Отдых закончен → работа + новый Pomodoro
        isBreak = false;
        pomodoroCount++;
        localStorage.setItem("pomodoroCount", pomodoroCount);
        updateCountDisplay();

        statusDisplay.textContent = "Статус: Работа";
        timer = workDuration;
        interval = null;
        startPomodoro(); // Автоматически запускаем работу
      }
    }
  }, 1000);

  pauseBtn.disabled = false;
  pauseBtn.textContent = "Пауза";
}

// Пауза
function pausePomodoro() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    isPaused = true;
    pauseBtn.textContent = "Продолжить";
  } else {
    isPaused = false;
    pauseBtn.textContent = "Пауза";
    startPomodoro();
  }
}

// Сброс
function resetPomodoro() {
  if (interval) clearInterval(interval);
  interval = null;
  isBreak = false;
  isPaused = false;
  timer = workDuration;
  updateDisplay();
  statusDisplay.textContent = "Статус: Ожидание";
  pauseBtn.disabled = true;
  pauseBtn.textContent = "Пауза";
}

// Добавляем слушатели событий
startBtn.addEventListener("click", startPomodoro);
pauseBtn.addEventListener("click", pausePomodoro);
resetBtn.addEventListener("click", resetPomodoro);

// Инициализация при загрузке
updateDisplay();
updateCountDisplay();
