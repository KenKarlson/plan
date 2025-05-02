// menu.js
export function initMenu() {
  const floatingButton = document.getElementById("floating-button");
  const floatingPanel = document.getElementById("floating-panel");

  if (!floatingButton || !floatingPanel) return;

  floatingButton.addEventListener("click", () => {
    floatingPanel.classList.toggle("show");
  });

  // Переключатель темы
  const themeToggle = document.getElementById("toggle-theme");
  if (themeToggle) {
    const isDark = localStorage.getItem("theme") === "dark";
    if (isDark) document.body.classList.add("dark");

    themeToggle.textContent = isDark ? "☀️ Светлая тема" : "🌙 Тёмная тема";

    themeToggle.addEventListener("click", () => {
      const isDarkNow = document.body.classList.toggle("dark");
      themeToggle.textContent = isDarkNow
        ? "☀️ Светлая тема"
        : "🌙 Тёмная тема";
      localStorage.setItem("theme", isDarkNow ? "dark" : "light");
    });
  }
}
// menu.js
