import React from 'react';

const TodosList = ({todos, setTodos, setEditTodo,   setInput}) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )
    }

    const handleEdit = (id) => {
        const findTodo = todos.filter((todo) => todo.id === id)
    
        setEditTodo(findTodo);
      
    };

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
  return (
    (<div>
      {todos.map((todo) => (
        <li className='list-item' key={todo.id}>
            <input type='text' 
            value={todo.title} 
            className={`list &{todo.completed ? "completed" : "" }`} 
            onChange={(event) => event.preventDefault()} />
            <div>
                <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                    Compleate
                </button>
                <button className='button-edit task-button' onClick={() => handleEdit(todo.id)}>Edit</button>
                <button className='button-delete task-button' onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
        </li>
      ) )}
    </div>)
  )
}

export default TodosList;