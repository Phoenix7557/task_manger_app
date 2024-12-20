const newTaskBtn = document.getElementById("newTaskBtn")
const newTaskWd= document.getElementById("newTaskWd")
const saveTaskBtn = document.getElementById("saveTaskBtn")
const taskList = document.getElementById("taskList")

// Array, das alle Aufgaben speichert
let tasks = [];

// Button: Taskfenster öffnen
newTaskBtn.addEventListener("click", () => {
    console.log("Task-Fenster wird geöffnet");
    newTaskWd.style.display = "block";
});

// Button: Aufgabe speichern
saveTaskBtn.addEventListener('click', () => {
    const name = document.getElementById('taskName').value;
    const date = document.getElementById('taskDate').value;
    const priority = document.getElementById('taskPriority').value;
    const desc = document.getElementById("taskDesc").value;

    if (!name || !date || !priority) {
        alert('Bitte alle Felder ausfüllen!');
        return;
    }

    // Neue Aufgabe als Objekt speichern
    const task = {
        name: name,
        date: date,
        priority: priority,
        desc: desc
    };

    // Aufgabe zur Liste hinzufügen
    tasks.push(task);

    // Formular zurücksetzen und verstecken
    document.getElementById('taskName').value = '';      // Leert das Namensfeld
    document.getElementById('taskDate').value = '';      // Leert das Datumsfeld
    document.getElementById('taskPriority').value = 'low'; // Setzt die Priorität auf 'low'
    document.getElementById('newTaskWd').style.display = 'none'; // Versteckt das Formular
});

// Funktion zum Löschen einer Aufgabe
function deleteTask(taskIndex) {
    tasks.splice(taskIndex, 1); // Entfernt die Aufgabe aus dem Array
    displayTasks(); // Zeigt die aktualisierte Liste an
}
// Aufgabe als erledigt markieren
function markAsDone(taskIndex) {
    tasks[taskIndex].done = !tasks[taskIndex].done; // Wechselt den Status "done"
    displayTasks(); // Zeigt die aktualisierte Liste an
}
// Neue Aufgabe zur Liste hinzufügen
function displayTasks(filteredTasks = tasks) {
    taskList.innerHTML = ''; // Löscht die Liste, bevor neue Aufgaben angezeigt werden
    filteredTasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.innerHTML = `
            <strong style="text-decoration: ${task.done ? 'line-through' : 'none'}">${task.name}</strong> - ${task.date} (${task.priority})
            <button onclick="markAsDone(${index})">${task.done ? 'Wiederholen' : 'Erledigt'}</button>
            <button onclick="deleteTask(${index})">Löschen</button>
        `;
        taskList.appendChild(taskItem);
    });
}

// Aufgaben nach Priorität sortieren
function sortByPriority() {
    tasks.sort((a, b) => {
        const priorityOrder = { 'low': 1, 'medium': 2, 'high': 3 };
        return priorityOrder[b.priority] - priorityOrder[a.priority]; // Sortiert absteigend
    });
    displayTasks(); // Zeigt die sortierten Aufgaben an
}

// Aufgaben nach Datum sortieren
function sortByDate() {
    tasks.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sortiert nach Datum (neueste zuerst)
    displayTasks(); // Zeigt die sortierten Aufgaben an
}

// Suchleiste filtern
document.getElementById('searchBtn').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase(); // Kleinbuchstaben für die Suche
    const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(searchTerm)); // Filtert Aufgaben
    displayTasks(filteredTasks); // Zeigt gefilterte Aufgaben an
});
