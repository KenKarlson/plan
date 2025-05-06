// === Данные по курсам ===
const plans = {
  htmlcss: {
    title: "HTML & CSS",
    weeks: [
      {
        number: 1,
        title: "Основы",
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
                q: "1. Основы",
                desc: "HTML — язык разметки, CSS — стиль.",
                example: "<p>Текст</p>",
              },
            ],
          },
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
                example: "https://code.visualstudio.com/",
              },
            ],
          },
          {
            day: 5,
            theme: "Структура HTML-документа",
            task: "Понимание основных разделов",
            questions: [
              {
                q: "1. Тег <html>",
                desc: "Корневой элемент",
                example: '<html lang="ru"></html>',
              },
            ],
          },
          {
            day: 6,
            theme: "Секция Head",
            task: "Метаданные и подключение ресурсов",
            questions: [
              {
                q: "1. Тег <meta>",
                desc: "Для SEO и кодировки",
                example: '<meta charset="UTF-8">',
              },
            ],
          },
          {
            day: 7,
            theme: "Работа с текстом",
            task: "Форматирование и семантика",
            questions: [
              {
                q: "1. Заголовки",
                desc: "Теги <h1> до <h6>",
                example: "<h1>Заголовок</h1>",
              },
            ],
          },
          {
            day: 8,
            theme: "Картинки и ссылки",
            task: "Вставка медиа и навигации",
            questions: [
              {
                q: "1. Тег <img>",
                desc: "Добавление изображений",
                example: '<img src="image.jpg" alt="Описание">',
              },
            ],
          },
          {
            day: 9,
            theme: "Списки",
            task: "Создание маркированных и нумерованных списков",
            questions: [
              {
                q: "1. Тег <ul>",
                desc: "Маркированный список",
                example: "<ul><li>Пункт</li></ul>",
              },
            ],
          },
          {
            day: 10,
            theme: "Таблицы",
            task: "Создание таблиц",
            questions: [
              {
                q: "1. Тег <table>",
                desc: "Базовая таблица",
                example: "<table><tr><td>Ячейка</td></tr></table>",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        title: "Неделя 2",
        description: "Продолжение работы с HTML и начало изучения CSS.",
        topics: [
          {
            day: 11,
            theme: "Формы",
            task: "Создание форм ввода",
            questions: [
              {
                q: "1. Тег <form>",
                desc: "Создание формы",
                example: '<form><input type="text" name="name"></form>',
              },
            ],
          },
          {
            day: 12,
            theme: "Линейные и блочные элементы",
            task: "Понимание display",
            questions: [
              {
                q: "1. Тег <div>",
                desc: "Блочный элемент",
                example: "<div>Блок</div>",
              },
            ],
          },
          {
            day: 13,
            theme: "Классы, ID",
            task: "Селекторы для стилизации",
            questions: [
              {
                q: "1. Атрибут class",
                desc: "Множественное применение",
                example: '<div class="box red">Контент</div>',
              },
            ],
          },
          {
            day: 14,
            theme: "HTML5 Семантика",
            task: "Семантические теги",
            questions: [
              {
                q: "1. Тег <article>",
                desc: "Содержит самостоятельный контент",
                example: "<article>Статья</article>",
              },
            ],
          },
          {
            day: 15,
            theme: "Заливаем сайт на GitHub",
            task: "Публикация проекта",
            questions: [
              {
                q: "1. GitHub Pages",
                desc: "Развертывание сайта",
                example: "https://<username>.github.io/<repo>",
              },
            ],
          },
          {
            day: 16,
            theme: "Что такое CSS",
            task: "Связь стилей и HTML",
            questions: [
              {
                q: "1. Определение",
                desc: "CSS — каскадные таблицы стилей",
                example: "p { color: red; }",
              },
            ],
          },
          {
            day: 17,
            theme: "Синтаксис CSS",
            task: "Правила написания стилей",
            questions: [
              {
                q: "1. Селектор + свойство",
                desc: "p { color: red; }",
                example: "p { font-size: 16px; }",
              },
            ],
          },
          {
            day: 18,
            theme: "Способы подключения CSS",
            task: "Внутренние и внешние стили",
            questions: [
              {
                q: "1. Внешний файл",
                desc: "Подключение через link",
                example: '<link rel="stylesheet" href="style.css">',
              },
            ],
          },
          {
            day: 19,
            theme: "Селекторы",
            task: "Выбор элементов для стилизации",
            questions: [
              {
                q: "1. Классы и ID",
                desc: ".class #id",
                example: "#header { background: #fff; }",
              },
            ],
          },
          {
            day: 20,
            theme: "Как работать с DevTools",
            task: "Инструменты разработчика",
            questions: [
              {
                q: "1. Просмотр стилей",
                desc: "Использование инспектора в браузере",
                example: "F12 → Elements",
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
        description: "Введение в JavaScript. Первая программа.",
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
          {
            day: 2,
            theme: "Синтаксис",
            task: "Базовые конструкции",
            questions: [
              {
                q: "1. Точка с запятой",
                desc: "Не обязательна, но рекомендована",
                example: "let x = 5;",
              },
            ],
          },
          {
            day: 3,
            theme: "Типы данных",
            task: "Работа с примитивами",
            questions: [
              {
                q: "1. Числа и строки",
                desc: "number, string",
                example: "let age = 25; let name = 'John';",
              },
            ],
          },
          {
            day: 4,
            theme: "Приведение типов в JavaScript",
            task: "Автоматическое и явное приведение",
            questions: [
              {
                q: "1. String()",
                desc: "Преобразование в строку",
                example: "String(123) // '123'",
              },
            ],
          },
          {
            day: 5,
            theme: "Работа со строками Действия",
            task: "Методы строк",
            questions: [
              {
                q: "1. toUpperCase()",
                desc: "Преобразует строку в верхний регистр",
                example: "'hello'.toUpperCase()",
              },
            ],
          },
        ],
      },
    ],
  },

  git: {
    title: "Git",
    weeks: [
      {
        number: 1,
        title: "Неделя 1",
        description: "Введение в систему контроля версий Git.",
        topics: [
          {
            day: 1,
            theme: "Что такое Git и GitHub. Установка Git",
            task: "Установка и начальная настройка",
            questions: [
              {
                q: "1. Установка",
                desc: "Скачайте с https://git-scm.com/",
                example: "git --version",
              },
            ],
          },
          {
            day: 2,
            theme:
              "Создание репозитория на GitHub. Инициализация проекта через Git",
            task: "Создание первого репозитория",
            questions: [
              {
                q: "1. git init",
                desc: "Инициализация локального репозитория",
                example: "git init",
              },
            ],
          },
          {
            day: 3,
            theme: "Основы Git",
            task: "Добавление и коммит изменений",
            questions: [
              {
                q: "1. git add",
                desc: "Добавление изменений в индекс",
                example: "git add .",
              },
            ],
          },
          {
            day: 4,
            theme: "Основы ветвления и слияния",
            task: "Работа с ветками",
            questions: [
              {
                q: "1. git branch",
                desc: "Создание и переключение веток",
                example: "git branch dev && git checkout dev",
              },
            ],
          },
          {
            day: 5,
            theme: "Решение конфликтов при слиянии веток",
            task: "Обработка конфликтующих изменений",
            questions: [
              {
                q: "1. Ручное решение",
                desc: "Редактирование файла после merge",
                example: "<<<< HEAD ... ===== ... >>>>",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        title: "Неделя 2",
        description:
          "Работа с удаленными репозиториями и продвинутые возможности.",
        topics: [
          {
            day: 6,
            theme: "GitFlow - методика работы с Git",
            task: "Стандартная модель ветвления",
            questions: [
              {
                q: "1. Модель веток",
                desc: "master/main, develop, feature, hotfix",
                example: "git flow init",
              },
            ],
          },
          {
            day: 7,
            theme: "Доступ к репозиторию по SSH",
            task: "Настройка SSH-ключа",
            questions: [
              {
                q: "1. Генерация ключа",
                desc: "ssh-keygen -t rsa -b 4096",
                example: "cat ~/.ssh/id_rsa.pub",
              },
            ],
          },
        ],
      },
    ],
  },

  react: {
    title: "React",
    weeks: [
      {
        number: 1,
        title: "Неделя 1",
        description: "Введение в React и создание первого компонента.",
        topics: [
          {
            day: 1,
            theme: "Введение в React",
            task: "Основы библиотеки",
            questions: [
              {
                q: "1. Что такое React?",
                desc: "Библиотека для создания пользовательских интерфейсов",
                example: "npx create-react-app my-app",
              },
            ],
          },
          {
            day: 2,
            theme: "Компоненты",
            task: "Создание переиспользуемых частей",
            questions: [
              {
                q: "1. Функциональный компонент",
                desc: "Создание через функцию",
                example: "function App() { return <div>Hello</div>; }",
              },
            ],
          },
        ],
      },
    ],
  },

  practice: {
    title: "Практика React",
    weeks: [
      {
        number: 1,
        title: "Неделя 1",
        description: "Разработка клиентской части приложения «Блог».",
        topics: [
          {
            day: 1,
            theme: "Введение",
            task: "Цель этапа",
            questions: [
              {
                q: "1. Цель",
                desc: "Создание полноценного приложения",
                example: "npm create vite@latest blog --template react-ts",
              },
            ],
          },
        ],
      },
    ],
  },

  backend: {
    title: "Backend",
    weeks: [
      {
        number: 1,
        title: "Неделя 1",
        description: "Введение в Backend. Создание сервера.",
        topics: [
          {
            day: 1,
            theme: "Введение",
            task: "Что такое Backend",
            questions: [
              {
                q: "1. Сервер",
                desc: "Обработка запросов от клиента",
                example: "Node.js + Express",
              },
            ],
          },
        ],
      },
    ],
  },

  ts: {
    title: "TypeScript",
    weeks: [
      {
        number: 1,
        title: "Неделя 1",
        description: "Введение в TypeScript. Основы типизации.",
        topics: [
          {
            day: 1,
            theme: "Что такое TypeScript и зачем он нужен",
            task: "Основы использования",
            questions: [
              {
                q: "1. Определение",
                desc: "Надмножество JavaScript с поддержкой типов",
                example: "npm install -g typescript",
              },
            ],
          },
        ],
      },
    ],
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
//Render
// function renderModule(moduleKey) {
//   currentModule = moduleKey;
//   loadProgress();

//   const plan = plans[moduleKey];
//   if (!plan) return;

//   let allQuestions = [];
//   let totalQuestions = 0;

//   contentContainer.innerHTML = "";

//   plan.weeks.forEach((week) => {
//     const weekEl = document.createElement("div");
//     weekEl.className = "week";
//     weekEl.innerHTML = `<h3>📅 Неделя ${week.number}: ${week.title}</h3>`;
//     if (week.description) {
//       const desc = document.createElement("p");
//       desc.className = "description";
//       desc.textContent = week.description;
//       weekEl.appendChild(desc);
//     }

//     week.topics.forEach((topic) => {
//       const topicEl = document.createElement("div");
//       topicEl.className = "topic";
//       topicEl.innerHTML = `<h4>📘 Тема: ${topic.theme}</h4>`;
//       if (topic.task) {
//         const desc = document.createElement("p");
//         desc.className = "description";
//         desc.textContent = topic.task;
//         topicEl.appendChild(desc);
//       }

//       const questionsList = document.createElement("ul");
//       questionsList.className = "questions";

//       topic.questions.forEach((q) => {
//         const li = document.createElement("li");
//         const label = document.createElement("span");
//         label.textContent = q.q;

//         // Чекбокс
//         const checkboxWrapper = document.createElement("div");
//         checkboxWrapper.className = "checkbox-wrapper";
//         checkboxWrapper.innerHTML = `
//           <label>
//             <input type="checkbox" data-day="${topic.day}" ${
//           savedProgress[topic.day] ? "checked" : ""
//         } />
//             Выполнено
//           </label>
//         `;

//         // Подробности
//         const details = document.createElement("div");
//         details.className = "question-details";
//         details.innerHTML = `<p>${q.desc}</p><code>${q.example}</code>`;

//         li.appendChild(label);
//         li.appendChild(checkboxWrapper);
//         li.appendChild(details);

//         li.addEventListener("click", (e) => {
//           if (e.target.type !== "checkbox") {
//             details.classList.toggle("show");
//           }
//         });

//         questionsList.appendChild(li);
//         allQuestions.push({ el: li, day: topic.day });
//       });

//       topicEl.appendChild(questionsList);
//       weekEl.appendChild(topicEl);
//       totalQuestions++;
//     });

//     contentContainer.appendChild(weekEl);
//   });

//   // Обработчики событий
//   contentContainer
//     .querySelectorAll("input[type='checkbox']")
//     .forEach((input) => {
//       input.addEventListener("change", (e) => {
//         const day = e.target.closest("li").querySelector("[data-day]")
//           .dataset.day;
//         savedProgress[day] = e.target.checked;
//         saveProgress();
//         updateStats(allQuestions);
//       });
//     });

//   updateStats(allQuestions);
// }
// function renderModule(moduleKey) {
//   currentModule = moduleKey;
//   loadProgress();

//   const plan = plans[moduleKey];
//   if (!plan) return;

//   let allQuestions = [];

//   contentContainer.innerHTML = "";

//   plan.weeks.forEach((week) => {
//     const weekEl = document.createElement("div");
//     weekEl.className = "week";

//     // Заголовок недели (без дублирования)
//     const weekTitle = document.createElement("h3");
//     weekTitle.textContent = `📅 Неделя ${week.number}: ${week.title}`;
//     weekEl.appendChild(weekTitle);

//     // Описание недели (по клику)
//     if (week.description) {
//       const desc = document.createElement("p");
//       desc.className = "description";
//       desc.textContent = week.description;
//       weekEl.appendChild(desc);

//       weekEl.addEventListener("click", () => {
//         desc.classList.toggle("show");
//       });
//     }

//     // Темы
//     week.topics.forEach((topic) => {
//       const topicEl = document.createElement("div");
//       topicEl.className = "topic";

//       const topicHeader = document.createElement("h4");
//       topicHeader.className = "topic-header";
//       topicHeader.textContent = `📘 Тема: ${topic.theme}`;
//       topicEl.appendChild(topicHeader);

//       // Описание темы
//       if (topic.task) {
//         const taskDesc = document.createElement("p");
//         taskDesc.className = "description";
//         taskDesc.textContent = topic.task;
//         topicEl.appendChild(taskDesc);

//         topicEl.addEventListener("click", () => {
//           taskDesc.classList.toggle("show");
//         });
//       }

//       // Вопросы
//       const questionsList = document.createElement("ul");
//       questionsList.className = "questions";

//       topic.questions.forEach((q) => {
//         const li = document.createElement("li");

//         const label = document.createElement("span");
//         label.textContent = q.q;

//         // Чекбокс
//         const checkboxWrapper = document.createElement("div");
//         checkboxWrapper.className = "checkbox-wrapper";
//         checkboxWrapper.innerHTML = `
//           <label>
//             <input type="checkbox" data-day="${topic.day}" ${
//           savedProgress[topic.day] ? "checked" : ""
//         } />
//             Выполнено
//           </label>
//         `;

//         // Подробности
//         const details = document.createElement("div");
//         details.className = "question-details";
//         details.innerHTML = `<p>${q.desc}</p><code>${q.example}</code>`;

//         li.appendChild(label);
//         li.appendChild(checkboxWrapper);
//         li.appendChild(details);

//         // Клик по вопросу → открываем описание
//         li.addEventListener("click", (e) => {
//           if (e.target.type !== "checkbox") {
//             details.classList.toggle("show");
//           }
//         });

//         questionsList.appendChild(li);
//         allQuestions.push({ el: li, day: topic.day });
//       });

//       topicEl.appendChild(questionsList);
//       weekEl.appendChild(topicEl);
//     });

//     contentContainer.appendChild(weekEl);
//   });

//   // Обработчики событий для чекбоксов
//   contentContainer
//     .querySelectorAll("input[type='checkbox']")
//     .forEach((input) => {
//       input.addEventListener("change", (e) => {
//         const day = e.target.closest("li").querySelector("[data-day]")
//           .dataset.day;
//         savedProgress[day] = e.target.checked;
//         saveProgress();
//         updateStats(allQuestions);
//       });
//     });

//   updateStats(allQuestions);
// }

// === Рендеринг модуля ===
function renderModule(moduleKey) {
  currentModule = moduleKey;
  loadProgress();

  const plan = plans[moduleKey];
  if (!plan) return;

  let allQuestions = [];

  contentContainer.innerHTML = "";

  plan.weeks.forEach((week, weekIndex) => {
    const weekEl = document.createElement("div");
    weekEl.className = "week";

    // Заголовок недели
    const weekTitle = document.createElement("h3");
    weekTitle.textContent = `📅 Неделя ${week.number}: ${week.title}`;
    weekEl.appendChild(weekTitle);

    // Описание недели
    if (week.description) {
      const desc = document.createElement("p");
      desc.className = "description";
      desc.textContent = week.description;
      weekEl.appendChild(desc);
    }

    // Обработчик клика на неделю
    weekEl.addEventListener("click", (e) => {
      const desc = weekEl.querySelector(".description");
      if (
        desc &&
        !e.target.closest(".topic") &&
        !e.target.closest(".question")
      ) {
        desc.classList.toggle("show");
      }
    });

    // Контейнер тем
    const topicsContainer = document.createElement("div");
    topicsContainer.className = "topics-container";

    // Темы
    week.topics.forEach((topic) => {
      const topicEl = document.createElement("div");
      topicEl.className = "topic";

      // Заголовок темы
      const topicHeader = document.createElement("h4");
      topicHeader.className = "topic-header";
      topicHeader.textContent = `📘 Тема: ${topic.theme}`;
      topicEl.appendChild(topicHeader);

      // Описание темы
      if (topic.task) {
        const taskDesc = document.createElement("p");
        taskDesc.className = "description";
        taskDesc.textContent = topic.task;
        topicEl.appendChild(taskDesc);
      }

      // Обработчик клика на тему
      topicEl.addEventListener("click", (e) => {
        // Предотвращаем проваливание клика на неделю
        e.stopPropagation();

        const taskDesc = topicEl.querySelector(".description");
        if (taskDesc) {
          taskDesc.classList.toggle("show");
        }
      });

      // Список вопросов
      const questionsList = document.createElement("ul");
      questionsList.className = "questions";

      // Вопросы
      topic.questions.forEach((q) => {
        const li = document.createElement("li");

        // Текст вопроса
        const label = document.createElement("span");
        label.textContent = q.q;

        // Чекбокс выполнения
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

        // Подробности вопроса
        const details = document.createElement("div");
        details.className = "question-details";
        details.innerHTML = `<p>${q.desc}</p><code>${q.example}</code>`;

        // Обработчик клика на вопрос
        li.addEventListener("click", (e) => {
          if (e.target.type !== "checkbox") {
            e.stopPropagation(); // 🔥 Останавливаем проваливание на тему и неделю
            details.classList.toggle("show");
          }
        });

        // Сборка элемента вопроса
        li.appendChild(label);
        li.appendChild(checkboxWrapper);
        li.appendChild(details);
        questionsList.appendChild(li);
        allQuestions.push({ el: li, day: topic.day });
      });

      topicEl.appendChild(questionsList);
      topicsContainer.appendChild(topicEl);
    });

    weekEl.appendChild(topicsContainer);
    contentContainer.appendChild(weekEl);

    // === Проверка: вся ли неделя пройдена? ===
    function checkWeekCompleted() {
      const totalInWeek = week.topics.reduce(
        (sum, t) => sum + t.questions.length,
        0
      );
      const completedInWeek = week.topics.reduce(
        (sum, t) =>
          sum + t.questions.filter((q) => savedProgress[t.day]).length,
        0
      );

      if (totalInWeek > 0 && completedInWeek === totalInWeek) {
        weekEl.style.display = "none"; // Скрываем неделю
      } else {
        weekEl.style.display = ""; // Показываем обратно
      }
    }

    // === Обработчики событий для чекбоксов ===
    contentContainer
      .querySelectorAll("input[type='checkbox']")
      .forEach((input) => {
        input.addEventListener("change", (e) => {
          const day = e.target.closest("li").querySelector("[data-day]")
            .dataset.day;
          savedProgress[day] = e.target.checked;
          saveProgress();
          updateStats(allQuestions);
          checkWeekCompleted(); // Проверяем завершение недели
        });
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
