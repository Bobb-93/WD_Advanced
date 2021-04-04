const todoAddBtn = document.querySelector(".todo-add-btn");
const addNewToDo = document.querySelector("[placeholder='add new todo ...']");
const todoItems = document.querySelector(".todo-items");
const output = document.querySelector(".output");
// const removeTodo = document.querySelectorAll(".removeTodo");
let faTrashAlt = document.querySelectorAll(".fa-trash-alt");

let todoItemsArray = [];
let todo = {};
let todosCount = 1;

deleteNodes();

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

    //!!!
    //add all trash icons to faTrashAlt
    faTrashAlt = document.querySelectorAll(".fa-trash-alt");

    output.innerText = todosCount;
    todosCount += 1;

    console.dir(faTrashAlt);

    deleteNodes();
});

function deleteNodes(){
    console.log(111);
    faTrashAlt.forEach(
        function(trashAlt, index){
            trashAlt.addEventListener("click", function(){
                // let parameter = index;
                // console.log(index);
                console.log(trashAlt);
    
                // let liToBeDeleted = document.querySelector(`li[data-id="${index}"]`);
    
                let liToBeDeleted = document.createElement(`li`);
                liToBeDeleted.dataset.id = index+1;
    
                liToBeDeleted.innerHTML = `<span>${index+1}.</span><span>${todoItemsArray[index].title}</span><div class="removeTodo"><i class="far fa-trash-alt"></i></div>`;
    
                console.log(`liToBeDeleted = ${liToBeDeleted}`);
                console.log(liToBeDeleted.parentNode);
                liToBeDeleted.parentNode.removeChild(liToBeDeleted);
            });
        }
    );
    
}

