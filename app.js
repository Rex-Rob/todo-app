// Elemente holen
const input = document.getElementById("new-task");
const button = document.getElementById("add-task");
const list = document.getElementById("task-list");

// Aufgaben aus localStorage laden
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach(task => addTaskToDOM(task));

// Event Listener für Hinzufügen
button.addEventListener("click", () => {
    const task = input.value.trim();
    if (task) {
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        addTaskToDOM(task);
        input.value = "";
    }
});

// Funktion: Aufgabe ins DOM einfügen
function addTaskToDOM(task) {
    const li = document.createElement("li");
    li.textContent = task;

    // Löschen-Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Löschen";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", () => {
        list.removeChild(li);
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
}