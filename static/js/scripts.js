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

    // Aufgabe zur HTML-Liste hinzufügen
    displayTasks();

    // Formular zurücksetzen und verstecken
    document.getElementById('taskName').value = '';      // Leert das Namensfeld
    document.getElementById('taskDate').value = '';      // Leert das Datumsfeld
    document.getElementById('taskPriority').value = 'low'; // Setzt die Priorität auf 'low'
    document.getElementById('newTaskWd').style.display = 'none'; // Versteckt das Formular
});

// Aufgaben anzeigen
function displayTasks(filteredTasks = tasks) {
    taskList.innerHTML = ''; // Löscht die Liste, bevor neue Aufgaben angezeigt werden
    filteredTasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.innerHTML = `<strong>${task.name}</strong> - ${task.date} (${task.priority}) (${task.desc})`;
        taskList.appendChild(taskItem);
    });
}

// Suchleiste filtern
document.getElementById('searchBtn').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase(); // Kleinbuchstaben für die Suche
    const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(searchTerm)); // Filtert Aufgaben
    displayTasks(filteredTasks); // Zeigt gefilterte Aufgaben an
});
