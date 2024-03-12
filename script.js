const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        const currentDate = new Date();
        const dateTimeString = currentDate.toLocaleString();
        li.innerHTML = `<input type="checkbox" class="checkbox" onclick="toggleTask(this)"> ${taskText}<span class="delete" onclick="deleteTask(this)">❌ Delete</span><span class="datetime">${dateTimeString}</span>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Event listener for adding task
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Function to delete a task
function deleteTask(element) {
    element.parentElement.remove();
}

// Function to toggle task completion
function toggleTask(element) {
    const taskText = element.nextSibling;
    if (element.checked) {
        taskText.classList.add("completed");
    } else {
        taskText.classList.remove("completed");
    }
}
