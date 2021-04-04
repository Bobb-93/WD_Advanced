const todoAddBtn = document.querySelector(".todo-add-btn");
const addNewToDo = document.querySelector("[placeholder='add new todo ...']");
const todoItems = document.querySelector(".todo-items");
const output = document.querySelector(".output");
// const removeTodo = document.querySelectorAll(".removeTodo");
let faTrashAlt = document.querySelectorAll(".fa-trash-alt");

// let todoItemsArray = [];
// let todo = {};
let todosCount = 0;
let totalTodos = 0;

deleteNodes();

todoAddBtn.addEventListener("click", function(){
    console.log(addNewToDo.value);
    let todoItem = addNewToDo.value

    // todo.id = todosCount;
    // todo.title = todoItem;
    // todoItemsArray.push(todo);

    var li = document.createElement("li");
    todosCount += 1;
    totalTodos += 1;
    li.innerHTML = `<span>${totalTodos}.</span>
    <span>${todoItem}</span>
    <div class="removeTodo"><i class="far fa-trash-alt"></i></div>`;
    li.dataset.id = totalTodos;
    todoItems.appendChild(li);

    //!!!
    //add all trash icons to faTrashAlt
    faTrashAlt = document.querySelectorAll(".fa-trash-alt");

    output.innerText = todosCount;
    
    addNewToDo.value = "";
    addNewToDo.focus();

    console.dir(faTrashAlt);
    deleteNodes();

});

// function deleteNodes(){
//     let listItems = document.getElementsByTagName("li"); 
//     for (var i = 0; i < listItems.length; i++) {
//      listItems[i].onclick = function() {
//     this.parentNode.removeChild(this);
//     }
// }

function deleteNodes(){
    console.log(111);
    faTrashAlt.forEach(
        function(trashAlt, index){
            trashAlt.addEventListener("click", function(){
                // console.log(trashAlt);
    
                //1-st attempt - NOT WORKING
                // let liToBeDeleted = document.querySelector(`li[data-id="${index}"]`);
    
                //2-nd attempt - NOT WORKING
                // let liToBeDeleted = document.createElement(`li`);
                // liToBeDeleted.dataset.id = index+1;
    
                // liToBeDeleted.innerHTML = `<span>${index+1}.</span><span>${todoItemsArray[index].title}</span><div class="removeTodo"><i class="far fa-trash-alt"></i></div>`;
    
                // console.dir(liToBeDeleted);
                // console.dir(todoItems);
                // todoItems.removeChild(liToBeDeleted.);

                //2-nd attempt, but slightly different - NOT WORKING
                // console.log(liToBeDeleted.parentNode);
                // liToBeDeleted.parentNode.removeChild(liToBeDeleted);

                console.log(index);
                //3-rd attempt - the right items are removed, but I get errors
                let liToBeDeleted = document.querySelector(`.todo-items>li[data-id='${index+1}']`);
                
                todoItems.removeChild(liToBeDeleted);
                
                todosCount -= 1;
                output.innerText = todosCount;
                // console.log(todoItemsArray);
                // todoItemsArray.splice(index, 1);
                // console.log(todoItemsArray);
                console.log('end of function');
                
            });
        }
    );
    
}
