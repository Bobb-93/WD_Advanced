function addTask(){
    const taskTitle = document.getElementById("taskTitle").value;
    const taskDetails = document.getElementById("taskDetails").value;
    const taskDate = document.getElementById("taskDate").value;
    const taskTime = document.getElementById("taskTime").value;
    const noTasks = document.getElementById("noTasks");
    const tasksTable = document.getElementById("noTasks");
    if(taskTitle !== ``){
        console.log(`taskTitle = ${taskTitle}`);
        console.log(`taskDetails = ${taskDetails}`);
        console.log(`taskDate = ${taskDate}`);
        console.log(`taskTime = ${taskTime}`);
        
        noTasks.style.display = "none";
        console.log(5);
        tasksTable.style.display = "block";
    }
    
}
        
const submitButton = document.getElementById("submitButton");
const markAllAsCompleted = document.getElementById("markAllAsCompleted");
const deleteAllCompleted = document.getElementById("deleteAllCompleted");
const deleteAllTasks = document.getElementById("deleteAllTasks");


submitButton.addEventListener("click", addTask);
markAllAsCompleted.addEventListener("click", markAllAsCompleted);
deleteAllCompleted.addEventListener("click", deleteAllCompleted);
deleteAllTasks.addEventListener("click", deleteAllTasks);