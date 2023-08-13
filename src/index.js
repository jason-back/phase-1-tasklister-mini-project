document.addEventListener("DOMContentLoaded", () => {
    const taskButton = document.querySelector(
        "div#main-content input[value= 'Create New Task"
    );
    const textInput = document.querySelector("#new-task-description");

    taskButton.addEventListener("click", taskButtonClick);
    function taskButtonClick(event) {
        event.preventDefault();
        const todoItem = createTodoItem(textInput.value);
        const myTodos = document.querySelector("ul#tasks");
        myTodos.append(todoItem);
    }
    function createTodoItem(text) {
        const li = document.createElement("li");
        li.innerHTML = text;
        return li;
    }
});
