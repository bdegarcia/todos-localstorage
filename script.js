var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos() {
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;

    for (var i = 0; i < todos.length; i++){
        var li = document.createElement("li")
        li.innerText = todos[i];
        todoList.appendChild(li);
    }
}

renderTodos()

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var newTodoText = todoInput.value
    if(newTodoText === ""){
        return;
    }
    
    todos.push(newTodoText)

    todoInput.value = "";

    renderTodos()
});