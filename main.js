let todoList = [];

function addTodo() {
  const todoInput = document.getElementById('add-todo').value;
  const dueDate = document.getElementById('dueDate').value;

  const pair = { todoInput, dueDate };

  if (todoInput.trim() !== '' && dueDate.trim() !== '') {
    todoList.push(pair);
    displayTodoList();
    document.getElementById('add-todo').value = '';
    document.getElementById('dueDate').value = '';
  }
}

function removeTodo(index) {
  todoList.splice(index, 1);
  displayTodoList();
}

function displayTodoList() {
  let todoContainer = document.getElementById('todos-container');
  todoContainer.innerHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    let todoItem = document.createElement('div');
    todoItem.textContent = `${todoList[i].todoInput}, Due Date: ${todoList[i].dueDate}`;

    // Add a remove button to each ToDo item
    let removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.addEventListener(
      'click',
      (function (index) {
        return function () {
          removeTodo(index);
        };
      })(i)
    );

    // Append the ToDo item and remove button to the container
    todoItem.appendChild(removeButton);
    todoContainer.appendChild(todoItem);
  }
}

document.getElementById('submit').addEventListener('click', addTodo);
