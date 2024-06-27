// //Creiamo una to do list con questi requisiti:

// All'avvio l'applicazione deve presentare un tag input per poter inserire il nome del nuovo task

// Un bottone a fianco del tag input aggiungerà il testo inserito alla lista dei task sottostante

// Ogni task nella lista deve poter reagire al click del mouse, che lo segnerà come "completato" (un task
// completato si differenzia per il testo attraversato da una linea orizzontale)

// Ogni task nella lista deve poter essere eliminato individualmente tramite un bottone dedicato

// Quando l'utente clicca sul bottone di reset, la lista dovrebbe essere svuotata

const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('btnSubmit');
const resetBtn = document.getElementById('btnReset');
const taskForm = document.getElementById('add-task');
const listItems = [];

window.addEventListener('load', init);

function init() {
    addTaskBtn.addEventListener('click', addTask);
    resetBtn.addEventListener('click', resetList);
}

function addTask(e) {
    e.preventDefault();
	if (!checkInput()) return;
	popolateArray();
	printList();
	taskForm.reset();
}

function checkInput() {
    if (newTaskInput.value === '') {
        alert('Inserisci una task');
        return false;
    }
    return true;
}

function popolateArray() {
    listItems.push(newTaskInput.value);
    console.log(listItems);
}

function printList() {
    taskList.innerHTML = '';
    for (let i = 0; i < listItems.length; i++) {
        const container = document.createElement('div');
        container.id = 'to-do-list-item';

        const task = document.createElement('div');
        task.classList.add('task');
        task.innerHTML = `<p>${listItems[i]}</p>`;

        task.onclick = function() {
            task.classList.toggle('completed');
        };

        const trashContainer = document.createElement('div');
        trashContainer.classList.add('trash-container');

        const trashBtn = document.createElement('button');
        trashBtn.classList.add('delete-task-btn');

        const trashIcon = document.createElement('i');
        trashIcon.classList.add('fa', 'fa-solid', 'fa-trash-can');

        trashBtn.appendChild(trashIcon);
        trashBtn.onclick = function() {
            removeTask(i);
        };

        trashContainer.appendChild(trashBtn);

        container.appendChild(task);
        container.appendChild(trashContainer);

        taskList.appendChild(container);
    }
}

function removeTask(index) {
    listItems.splice(index, 1);
    taskList.innerHTML = '';
    printList();
}

function resetList() {
    taskList.innerHTML = '';
    listItems.splice(0, listItems.length);
}
