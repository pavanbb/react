import React, { useState } from 'react';

function TodoForm({addTodo}){
const[input, setInput]= useState('');

const handleChange = (e) =>{
    setInput(e.target.value);
};
const handleSubmit = (e) => {
    e.preventDefault();

    if(!input)return;
    addTodo({
        id:Math.floor(Math.random()*1000),
        text: input,
        isComplete:false
    });
    setInput('');;
};
return (
    <form onSubmit={handleSubmit}>
        <input type = "text" placeholder='Add a to-do'
        value={input}
        onChange={handleChange}></input>
        <button type='submit'>Add</button>
    </form>
);
}
export default TodoForm;