function addTask(){
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

const submitButton = document.getElementById("submitButton");
const markAllAsCompleted = document.getElementById("markAllAsCompleted");
const deleteAllCompleted = document.getElementById("deleteAllCompleted");
const deleteAllTasks = document.getElementById("deleteAllTasks");
const taskTitle = document.getElementById("taskTitle").value;
const taskDetails = document.getElementById("taskDetails").value;
const taskDate = document.getElementById("taskDate").value;
const taskTime = document.getElementById("taskTime").value;
const tasksTable = document.getElementById("tasksTable");
const myTasks = document.getElementById("myTasks");

submitButton.addEventListener("click", addTask);
markAllAsCompleted.addEventListener("click", markAllAsCompleted);
deleteAllCompleted.addEventListener("click", deleteAllCompleted);
deleteAllTasks.addEventListener("click", deleteAllTasks);