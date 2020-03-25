// ui variables
const form = document.querySelector('.task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// event listener load
loadEventListeners();

function loadEventListeners() {
    // task add
    form.addEventListener('submit', addTask);
}

// add task function
function addTask(e) {
    if (taskInput === '') {
        alert('Add a task')
    }

    // li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-items';
    // text inside li
    li.appendChild(document.createTextNode(taskInput.value));
    // link element
    const link = document.createElement('a');
    link.className = 'delete-item';
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    li.appendChild(link);
    
    // append li to ul
    tasklist.appendChild(li);

    // clear input
    taskInput.value = '';

    e.preventDefault();
}






