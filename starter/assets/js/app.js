/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

var todo = document.getElementById("to-do-tasks");
var inProgress = document.getElementById("in-progress-tasks");
var done = document.getElementById("done-tasks");

let NbrTodo = document.getElementById("to-do-tasks-count");
let NbrIP = document.getElementById("in-progress-tasks-count");
let NbrDone = document.getElementById("done-tasks-count");
displayTask();

function displayTask() {
    let countTasks = 1;
    let countToDo = 0, countInProgress = 0, countDone = 0;
    for (let i = 0; i <= tasks.length; i++) {
        if (tasks[i].status == "To Do") {
            countToDo++;
            NbrTodo.innerHTML = countToDo;
            todo.innerHTML +=
                `<button data-bs-toggle="modal" data-bs-target="#modal" class="task d-flex p-2 border-0 border-top" onclick="editTask(${countTasks - 1})">
                    <div class="col-1">
                        <i class="fa-regular fa-circle-question text-success ms-2 mt-2 fs-4"></i>
                    </div>
                    <div class="text-start ms-2 mt-1 col-11 px-2">
                        <div class="fw-bold text-dark">${tasks[i].title}</div>
                        <div class="">
                            <div class="text-secondary">#${countTasks} created in ${tasks[i].date}</div>
                            <div title="${tasks[i].description}">${tasks[i].description.slice(0, 50)}...</div>
                        </div>
                        <div class="d-flex">
                            <span class="btn btn-primary btn-sm">${tasks[i].priority}</span>
                            <span class="btn bg-light-600 btn-sm">${tasks[i].type}</span>
                        </div>
                    </div>
                </button>`
            countTasks++;

        }
        else if (tasks[i].status == "In Progress") {
            countInProgress++;
            NbrIP.innerHTML = countInProgress;
            inProgress.innerHTML +=
                `<button data-bs-toggle="modal" data-bs-target="#modal" class="task d-flex p-2 border-0 border-top" onclick="editTask(${countTasks - 1})">
                    <div class="col-1">
                        <i class="fa fa-circle-notch fa-rotate-90 text-success ms-2 mt-2 fs-4"></i>
                    </div>
                    <div class="text-start ms-2 mt-1 col-11 px-2">
                        <div class="fw-bold text-dark">${tasks[i].title}</div>
                        <div class="">
                            <div class="text-secondary">#${countTasks} created in ${tasks[i].date}</div>
                            <div title="${tasks[i].description}">${tasks[i].description.slice(0, 50)}...</div>
                        </div>
                        <div class="d-flex">
                            <span class="btn btn-primary btn-sm">${tasks[i].priority}</span>
                            <span class="btn bg-light-600 btn-sm">${tasks[i].type}</span>
                        </div>
                    </div>
                </button>`
            countTasks++;

        }
        else if (tasks[i].status == "Done") {
            countDone++;
            NbrDone.innerHTML = countDone;
            done.innerHTML +=
                `<button data-bs-toggle="modal" data-bs-target="#modal" class="task d-flex p-2 border-0 border-top" onclick="editTask(${countTasks - 1})">
                    <div class="col-1">
                        <i class="fa-regular fa-circle-check text-success ms-2 mt-2 fs-4"></i>
                    </div>
                    <div class="text-start ms-2 mt-1 col-11 px-2">
                        <div class="fw-bold text-dark">${tasks[i].title}</div>
                        <div class="">
                            <div class="text-secondary">#${countTasks} created in ${tasks[i].date}</div>
                            <div title="${tasks[i].description}">${tasks[i].description.slice(0, 50)}...</div>
                        </div>
                        <div class="d-flex">
                            <span class="btn btn-primary btn-sm">${tasks[i].priority}</span>
                            <span class="btn bg-light-600 btn-sm">${tasks[i].type}</span>
                        </div>
                    </div>
                </button>`
            countTasks++;

        }

    }
    // if(countToDo==1)
}

// clear the previous tasks to prevent duplicated text
function clearTasks() {
    let tasks = document.querySelectorAll('.task');
    for (i of tasks) {
        i.remove();
    }
}

let feature = document.getElementById("Feature");
let bug = document.getElementById("Bug");
var type; //to determine if the type is a feature or a bug

function createTask() {
    let title = document.getElementById("title");
    let priority = document.getElementById("priority");
    let status = document.getElementById("Status");
    let date = document.getElementById("date");
    let description = document.getElementById("description");

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
    tasks.push(task);
}

let buttonCancel = document.getElementById("cancel");
function saveTask() {
    let form = document.getElementById("save").addEventListener("click", getFormValidation);
    document.getElementById("save").style.display = 'block';
    document.getElementById("update").style.display = 'none';
    document.getElementById("delete").style.display = 'none';
    function getFormValidation() {
        console.log("btnclicked");
        formValidation();
    }
    let title = document.getElementById("title");

    // to check if the title is empty
    let formValidation = () => {
        if (title.value === "") {
            let msg = document.getElementById("msg");
            msg.innerHTML = "Title can not be blank !"; //error message
            console.log("failed");
        }
        else {
            console.log("success");
            msg.innerHTML = ""; //remove the error message
            createTask();
            clearTasks();
            buttonCancel.click();
            displayTask();
        }
    }
}

let x;
function editTask(index) {
    x = index;
    title.value = tasks[index].title;
    priority.value = tasks[index].priority;
    description.value = tasks[index].description;
    date.value = tasks[index].date;
    Status.value = tasks[index].status;

    if (tasks[index].type == "Bug")
        bug.checked = true;
    else
        feature.checked = true;
    updateTask();
}

function updateTask() {
    let newtype;
    if (feature.checked)
        newtype = feature.id;
    else
        newtype = bug.id;

    let data = {
        'title': title.value,
        'type': newtype,
        'priority': priority.value,
        'status': Status.value,
        'date': date.value,
        'description': description.value,
    }

    tasks[x] = data;
    buttonCancel.click();
    clearTasks();
    saveTask();
    displayTask();
    document.getElementById("save").style.display = 'none';
    document.getElementById("update").style.display = 'block';
    document.getElementById("delete").style.display = 'block';
}

function deleteTask() {
    if (confirm("Do you really want to delete this task ?"))
        tasks.splice(x, 1);
    buttonCancel.click();
    clearTasks();
    displayTask();
}