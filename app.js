// Elemente holen
const input = document.getElementById("new-task");
const button = document.getElementById("add-task");
const list = document.getElementById("task-list");

// Funktion zum Hinzufügen einer Aufgabe
button.addEventListener("click", () => {
    const task = input.value;
    if (task) {
        const li = document.createElement("li");
        li.textContent = task;

        // Löschen-Button erstellen
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Löschen";
        deleteBtn.style.marginLeft = "10px";

        // Event Listener für Löschen
        deleteBtn.addEventListener("click", () => {
            list.removeChild(li);
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = "";
    }
});