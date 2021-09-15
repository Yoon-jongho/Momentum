const toDoForm = document.getElementById("todoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

const toDos = [];

const saveToDos = () => { 
   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


const deleteTodo = (e) => {
    const li = e.target.parentElement;
    li.remove();
}

const paintToDo = (newTodo) => {
    const li = document.createElement("li");
    const span =document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "×";
    button.addEventListener("click", deleteTodo )
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}