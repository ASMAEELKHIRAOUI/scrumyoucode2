/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

// console.log()

document.getElementById('form').reset();
var todo = document.getElementById("to-do-tasks");
var inProgress = document.getElementById("in-progress-tasks");
var done = document.getElementById("done-tasks");

let index;

let NbrTodo = document.getElementById("to-do-tasks-count");
let NbrIP = document.getElementById("in-progress-tasks-count");
let NbrDone = document.getElementById("done-tasks-count");
displayTask();
saveTask();

function displayTask() {
    let num = 1;
    let ctd = 1, cip = 1, cd = 1;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].status == "To Do") {
            NbrTodo.innerHTML = ctd;
            todo.innerHTML +=
                `<button class="task d-flex p-2 border-0 border-top">
                    <div class="col-1">
                        <i class="fa-regular fa-circle-question text-success ms-2 mt-2 fs-4"></i>
                    </div>
                    <div class="text-start ms-2 mt-1 col-11 px-2">
                        <div class="fw-bold text-dark">${tasks[i].title}</div>
                        <div class="">
                            <div class="text-secondary">#${num} created in ${tasks[i].date}</div>
                            <div title="${tasks[i].description}">${tasks[i].description.slice(0, 50)}...</div>
                        </div>
                        <div class="d-flex justify-content-between">
                                <span class="btn btn-primary btn-sm">${tasks[i].priority}</span>
                                <span class="btn bg-light-600 btn-sm">${tasks[i].type}</span>
                        </div>
                    </div>
                </button>`
            num++;
            ctd++;
        }
        else if (tasks[i].status == "In Progress") {
            NbrIP.innerHTML = + cip;
            inProgress.innerHTML +=
                `<button class="task d-flex p-2 border-0 border-top">
                    <div class="col-1">
                        <i class="fa fa-circle-notch fa-rotate-90 text-success ms-2 mt-2 fs-4"></i>
                    </div>
                    <div class="text-start ms-2 mt-1 col-11 px-2">
                        <div class="fw-bold text-dark">${tasks[i].title}</div>
                        <div class="">
                            <div class="text-secondary">#${num} created in ${tasks[i].date}</div>
                            <div title="${tasks[i].description}">${tasks[i].description.slice(0, 50)}...</div>
                        </div>
                        <div class="d-flex justify-content-between">
                                <span class="btn btn-primary btn-sm">${tasks[i].priority}</span>
                                <span class="btn bg-light-600 btn-sm">${tasks[i].type}</span>
                        </div>
                    </div>
                </button>`
            num++;
            cip++;
        }
        else if (tasks[i].status == "Done") {
            NbrDone.innerHTML = + cd;
            done.innerHTML +=
                `<button class="task d-flex p-2 border-0 border-top">
                    <div class="col-1">
                        <i class="fa-regular fa-circle-check text-success ms-2 mt-2 fs-4"></i>
                    </div>
                    <div class="text-start ms-2 mt-1 col-11 px-2">
                        <div class="fw-bold text-dark">${tasks[i].title}</div>
                        <div class="">
                            <div class="text-secondary">#${num} created in ${tasks[i].date}</div>
                            <div title="${tasks[i].description}">${tasks[i].description.slice(0, 50)}...</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span class="btn btn-primary btn-sm">${tasks[i].priority}</span>
                            <span class="btn bg-light-600 btn-sm">${tasks[i].type}</span>
                        </div>
                    </div>
                </button>`
            num++;
            cd++;
        }
    }
}

// initialiser task form

// Afficher le boutton save

// Ouvrir modal form

function clearTasks() {
    let tasks = document.querySelectorAll('.task');
    for (i of tasks) {
        i.remove();
    }
}
num=index;
console.log(index);
let data = {};
function createTask() {
            let title = document.getElementById("title");
            let priority = document.getElementById("priority");
            let status = document.getElementById("status");
            let date = document.getElementById("date");
            let description = document.getElementById("description");
            let feature = document.getElementById("Feature");
            let bug = document.getElementById("Bug");
            var type;

            if (feature.checked)
                type = feature.id;
            else
                type = bug.id;

            let task = {
                'title': title.value,
                'type': type,
                'priority': priority.value,
                'status': status.value,
                'date': date.value,
                'description': description.value,
            }
            console.log(task);
            tasks.push(task);
        }
// Recuperer task attributes a partir les champs input

    // Créez task object   

    // Ajoutez object au Array

    // refresh tasks

function saveTask() {
    let form = document.getElementById("BtnSave").addEventListener("click", h);
    function h() {
        console.log("btnclicked");
        formValidation();
    }
    let title = document.getElementById("title");
    let buttonCancel = document.getElementById("cancel");

    let formValidation = () => {
        if (title.value === "") {
            let msg = document.getElementById("msg");
            msg.innerHTML = "Title can not be blank !";
            console.log("failed");
        }
        else {
            console.log("success");
            msg.innerHTML = "";
            createTask();
            clearTasks();
            document.getElementById('form').reset();
            buttonCancel.click();
            displayTask();
        }
    }
}
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
function editTask(index) {
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks

}
// Get index of task in the array
    
    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
// function deleteTask(index) {
//     let delete = document.getElementById("delete").addEventListener("click", d);
//     function d() {
//         console.log("btnclicked");
//         index.parentElement.parentElement.remove();
//     } 
// }

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}