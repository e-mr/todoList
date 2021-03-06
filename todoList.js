var todos = ['item 1', 'item 2', 'item 3'];

// It should have a function to display todos.
function displayTodos() {
  console.log('My todos:', todos);
}

// It should have a function to add todos.
function addTodo(todo) {  // addTodo('new todo') and the 'new todo' would be pushed to the todo array.
  todos.push(todo);
  displayTodos();
}

// It should have a function to change todos.
function changeTodos(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

// It should have a function to delete todos.
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
