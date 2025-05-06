// === Данные ===
const plans = {
  htmlcss: {
    title: "HTML & CSS",
    weeks: [
      {
        number: 1,
        title: "Неделя 1",
        description: "Основы работы с HTML и начало верстки.",
        topics: [
          {
            day: 1,
            theme: "Как работает Web",
            task: "Изучить основы работы интернета",
            questions: [
              {
                q: "1. Введение",
                desc: "Как устроен веб и что происходит при загрузке страницы.",
                example: "http://example.com",
              },
            ],
          },
          {
            day: 2,
            theme: "Что такое HTML & CSS",
            task: "Разница между языками разметки и стилей",
            questions: [
              {
                q: "1. Введение",
                desc: "HTML — язык разметки, CSS — стиль.",
                example: "<p>Текст</p>",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        title: "Неделя 2",
        description: "Создание первого сайта и публикация его в интернете.",
        topics: [
          {
            day: 3,
            theme: "Основы и синтаксис",
            task: "Структура HTML документа",
            questions: [
              {
                q: "1. Базовые теги",
                desc: "Теги <html>, <head>, <body>",
                example:
                  "<html><head><title>Page</title></head><body></body></html>",
              },
            ],
          },
          {
            day: 4,
            theme: "Текстовый редактор VSCode",
            task: "Установка и базовое использование",
            questions: [
              {
                q: "1. Установка",
                desc: "Скачиваем с официального сайта",
                example: "",
              },
            ],
          },
        ],
      },
    ],
  },
  js: {
    title: "JavaScript",
    weeks: [
      {
        number: 1,
        title: "Неделя 1",
        description: "Введение в JavaScript. Основы программирования.",
        topics: [
          {
            day: 1,
            theme: "Hello World",
            task: "Первая программа на JS",
            questions: [
              {
                q: "1. Вывод текста",
                desc: "Используем console.log()",
                example: "console.log('Hello World');",
              },
            ],
          },
        ],
      },
    ],
  },
  git: {
    title: "Git",
    weeks: [],
  },
  react: {
    title: "React",
    weeks: [],
  },
  practice: {
    title: "Практика React",
    weeks: [],
  },
  backend: {
    title: "Backend",
    weeks: [],
  },
  ts: {
    title: "TypeScript",
    weeks: [],
  },
};

let currentModule = "htmlcss";
let savedProgress = {};
const progressKeyPrefix = "progress-";

// === DOM элементы ===
const moduleButtons = document.querySelectorAll("#module-buttons button");
const contentContainer = document.getElementById("content");
const progressBarFill = document.getElementById("progress-fill");
const completedCountEl = document.getElementById("completed-count");
const totalCountEl = document.getElementById("total-count");
const progressPercentEl = document.getElementById("progress-percent");

// === Функции ===

function loadProgress() {
  const key = `${progressKeyPrefix}${currentModule}`;
  savedProgress = JSON.parse(localStorage.getItem(key)) || {};
}

function saveProgress() {
  const key = `${progressKeyPrefix}${currentModule}`;
  localStorage.setItem(key, JSON.stringify(savedProgress));
}

function updateProgress(total, completed) {
  const percent = Math.round((completed / total) * 100);
  progressBarFill.style.width = `${percent}%`;
  completedCountEl.textContent = completed;
  totalCountEl.textContent = total;
  progressPercentEl.textContent = `${percent}%`;
}

function renderModule(moduleKey) {
  currentModule = moduleKey;
  loadProgress();

  const plan = plans[moduleKey];
  if (!plan) return;

  let allQuestions = [];
  let totalQuestions = 0;

  contentContainer.innerHTML = "";

  plan.weeks.forEach((week) => {
    const weekEl = document.createElement("div");
    weekEl.className = "week";
    weekEl.innerHTML = `<h3>📅 Неделя ${week.number}: ${week.title}</h3>`;
    if (week.description) {
      const desc = document.createElement("p");
      desc.className = "description";
      desc.textContent = week.description;
      weekEl.appendChild(desc);
    }

    week.topics.forEach((topic) => {
      const topicEl = document.createElement("div");
      topicEl.className = "topic";
      topicEl.innerHTML = `<h4>📘 Тема: ${topic.theme}</h4>`;
      if (topic.task) {
        const desc = document.createElement("p");
        desc.className = "description";
        desc.textContent = topic.task;
        topicEl.appendChild(desc);
      }

      const questionsList = document.createElement("ul");
      questionsList.className = "questions";

      topic.questions.forEach((q) => {
        const li = document.createElement("li");
        const label = document.createElement("span");
        label.textContent = q.q;

        // Чекбокс
        const checkboxWrapper = document.createElement("div");
        checkboxWrapper.className = "checkbox-wrapper";
        checkboxWrapper.innerHTML = `
          <label>
            <input type="checkbox" data-day="${topic.day}" ${
          savedProgress[topic.day] ? "checked" : ""
        } />
            Выполнено
          </label>
        `;

        // Подробности
        const details = document.createElement("div");
        details.className = "question-details";
        details.innerHTML = `<p>${q.desc}</p><code>${q.example}</code>`;

        li.appendChild(label);
        li.appendChild(checkboxWrapper);
        li.appendChild(details);

        li.addEventListener("click", (e) => {
          if (e.target.type !== "checkbox") {
            details.classList.toggle("show");
          }
        });

        questionsList.appendChild(li);
        allQuestions.push({ el: li, day: topic.day });
      });

      topicEl.appendChild(questionsList);
      weekEl.appendChild(topicEl);
      totalQuestions++;
    });

    contentContainer.appendChild(weekEl);
  });

  // Обработчики событий
  contentContainer
    .querySelectorAll("input[type='checkbox']")
    .forEach((input) => {
      input.addEventListener("change", (e) => {
        const day = e.target.closest("li").querySelector("[data-day]")
          .dataset.day;
        savedProgress[day] = e.target.checked;
        saveProgress();
        updateStats(allQuestions);
      });
    });

  updateStats(allQuestions);
}

function updateStats(allQuestions) {
  const total = allQuestions.length;
  const completed = allQuestions.filter((q) => savedProgress[q.day]).length;
  updateProgress(total, completed);
}

// === Инициализация ===
window.addEventListener("DOMContentLoaded", () => {
  // Обработчики кнопок
  moduleButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      moduleButtons.forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      renderModule(e.target.dataset.module);
    });
  });

  // Первый запуск
  renderModule(currentModule);
});
