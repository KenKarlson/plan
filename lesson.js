const lessonsContainerBox = document.getElementById("lessons");
const lessonsTask = [
  // Здесь массив из JSON-файла с уроками
  // Пример одного объекта:
  {
    day: "1",
    theme: "Введение в JS. Установка среды разработки",
    task: "Установить VSCode и открыть DevTools в браузере. Написать первый скрипт",
  },
  {
    day: "2",
    theme: "Переменные и типы данных",
    task: "Объявить переменные с let, const, var. Определить их типы",
    resources:
      "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let' target='_blank'>Variables MDN</a>",
    example: 'let age = 25; const name = "John";',
  },
  {
    day: "3",
    theme: "Операторы и выражения",
    task: "Выполнить математические операции, сравнения и логические проверки",
    resources:
      "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_operators' target='_blank'>Expressions and Operators</a>",
    example: "let result = 5 + 3; console.log(result > 7);",
  },
  // ...остальные уроки
];

function renderLessons() {
  lessonsTask.forEach((lesson, index) => {
    const card = document.createElement("div");
    card.className = "lesson-card";
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <h3>День ${lesson.day}</h3>
      <strong>${lesson.theme}</strong>
      <p>${lesson.task}</p>
    `;
    lessonsContainerBox.appendChild(card);
  });
}

renderLessons();
console.log("Load lessons file");
console.log(lessons);
