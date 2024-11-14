import React, {useState} from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import './styles.css';
 

function App() {

  const [todos, setTodos ] = useState([]);

  const addTodo = (todo) => {
setTodos([...todos, todo]);
  };

  const completeTodo = (id) => {
setTodos(todos.map((todo)=> todo.id === id?{...todo, isComplete:!todo.isComplete}:todo));
  };

  const removeTodo = (id)=>{
    setTodos(todos.filter((todo)=> todo.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} completeTodo = {completeTodo} removeTodo={removeTodo}/>
    </div>
         );
}

export default App;
