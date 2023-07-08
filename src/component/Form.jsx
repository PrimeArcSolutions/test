import React, {useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo   }) => {
  
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => 
      todo.id === id ? {title, id, completed} : todo
    ); 
    setTodos(newTodo);
 setEditTodo(null)
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSumit = (event) => {
    event.preventDefault()
    if(!editTodo){
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo[0].id, editTodo[0].completed)
      setInput("")
    }
  }


    useEffect(() => {
    
      if(editTodo){

        setInput(editTodo[0].title)
      }
    }, [setInput, editTodo]);

    return(
    <form onSubmit={onFormSumit}>
    <input 
    type='text'
    placeholder='Enter a to-do...' 
    className='task-input'
    id='input'
    value={input}
    required
    onChange={onInputChange}
    />
    <button className='button-add' type='submit'>
        Add</button>
    </form>
    )
  
}

export default Form;