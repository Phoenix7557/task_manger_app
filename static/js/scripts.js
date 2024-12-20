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

    if (!name || !date || !priority) {
        alert('Bitte alle Felder ausfüllen!');
        return;
    }

    // Neue Aufgabe als Objekt speichern
    const task = {
        name: name,
        date: date,
        priority: priority
    };

    // Aufgabe zur Liste hinzufügen
    tasks.push(task);

    // Aufgabe zur HTML-Liste hinzufügen
    const taskItem = document.createElement('div');
    taskItem.innerHTML = `<strong>${name}</strong> - ${date} (${priority})`;
    taskList.appendChild(taskItem);

    // Formular zurücksetzen und verstecken
    document.getElementById('taskName').value = '';      // Leert das Namensfeld
    document.getElementById('taskDate').value = '';      // Leert das Datumsfeld
    document.getElementById('taskPriority').value = 'low'; // Setzt die Priorität auf 'low'
    document.getElementById('newTaskWd').style.display = 'none'; // Versteckt das Formular
});

// Optional: Alle Aufgaben in der Konsole anzeigen
console.log(tasks);
