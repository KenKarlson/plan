// pomodoro.js
// pomodoro.js
export function initPomodoro() {
  const POMODORO_TIME = 25 * 60;
  const SHORT_BREAK = 5 * 60;
  const LONG_BREAK = 15 * 60;
  const CYCLES_BEFORE_LONG_BREAK = 4;

  let timeLeft = POMODORO_TIME;
  let interval = null;
  let currentMode = "work";
  let cycleCount = 0;

  const modeDisplay = document.getElementById("pomodoro-mode-mini");
  const timerDisplay = document.getElementById("pomodoro-timer-mini");

  if (!modeDisplay || !timerDisplay) return;

  // Загружаем сохранённое состояние
  const savedState = JSON.parse(localStorage.getItem("pomodoro")) || {};
  const stats = JSON.parse(localStorage.getItem("pomodoro_stats")) || {
    today: 0,
    allTime: 0,
    lastReset: new Date().toISOString().split("T")[0],
  };

  // Проверка на новый день
  const today = new Date().toISOString().split("T")[0];
  if (stats.lastReset !== today) {
    stats.today = 0;
    stats.lastReset = today;
  }

  if (savedState.timeLeft) {
    timeLeft = savedState.timeLeft;
    currentMode = savedState.currentMode || "work";
    cycleCount = savedState.cycleCount || 0;
  }

  // Элемент для отображения статистики
  const statsDiv = document.createElement("div");
  statsDiv.id = "pomodoro-stats";
  statsDiv.innerHTML = `<strong>Сегодня:</strong> ${stats.today} Pomodoro<br/><strong>Всего:</strong> ${stats.allTime}`;
  document
    .querySelector("#floating-panel h3")
    ?.insertAdjacentElement("afterend", statsDiv);

  function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeLeft % 60).toString().padStart(2, "0");
    timerDisplay.textContent = `${minutes}:${seconds}`;
  }

  function updateMode(newMode) {
    currentMode = newMode;
    switch (newMode) {
      case "work":
        timeLeft = POMODORO_TIME;
        break;
      case "shortBreak":
        timeLeft = SHORT_BREAK;
        break;
      case "longBreak":
        timeLeft = LONG_BREAK;
        break;
    }
    modeDisplay.textContent = modeLabels[currentMode];
    updateTimerDisplay();
    saveState();
  }

  const modeLabels = {
    work: "Работа",
    shortBreak: "Перерыв",
    longBreak: "Долгий перерыв",
  };

  function playSound() {
    const audio = new Audio(
      "https://www.soundjay.com/buttons/sounds/beep-07.mp3"
    );
    audio.play();
  }

  function saveState() {
    localStorage.setItem(
      "pomodoro",
      JSON.stringify({ timeLeft, currentMode, cycleCount })
    );
  }

  function saveStats() {
    stats.today++;
    stats.allTime++;
    localStorage.setItem("pomodoro_stats", JSON.stringify(stats));
    updateStatsUI();
  }

  function updateStatsUI() {
    statsDiv.innerHTML = `<strong>Сегодня:</strong> ${stats.today} Pomodoro<br/><strong>Всего:</strong> ${stats.allTime}`;
  }

  function startPomodoro() {
    if (interval) return;

    interval = setInterval(() => {
      timeLeft--;

      if (timeLeft <= 0) {
        clearInterval(interval);
        interval = null;
        playSound();

        if (currentMode === "work") {
          saveStats(); // Сохраняем статистику при завершении работы
          cycleCount++;
          if (cycleCount % CYCLES_BEFORE_LONG_BREAK === 0) {
            updateMode("longBreak");
          } else {
            updateMode("shortBreak");
          }
        } else {
          updateMode("work");
        }

        saveState();
        startPomodoro();
      }

      updateTimerDisplay();
      saveState();
    }, 1000);
  }

  document
    .getElementById("start-pomodoro-mini")
    ?.addEventListener("click", () => {
      if (!interval) startPomodoro();
    });

  document
    .getElementById("pause-pomodoro-mini")
    ?.addEventListener("click", () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
        saveState();
      }
    });

  document
    .getElementById("reset-pomodoro-mini")
    ?.addEventListener("click", () => {
      if (interval) clearInterval(interval);
      interval = null;
      cycleCount = 0;
      updateMode("work");
      saveState();
    });

  updateMode(currentMode);
}

//old code
// export function initPomodoro() {
//   const POMODORO_TIME = 25 * 60;
//   const SHORT_BREAK = 5 * 60;
//   const LONG_BREAK = 15 * 60;
//   const CYCLES_BEFORE_LONG_BREAK = 4;

//   let timeLeft = POMODORO_TIME;
//   let interval = null;
//   let currentMode = "work";
//   let cycleCount = 0;

//   const modeDisplay = document.getElementById("pomodoro-mode-mini");
//   const timerDisplay = document.getElementById("pomodoro-timer-mini");

//   if (!modeDisplay || !timerDisplay) return;

//   const savedState = JSON.parse(localStorage.getItem("pomodoro")) || {};
//   if (savedState.timeLeft) {
//     timeLeft = savedState.timeLeft;
//     currentMode = savedState.currentMode || "work";
//     cycleCount = savedState.cycleCount || 0;
//   }

//   function updateTimerDisplay() {
//     const minutes = Math.floor(timeLeft / 60)
//       .toString()
//       .padStart(2, "0");
//     const seconds = (timeLeft % 60).toString().padStart(2, "0");
//     timerDisplay.textContent = `${minutes}:${seconds}`;
//   }

//   function updateMode(newMode) {
//     currentMode = newMode;
//     switch (newMode) {
//       case "work":
//         timeLeft = POMODORO_TIME;
//         break;
//       case "shortBreak":
//         timeLeft = SHORT_BREAK;
//         break;
//       case "longBreak":
//         timeLeft = LONG_BREAK;
//         break;
//     }
//     modeDisplay.textContent = modeLabels[currentMode];
//     updateTimerDisplay();
//     saveState();
//   }

//   const modeLabels = {
//     work: "Работа",
//     shortBreak: "Перерыв",
//     longBreak: "Долгий перерыв",
//   };

//   function playSound() {
//     const audio = new Audio(
//       "https://www.soundjay.com/buttons/sounds/beep-07.mp3"
//     );
//     audio.play();
//   }

//   function saveState() {
//     localStorage.setItem(
//       "pomodoro",
//       JSON.stringify({ timeLeft, currentMode, cycleCount })
//     );
//   }

//   function startPomodoro() {
//     if (interval) return;

//     interval = setInterval(() => {
//       timeLeft--;

//       if (timeLeft <= 0) {
//         clearInterval(interval);
//         interval = null;
//         playSound();

//         if (currentMode === "work") {
//           cycleCount++;
//           if (cycleCount % CYCLES_BEFORE_LONG_BREAK === 0) {
//             updateMode("longBreak");
//           } else {
//             updateMode("shortBreak");
//           }
//         } else {
//           updateMode("work");
//         }

//         saveState();
//         startPomodoro();
//       }

//       updateTimerDisplay();
//       saveState();
//     }, 1000);
//   }

//   document
//     .getElementById("start-pomodoro-mini")
//     ?.addEventListener("click", () => {
//       if (!interval) startPomodoro();
//     });

//   document
//     .getElementById("pause-pomodoro-mini")
//     ?.addEventListener("click", () => {
//       if (interval) {
//         clearInterval(interval);
//         interval = null;
//         saveState();
//       }
//     });

//   document
//     .getElementById("reset-pomodoro-mini")
//     ?.addEventListener("click", () => {
//       if (interval) clearInterval(interval);
//       interval = null;
//       cycleCount = 0;
//       updateMode("work");
//       saveState();
//     });

//   updateMode(currentMode);
// }
