import React from 'react';

function TodoList({ todos, completeTodo, removeTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} style={{ textDecoration: todo.isComplete ? 'line-through' : '' }}>
          {todo.text}
          <button onClick={() => completeTodo(todo.id)}>Complete</button>
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
