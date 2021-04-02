const submitButton = document.getElementById("submitButton");
const markAllAsCompleted = document.getElementById("markAllAsCompleted");
const deleteAllCompleted = document.getElementById("deleteAllCompleted");
const deleteAllTasks = document.getElementById("deleteAllTasks");
const tasksTable = document.getElementById("tasksTable");
const myTasks = document.getElementById("myTasks");



function addTask(){
    let taskTitle = document.getElementById("taskTitle").value;
    let taskDetails = document.getElementById("taskDetails").value;
    let taskDate = document.getElementById("taskDate").value;
    let taskTime = document.getElementById("taskTime").value;
    
    if(taskTitle !== ``){
        console.log(`taskTitle = ${taskTitle}`);
        console.log(`taskDetails = ${taskDetails}`);
        console.log(`taskDate = ${taskDate}`);
        console.log(`taskTime = ${taskTime}`);
        
        myTasks.style.display = "block";
        console.log(5);
        // tasksTable.style.display = "block";
    }
    
}

taskDate.valueAsDate = new Date();

var timepicker = new TimePicker('taskTime', {
    lang: 'en',
    theme: 'dark'
});

timepicker.on('change', function(evt) {
    
    var value = (evt.hour || '00') + ':' + (evt.minute || '00');
    evt.element.value = value;
    
});

submitButton.addEventListener("click", addTask);
markAllAsCompleted.addEventListener("click", markAllAsCompleted);
deleteAllCompleted.addEventListener("click", deleteAllCompleted);
deleteAllTasks.addEventListener("click", deleteAllTasks);