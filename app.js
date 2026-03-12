const input = document.getElementById("new-task");
const button = document.getElementById("add-task");
const list = document.getElementById("task-list");

button.addEventListener("click", () => {
    const task = input.value;
    if (task) {
        const li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
        input.value = "";
    }
});