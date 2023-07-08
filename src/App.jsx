import React, { useState } from 'react';
import './App.css';
import Header from './component/Header';
import Form from './component/Form';
import TodosList from './component/TodosList';

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    {
      text: "call dad",
      status: "uncompleat"
    },
    {
      text: "go to ade's party",
      status: "uncompleat"
    },
  ])

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleAddTodo = () => {
    const newTodo = {
      text: input,
      status: "uncompleat"
    }
    const newTodos = [...todos, newTodo]

    setTodos(newTodos)
    setInput("")
  }
  
  return (
    <div className='container'>
      <div>
      <input type="text" value={input} onChange={handleChange}/>
      <button onClick={handleAddTodo}>Add</button>
      <div>
        {todos.map((todo) => (
          <div>{todo.text}</div>
        )
        )}
      </div>
      </div>
    </div>
  
  );
}

export default App;