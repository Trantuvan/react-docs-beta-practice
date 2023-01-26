import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  const handleAddToDo = (title) => {
    setTodos([...todos, { id: nextId++, title: title, done: false }]);
  };

  const handleChangeTodo = (nextTodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <AddTodo onAddTodo={handleAddToDo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default TaskApp;
