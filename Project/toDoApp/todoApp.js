const todoAddBtn = document.querySelector(".todo-add-btn");
const addNewToDo = document.querySelector("[placeholder='add new todo ...']");
const todoItems = document.querySelector(".todo-items");
const output = document.querySelector(".output");
// const removeTodo = document.querySelectorAll(".removeTodo");
const faTrashAlt = document.querySelectorAll(".fa-trash-alt");

let todoItemsArray = [];
let todo = {};
let todosCount = 1;

todoAddBtn.addEventListener("click", function(){
    console.log(addNewToDo.value);
    let todoItem = addNewToDo.value

    todo.id = todosCount;
    todo.title = todoItem;
    todoItemsArray.push(todo);

    var li = document.createElement("li");
    li.innerHTML = `<span>${todosCount}.</span>
    <span>${todoItem}</span>
    <div class="removeTodo"><i class="far fa-trash-alt"></i></div>`;
    li.dataset.id = todosCount;
    todoItems.appendChild(li);
    faTrashAlt.forEach(function(e){
        
    });
    output.innerText = todosCount;
    todosCount += 1;

    console.dir(faTrashAlt);

});

faTrashAlt.forEach(
    (trashAlt) => {
        trashAlt.addEventListener("click", function(){
            console.log(1);
            // todoItemsArray[1];
        });
    }
);