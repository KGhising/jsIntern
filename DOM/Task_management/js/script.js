// ui variables
const form = document.querySelector('.task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// event listener load
loadEventListeners();

function loadEventListeners() {
    // DOM load events
    document.addEventListener('DOMContentLoaded', getTasks);
    // task add
    form.addEventListener('submit', addTask);
    // remove task
    tasklist.addEventListener('click', removeTask);
    // clear all task
    clearBtn.addEventListener('click', clearTask);
    // task filter
    filter.addEventListener('keyup', filterTask);
}

// get tasks from local storage
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') == null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
         // li element
        const li = document.createElement('li');
        // add class
        li.className = 'collection-items';
        // text inside li
        li.appendChild(document.createTextNode(task));
        // link element
        const link = document.createElement('a');
        link.className = 'delete-item';
        link.innerHTML = '<i class = "fa fa-remove"></i>';
        li.appendChild(link);
        // append li to ul
        tasklist.appendChild(li); 
    });
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
    // store in local storage
    storeTaskInLocalStorage(taskInput.value);
    // clear input
    taskInput.value = '';

    e.preventDefault();
}

// Store task in local storage
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } 
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// remove task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        if (confirm('are you sure?')) {
            e.target.parentElement.parentElement.remove();

            // remove from localStorage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}
// Remove task from local storage
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } 
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });
    
    localStorage.setItem('tasks', JSON.stringify(tasks));

}
//  Clear all task
function clearTask(){
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }
    // clear all task from local storage
    clearTaskFromLocalStorage();
}

// Clear task from localStorage function
function clearTaskFromLocalStorage(){
    localStorage.clear();
}
// task filter
function filterTask(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-items').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }
        else{
            task.style.display = 'none';
        }
    });
}

