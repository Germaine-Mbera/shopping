

import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's your product?</h1>
      <label htmlFor="product name">Product name</label><br></br>
      <input className='product' type='text' placeholder=''></input><br></br>
      <label htmlFor="product name">Store name</label><br></br>
      <input className='product'  type='text' placeholder=''></input><br></br>
      <label htmlFor="product name">Price</label><br></br>
      <input className='product'  type='text' placeholder=''></input><br></br>
      <label htmlFor="product name">Date</label><br></br>
      <input className='product'  type='text' placeholder='mm/dd/yy'></input><br></br>
      <label htmlFor="product name">Description</label><br></br>
      <input className='product'  type='text' placeholder=''></input><br></br>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;