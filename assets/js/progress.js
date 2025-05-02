// progress.js
export function initProgress() {
  let planData = [];
  const savedProgress = JSON.parse(localStorage.getItem("progress")) || {};

  const renderTable = () => {
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

    updateProgress(); // Обновляем прогресс при рендере
  };

  const updateProgress = () => {
    const totalDays = planData.length;
    const completedDays = Object.values(savedProgress).filter(Boolean).length;
    const percent = Math.round((completedDays / totalDays) * 100);

    document.getElementById("completed-count")?.textContent &&
      (document.getElementById("completed-count").textContent = completedDays);
    document.getElementById("progress-percent")?.textContent &&
      (document.getElementById("progress-percent").textContent = `${percent}%`);
    document.getElementById("progress-fill")?.style &&
      (document.getElementById("progress-fill").style.width = `${percent}%`);
  };

  document.querySelector("table")?.addEventListener("change", function (e) {
    if (e.target.type === "checkbox") {
      const day = e.target.getAttribute("data-day");
      savedProgress[day] = e.target.checked;
      localStorage.setItem("progress", JSON.stringify(savedProgress));
      e.target.closest("tr").classList.toggle("done", e.target.checked);
      updateProgress();
    }
  });

  fetch("plan.json")
    .then((res) => res.json())
    .then((data) => {
      planData = data;
      renderTable();
    });
}
