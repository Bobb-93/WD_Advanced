// const renderTodos = function(data) {
//     console.dir(data);

    // let todos = JSON.parse(data);

    // console.log(`todos = ${todos}`);
    // console.dir(todos);
const renderTodos = function(todos){

    console.log(`type of todos = ${typeof todos}`);

    //защо в todos нямаме масив от обекти

	// clean current todos:
	nodes.todoItems.innerHTML = '';

	// add todo item at the end
	todos.forEach( todo => {
		nodes.todoItems.innerHTML += `
		<li data-id=${todo.id} >
			<span class="todoID">${todo.id}.</span>
			<span class="${todo.completed?'completed':''}">${todo.title}</span>
			<div class="removeTodo"><i class="far fa-trash-alt"></i></div>
		</li>
		`;
	})

	// displayTodoItemsCount();
    // todos = [...todos, {"id": 4, "title": "Sleep"}];
    // console.log(todos);
    // console.log(JSON.stringify(todos));

};

apiURL = "../back-end/data/todos.json";

const getTodos = function(url){
    fetch(url)
        .then(response => response.json())//response.text() - като низче
        // .then(data => console.log(data));
        .then(data => {
            // todos = data;
            renderTodos(data);
        })
};

// let todos = getTodos(apiURL);
// let todos = [];

// The data. In real app, the data come from a server
// let todos = [
// 	{
// 		"id": 1,
// 		"title": "LEARN HTML",
// 		"completed":true
// 	},
// 	{
// 		"id": 2,
// 		"title": "Learn CSS",
// 		"completed":false
// 	}
// ];

// DOM cache:
const nodes = {
	'todoItems': document.querySelector('ul.todo-items'),
	'addTodoInput': document.querySelector('.todo-add>input'),
	'addTodoBtn': document.querySelector('.todo-add>.todo-add-btn'),
	'totalItemsCount': document.querySelector('.todo-app .todos-total>.output')
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// attach events
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener('DOMContentLoaded', function(e){
    getTodos(apiURL)
});