// Declaration Variables
var inputTask = document.querySelector('.input-task');
var inputAddTask = document.querySelector('.add-input');
var tasksList = document.querySelector('.tasks-list');
var tasksCount = document.querySelector('.count-tasks span');
var tasksCompleted = document.querySelector('.completed-tasks span');

// On button Click 'Add Tasks'
inputAddTask.onclick = function() {
    if(inputTask.value == '') {
        alert("This task is null, you should entered Understandable task"); //alert message if the value that entered in field is null
    }
    else {
        //No Task Message
        var noTaskMessage = document.querySelector('.no-task-message');
        if(document.body.contains(document.querySelector('.no-task-message'))){
        // Remove No Task Message
        noTaskMessage.remove();
        }

        // Create Task Box and append it to Tasks List
        var taskBox = document.createElement('div');
        taskBox.className= 'task-box'; 
        tasksList.appendChild(taskBox); 

        // Create Task Name and append it to Task Box
        var taskNameSpan = document.createElement('span');
        taskNameSpan.className= 'task-name';
        var taskValue = document.createTextNode(inputTask.value);
        taskNameSpan.appendChild(taskValue);
        taskBox.appendChild(taskNameSpan);

        // Create button "delete" and append to task box
        var taskDeleteBtn = document.createElement('button');
        taskDeleteBtn.className= 'task-action';
        var taskActionDelete = document.createTextNode('Delete');
        taskDeleteBtn.appendChild(taskActionDelete);
        taskBox.appendChild(taskDeleteBtn);

        inputTask.value = '';

        //Calculate Tasks
        calculateTasks();
    }
}
// Delete Task & Finished Task
document.addEventListener("click" , function(e){
     // Remove Task 'Delete'
    if (e.target.className == "task-action"){
        alert("Are you sure that you want to delte this task?!");
        e.target.parentNode.remove();
        if(tasksList.childElementCount == 0) {
            createNoTasks();
        }
    }
    // Finished Task
    if (e.target.classList.contains("task-name")){
            e.target.classList.toggle('finished');
        }
    
        //Calculate Tasks
        calculateTasks();
});
// Function Create No Tasks
function createNoTasks() {
    var msgSpan = document.createElement('span');
    msgSpan.className= 'no-task-message';
    var msgText = document.createTextNode('There are no added tasks');
    msgSpan.appendChild(msgText);
    tasksList.appendChild(msgSpan);
}
// Function Calculate Tasks
function calculateTasks() {
    //Calculate All Tasks
    tasksCount.innerHTML = document.querySelectorAll ('.tasks-list .task-name').length;

    //Calculate Completed Tasks
    tasksCompleted.innerHTML = document.querySelectorAll ('.task-name.finished').length;
}