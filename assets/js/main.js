import { initProgress } from "./progress.js";
import { initPomodoro } from "./pomodoro.js";
import { initMenu } from "./menu.js";

document.addEventListener("DOMContentLoaded", () => {
  let planData = [];
  let currentLang = "js"; // по умолчанию
  let savedProgress = {};
  const progressKeyPrefix = "progress-";

  // Загружаем текущий прогресс для языка
  function loadProgress() {
    const progressKey = `${progressKeyPrefix}${currentLang}`;
    savedProgress = JSON.parse(localStorage.getItem(progressKey)) || {};
  }

  // Сохраняем прогресс для текущего языка
  function saveProgress() {
    const progressKey = `${progressKeyPrefix}${currentLang}`;
    localStorage.setItem(progressKey, JSON.stringify(savedProgress));
  }

  // Рендерим таблицу
  function renderTable() {
    const tbody = document.querySelector("#plan-table tbody");
    if (!tbody) return;

    tbody.innerHTML = "";

    planData.forEach((item) => {
      const row = document.createElement("tr");
      if (savedProgress[item.day]) row.classList.add("done");

      row.innerHTML = `
        <td>${item.day}</td>
        <td><strong>${item.theme}</strong></td>
        <td>${item.task}</td>
        <td>${item.resources}</td>
        <td><code>${item.example}</code></td>
        <td style="text-align:center;">
          <input type="checkbox" ${
            savedProgress[item.day] ? "checked" : ""
          } data-day="${item.day}" />
        </td>
      `;
      tbody.appendChild(row);
    });

    updateProgress();
  }

  // Обновляем шкалу прогресса
  function updateProgress() {
    const totalDays = planData.length;
    const completedDays = Object.values(savedProgress).filter(Boolean).length;
    const percent = Math.round((completedDays / totalDays) * 100);

    document.getElementById("completed-count")?.textContent &&
      (document.getElementById("completed-count").textContent = completedDays);
    document.getElementById("progress-percent")?.textContent &&
      (document.getElementById("progress-percent").textContent = `${percent}%`);
    document.getElementById("progress-fill")?.style &&
      (document.getElementById("progress-fill").style.width = `${percent}%`);
  }

  // Загрузка JSON-плана
  function loadPlan(lang) {
    currentLang = lang;
    loadProgress();

    let fileName = "plan.json";
    switch (lang) {
      case "golang":
        fileName = "plan-golang.json";
        break;
      case "rust":
        fileName = "plan-rust.json";
        break;
    }

    fetch(fileName)
      .then((res) => res.json())
      .then((data) => {
        planData = data;
        renderTable();
      });
  }

  // Обработчик кнопок выбора языка
  document.querySelectorAll("#language-buttons button").forEach((button) => {
    button.addEventListener("click", (e) => {
      document
        .querySelectorAll("#language-buttons button")
        .forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      loadPlan(e.target.dataset.lang);
    });
  });

  // Обработчик чекбоксов
  document.querySelector("table").addEventListener("change", function (e) {
    if (e.target.type === "checkbox") {
      const day = e.target.getAttribute("data-day");
      savedProgress[day] = e.target.checked;
      saveProgress();
      e.target.closest("tr").classList.toggle("done", e.target.checked);
      updateProgress();
    }
  });

  // Добавляем класс active к текущей кнопке
  const activeButton = document.querySelector(
    `#language-buttons button[data-lang="${currentLang}"]`
  );
  if (activeButton) activeButton.classList.add("active");

  // Загружаем начальный план
  loadProgress();
  loadPlan(currentLang);
  // Инициализируем таймер Помодоро
  initPomodoro();
  // Инициализируем меню
  initMenu();
});

// // main.js
// import { initProgress } from "./progress.js";
// import { initPomodoro } from "./pomodoro.js";
// import { initMenu } from "./menu.js";

// document.addEventListener("DOMContentLoaded", () => {
//   // Инициализируем прогресс по дням
//   initProgress();

//   // Инициализируем таймер Помодоро
//   initPomodoro();

//   // Инициализируем меню
//   initMenu();
// });
